const LRUCache = require("lru-cache");
const express = require("express");
const next = require("next");
const compression = require("compression");
const port = parseInt(process.env.PORT, 10) || 8081;
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const app = next({ dev: false });
const axios = require("axios");
const config = require("../repositories/config");
const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
  max: 60 * 60 * 4,
  length: (n, key) => n.length,
  maxAge: 60 * 60 * 10,
});

function getCacheKey(req) {
  return ${req.path};
}

async function renderAndCache({ req, res }) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    //console.log(serving from cache ${key});
    res.setHeader("x-cache", "HIT");
    res.setHeader("Cache-Control", "public, max-age=604800");
    res.setHeader("Expires", new Date(Date.now() + 604800).toUTCString());
    res.send(ssrCache.get(key));
    return;
  }

  try {
    //console.log(key ${key} not found, rendering);
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, req.path, req.query);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);
    res.setHeader("x-cache", "MISS");
    res.setHeader("Cache-Control", "public, max-age=604800");
    res.setHeader("Expires", new Date(Date.now() + 604800).toUTCString());
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, req.path, req.query);
  }
}
app.prepare().then(() => {
  const server = express();
  server.use(compression());
  // server.use(
  //   helmet({
  //     contentSecurityPolicy: false,
  //   })
  // );
  server.use(cors());
  server.get("/sitemap/:id", async (req, res) => {
    const { data } = await axios({ url: https://seo-vn.funipos.net/sitemap/${req.params.id}, method: "GET" });
    res.setHeader("Content-Type", "text/xml");
    res.write(data);
    return res.end();
  });
  server.get("/rss/:id", async (req, res) => {
    const { data } = await axios({ url: https://seo-vn.funipos.net/rss/${req.params.id}, method: "GET" });
    res.setHeader("Content-Type", "text/xml");
    res.write(data);
    return res.end();
  });
  server.get("/feed", async (req, res) => {
    const { data } = await axios({ url: https://funimart.wordpress.com/feed, method: "GET" });
    res.setHeader("Content-Type", "application/rss+xml; charset=UTF-8");
    res.write(${data}.replace(/data-permalink="https:\/\/funimart.wordpress.com\//g, data-permalink="https://funimart.vn/ho-tro/));
    return res.end();
  });

  server.get("/_next/*", (req, res) => handle(req, res));
  server.get("/product/:id", (req, res) => res.redirect(301, /san-pham/${req.params.id}));
  server.get("/san-pham/:id", (req, res) => renderAndCache({ req, res }));
  server.get("/ncc/:id", (req, res) => renderAndCache({ req, res }));
  server.get("/danh-muc/:id", (req, res) => renderAndCache({ req, res }));
  server.get("/", (req, res) => renderAndCache({ req, res }));
  server.get("*", (req, res) => {
    if (req.url.startsWith("static/")) {
      const filePath = path.join(__dirname, "..", "public", "static", req.url);
      return app.serveStatic(req, res, filePath, { maxAge: "1w" });
    } else {
      return handle(req, res, req.url);
    }
  });
  server.listen(port, (err) => {
    if (err) throw err;
  });
});
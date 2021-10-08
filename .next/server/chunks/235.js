"use strict";
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 3833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ API_ENDPOINTS)
/* harmony export */ });
const API_ENDPOINTS = {
  LOGIN: "/auth/client/signin",
  GOOGLE_AUTH: "/auth/client/google-signin",
  FACEBOOK_AUTH: "/auth/client/facebook-signin",
  SIGNUP: "/auth/client/signup",
  GET_ACCESS_TOKEN: "/auth/getToken",
  GET_OTP: "/auth/get-otp",
  GET_USER_PROFILE: "/user/getUserProfile",
  GET_USER_FAVORITES: "/user/wishList",
  UPDATE_USER_PASSWORD: "/user/change-password",
  UPDATE_USER_PROFILE: "/user/update-profile",
  LOGOUT: "/logout",
  FORGET_PASSWORD: "/forget-password",
  CATEGORIES: "/api/categories.json",
  FEATURED_CATEGORIES: "/featured_categories.json",
  COLLECTIONS: "/collections.json",
  BRANDS: "/client/brands",
  PRODUCTS: "/api/products.json",
  FEATURED_PRODUCTS: "/featured_products.json",
  TOP_SELLER_PRODUCTS: "/products_top_seller.json",
  ON_SELLING_PRODUCTS: "/products_on_selling.json",
  PRODUCT: "/api/product.json",
  RELATED_PRODUCTS: "/api/related_products.json",
  BEST_SELLER_PRODUCTS: "/products_best_seller.json",
  NEW_ARRIVAL_PRODUCTS: "/client/products/homepage-newest",
  HOMEPAGE_BANNER: "/client/homepage-banner",
  COLLECTION_BANNER: "/client/collections",
  POPUP_BANNER: "/client/homepage-banner-email",
  FLASH_SALE_PRODUCTS: "/products_flash_sale.json",
  SEARCH: "/client/products/search-overview",
  REVIEW: "/user/comment",
  CHECKOUT: "/user/create-order",
  FAVORITE: "/user/wishList",
  ORDERS: "/api/orders.json",
  ORDER: "/orders/details",
  BLOG: "/client/blogs",
  BLOG_NEWEST_BLOGS: "/client/blogs/newest-blogs",
  BLOG_CATEGORIES: "/client/blogs/category",
  ARTICLES: "/client/articles"
};

/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3833);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const http = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
}); // Change request data/error here

http.interceptors.request.use(config => {
  const accessToken = (0,_get_token__WEBPACK_IMPORTED_MODULE_1__/* .getAccessToken */ .h)();
  config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
    Authorization: `Bearer ${accessToken ? accessToken : ""}`
  });
  return config;
}, error => {
  return Promise.reject(error);
});

const createAxiosResponseInterceptor = () => {
  const refreshInterceptor = http.interceptors.response.use(res => {
    return res;
  }, async err => {
    const originalConfig = err.config;

    if (originalConfig.url === `https://api.joolux-client.ml${_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.GET_ACCESS_TOKEN */ .P.GET_ACCESS_TOKEN}` && err.response.status === 401) {
      return Promise.reject(err).catch(() => {
        next_router__WEBPACK_IMPORTED_MODULE_3___default().replace("/?logoutExpired=true");
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove("refresh_token");
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove("access_token");
      });
    } // Access Token was expired


    if (err.response.status === 401) {
      try {
        axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.eject(refreshInterceptor);
        const refreshToken = (0,_get_token__WEBPACK_IMPORTED_MODULE_1__/* .getRefreshToken */ .Y)();
        const rs = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.joolux-client.ml${_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.GET_ACCESS_TOKEN */ .P.GET_ACCESS_TOKEN}`, {
          headers: {
            Authorization: `Bearer ${refreshToken ? refreshToken : ""}`
          } //   refreshToken: http.getLocalRefreshToken(),

        });
        const {
          token: accessToken
        } = rs.data;
        js_cookie__WEBPACK_IMPORTED_MODULE_2___default().set("access_token", accessToken);
        return http(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }

    return Promise.reject(err);
  });
};

createAxiosResponseInterceptor();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);

/***/ })

};
;
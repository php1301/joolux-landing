import { DefaultSeo as NextDefaultSeo } from "next-seo";
import { siteSettings } from "@settings/site-settings";
import { sitePages } from "@settings/site-pages";
import { useRouter } from "next/router";
export const DefaultSeo = () => {
    const { name, description } = siteSettings;
    const { pathname, query } = useRouter();
    const seoTitle = sitePages?.[pathname.substring(1)]?.["page_title"] || name;
    const seoDescription =
        sitePages?.[pathname.substring(1)]?.["page_description"] || description;
    return (
        <NextDefaultSeo
            title={(query.q && `${query.q} | Joolux`) || seoTitle}
            description={seoDescription}
            openGraph={{
                type: "website",
                locale: "en_IE",
                site_name: seoTitle,
            }}
            twitter={{
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image",
            }}
            additionalMetaTags={[
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1 maximum-scale=1",
                },
                {
                    name: "apple-mobile-web-app-capable",
                    content: "yes",
                },
                {
                    name: "theme-color",
                    content: "#ffffff",
                },
            ]}
            additionalLinkTags={[
                {
                    rel: "apple-touch-icon",
                    href: "icons/apple-icon-180.png",
                },
                {
                    rel: "manifest",
                    href: "/manifest.json",
                },
            ]}
        />
    );
};

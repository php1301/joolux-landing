import { NextSeo } from "next-seo";
import { Header } from "@components/layout/header/index";
import { Footer } from "@components/layout/footer/index";
import MobileNavigation from "@components/layout/mobile/mobile";
import Search from "@components/common/search";
import HeaderMenu from "@components/layout/header/header-menu";
import { siteSettings } from "@settings/site-settings";
import { sitePages } from "@settings/site-pages";
import { useRouter } from "next/router";

// File Layout này sẽ được các Pages . đến để appply Layout dynamically
const Layout: React.FC = ({ children }) => {
    const { site_header, name, description } = siteSettings;
    const { pathname } = useRouter();
    const seoTitle = sitePages?.[pathname.substring(1)]?.["page_title"] || name;
    const seoDescription =
        sitePages?.[pathname.substring(1)]?.["page_description"] || description;
    return (
        <div className="flex flex-col min-h-screen">
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title={seoTitle}
                description={seoDescription}
                canonical="https://joolux-client.ml"
                openGraph={{
                    url: "https://joolux-client.ml",
                    title: seoTitle,
                    description: seoDescription,
                    images: [
                        {
                            url: "https://joolux.com/og-image.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url: "https://joolux.com/og-image.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                    ],
                }}
            />
            <Header />
            <HeaderMenu
                data={site_header.menu}
                className="hidden lg:flex md:ms-6 xl:ms-10 max-w-[1920px] md:h-12"
            />
            {/* <Button onClick={() => onAcceptCookies()} type="button">
                <a
                    data-test="docs-btn-anchor"
                    href="https://pankod.github.io/superplate/"
                    target="_blank"
                >
                    Docs
                </a>
            </Button> */}
            {children}
            <Footer />
            <MobileNavigation />
            <Search />
        </div>
    );
};
export { Layout };

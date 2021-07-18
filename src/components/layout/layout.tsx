import { NextSeo } from "next-seo";
import { Header } from "@components/layout/header/index";
import { Footer } from "@components/layout/footer/index";
import { useTranslation } from "next-i18next";
import { useAcceptCookies } from "@utils/use-accept-cookies";
import HeaderMenu from "@components/layout/header/header-menu";
import { siteSettings } from "@settings/site-settings";
import { Button } from "@components/ui/button";

// File Layout này sẽ được các Pages . đến để appply Layout dynamically
const Layout: React.FC = ({ children }) => {
    const { site_header } = siteSettings;
    const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
    const { t } = useTranslation("common");
    return (
        <div className="flex flex-col min-h-screen">
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title="ChawkBazar React - React Next E-commerce Template"
                description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
                canonical="https://webdevstudios.org"
                openGraph={{
                    url: "https://webdevstudios.org",
                    title: "wdssuper - React Next E-commerce Template",
                    description:
                        "Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
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
                className="hidden lg:flex md:ms-6 xl:ms-10 max-w-[1920px]"
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
        </div>
    );
};
export { Layout };

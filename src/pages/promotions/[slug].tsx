import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import StickyBox from "react-sticky-box";
import Container from "@components/ui/container";
import { Layout } from "@components/layout/layout";
import { Subscription } from "@components/common/subscription";
import { ShopFilters } from "@components/shop/filters";
import { ProductGrid } from "@components/product/product-grid";
import SearchTopBar from "@components/shop/top-bar";
import Pagination from "@components/common/pagination";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { ROUTES } from "@utils/routes";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
    useFetchCollectionProducts,
    fetchCollectionProducts,
} from "@framework/product/get-collection-products";
import ErrorInformation from "@components/404/error-information";

const Search: NextPage<{}> & { Layout: typeof Layout } = () => {
    const { t } = useTranslation("common");
    const { query, asPath, pathname } = useRouter();
    const { isLoading, data, error } = useFetchCollectionProducts(
        {
            ...query,
        },
        query.slug as unknown as string,
        Object.values(query).join(","),
    );
    if (error) return <p>{error.message}</p>;
    const { pagination, products, filter, seo, favorites } = data ?? {};

    return (
        <>
            <Container clean>
                <div className={`flex pt-8 pb-16 overflow-hidden lg:pb-20`}>
                    <NextSeo
                        additionalMetaTags={[
                            {
                                name: "viewport",
                                content:
                                    "width=device-width, initial-scale=1.0",
                            },
                        ]}
                        title={`${seo?.name} | Joolux` || "Joolux"}
                        description={seo?.description || "Bộ sưu tập"}
                        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${asPath}`}
                        openGraph={{
                            url: asPath,
                            title: `${seo?.name} | Joolux` || "Joolux",
                            description: seo?.description || "Pending",
                            images: [
                                {
                                    url:
                                        `${process.env.NEXT_PUBLIC_BASE_IMAGE}${seo?.image[0]}` ||
                                        "https://joolux.com/og-image.jpg",
                                    width: 800,
                                    height: 600,
                                    alt: "Og Image Alt",
                                },
                                {
                                    url:
                                        `${process.env.NEXT_PUBLIC_BASE_IMAGE}${seo?.image[0]}` ||
                                        "https://joolux.com/og-image.jpg",
                                    width: 900,
                                    height: 800,
                                    alt: "Og Image Alt Second",
                                },
                            ],
                        }}
                    />
                    <div className="flex-shrink-0 pe-24 hidden  lg:block w-96">
                        <div className="pb-7">
                            <BreadcrumbItems separator="/">
                                <ActiveLink
                                    href={"/"}
                                    activeClassName="font-semibold text-heading"
                                >
                                    {/* <a>{t("breadcrumb-home")}</a> */}
                                    <a>{t("Trang chủ")}</a>
                                </ActiveLink>
                                <ActiveLink
                                    href={ROUTES.HANG_MOI_VE}
                                    activeClassName="font-semibold text-heading"
                                >
                                    <a className="capitalize">
                                        {t("Khuyến mãi")}
                                    </a>
                                </ActiveLink>
                                <ActiveLink
                                    href={`${ROUTES.PROMOTIONS}/${seo?.slug}`}
                                    activeClassName="font-semibold text-heading"
                                >
                                    <a className="capitalize">{t(seo?.name)}</a>
                                </ActiveLink>
                            </BreadcrumbItems>
                        </div>
                        <ShopFilters filter={filter} />
                    </div>
                    <div className="w-full lg:-ms-9">
                        <div className="flex justify-between items-center mb-7">
                            {!isLoading && (
                                <SearchTopBar
                                    totalItems={pagination?.total}
                                    filter={filter}
                                />
                            )}
                        </div>
                        {!isLoading && pagination?.total === 0 && (
                            <ErrorInformation />
                        )}
                        <div
                            className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 transition-opacity duration-300`}
                        >
                            {isLoading ? (
                                <ProductFeedLoader
                                    limit={20}
                                    uniqueKey="search-product"
                                />
                            ) : (
                                pagination?.total !== 0 && (
                                    <ProductGrid
                                        products={products}
                                        favorites={favorites}
                                    />
                                )
                            )}
                        </div>
                        {!isLoading && pagination?.total !== 0 && (
                            <Pagination pagination={pagination} />
                        )}
                    </div>
                </div>
            </Container>
            <Subscription hasTitle />
        </>
    );
};
Search.Layout = Layout;
export default Search;

export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
    resolvedUrl,
}) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(Object.values(query).join(","), async () =>
        fetchCollectionProducts(query.slug as unknown as string, query),
    );
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
            dehydratedState: dehydrate(queryClient),
        },
    };
};

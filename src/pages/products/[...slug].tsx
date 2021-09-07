import Container from "@components/ui/container";
import { NextSeo } from "next-seo";
import { Layout } from "@components/layout/layout";
import { Subscription } from "@components/common/subscription";
import ProductFlashSaleGridFeedLoader from "@components/ui/loaders/product-flash-sale-grid-feed-loader";
import { useRouter } from "next/router";
import { useProductQuery, fetchProduct } from "@framework/product/get-product";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import { VietnameseBreadcrumb } from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import AssuranceBlock from "@containers/assurance-block";

export default function ProductPage() {
    const { query, asPath } = useRouter();
    const { data, isLoading, error } = useProductQuery(query?.slug[1]);
    if (error) return <p>{error.message}</p>;
    const { product, isFavorite } = data ?? {};
    return (
        <div className="relative flex-grow">
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title={`${product?.name} | Joolux` || "Joolux"}
                description={product?.description || "Pending"}
                canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${asPath}`}
                openGraph={{
                    url: asPath,
                    title: `${product?.name} | Joolux` || "Joolux",
                    description: product?.description || "Pending",
                    images: [
                        {
                            url:
                                `${process.env.NEXT_PUBLIC_BASE_IMAGE}${product?.images[0]}` ||
                                "https://joolux.com/og-image.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url:
                                `${process.env.NEXT_PUBLIC_BASE_IMAGE}${product?.images[0]}` ||
                                "https://joolux.com/og-image.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                    ],
                }}
            />
            <Divider className="mb-0" />
            <Container>
                {isLoading ? (
                    <ProductFlashSaleGridFeedLoader limit={1} />
                ) : data ? (
                    <>
                        <div className="pt-8">
                            <VietnameseBreadcrumb
                                type={product?.details?.[18]?.value}
                                typeLink={product?.details?.[18]?.slug}
                                name={product?.name}
                            />
                        </div>
                        <ProductSingleDetails
                            data={product}
                            isFavorite={isFavorite}
                        />
                        <AssuranceBlock />
                        <RelatedProducts
                            brand={product?.brand}
                            category={product?.attribute}
                            id={product?._id}
                            className="mx-auto max-w-[1234px] pt-8 smJl:pb-16 pb-10 border-t border-[#e7e7e7] mb-8 md:mb-14"
                            sectionHeading="text-related-products"
                        />
                    </>
                ) : (
                    <div>Có lỗi xảy ra</div>
                )}
            </Container>
            <Subscription hasTitle />
        </div>
    );
}
ProductPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
}) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(query?.slug[1], async () =>
        fetchProduct(query?.slug[1]),
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

// ProductPage.getInitialProps = async ({ locale, query, req }) => {
//     const queryClient = new QueryClient();
//     await queryClient.prefetchQuery(query.slug[1], async () =>
//         fetchProduct(query.slug[1]),
//     );
//     return {
//         // translation: ...(await serverSideTranslations(locale!, [
//         //     "common",
//         //     "forms",
//         //     "menu",
//         //     "footer",
//         // ])),
//         // dehydratedState: dehydrate(queryClient),
//     };
// };

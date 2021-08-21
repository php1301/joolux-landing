import Container from "@components/ui/container";
import { Layout } from "@components/layout/layout";
import { Subscription } from "@components/common/subscription";
import ProductFlashSaleGridFeedLoader from "@components/ui/loaders/product-flash-sale-grid-feed-loader";
import { useRouter } from "next/router";
import { useProductQuery } from "@framework/product/get-product";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import { VietnameseBreadcrumb } from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import AssuranceBlock from "@containers/assurance-block";

export default function ProductPage() {
    const { query } = useRouter();
    const { data, isLoading } = useProductQuery(query.slug[1] as string);

    return (
        <div className="relative flex-grow">
            <Divider className="mb-0" />
            <Container>
                {isLoading ? (
                    <ProductFlashSaleGridFeedLoader limit={1} />
                ) : data ? (
                    <>
                        <div className="pt-8">
                            <VietnameseBreadcrumb
                                type={data?.details[18].value}
                                typeLink={data?.details[18].slug}
                                name={data?.name}
                            />
                        </div>
                        <ProductSingleDetails data={data} />
                        <RelatedProducts
                            brand={data?.brand}
                            category={data?.attribute}
                            id={data?._id}
                            sectionHeading="text-related-products"
                        />
                    </>
                ) : (
                    <div>Có lỗi xảy ra</div>
                )}
                <AssuranceBlock />
                <Subscription />
            </Container>
        </div>
    );
}
ProductPage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};

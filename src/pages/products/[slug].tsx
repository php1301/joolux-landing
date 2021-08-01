import Container from "@components/ui/container";
import { Layout } from "@components/layout/layout";
import { Subscription } from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import AssuranceBlock from "@containers/assurance-block";

export default function ProductPage() {
    return (
        <div className="relative flex-grow">
            <Divider className="mb-0" />
            <Container>
                <div className="pt-8">
                    <Breadcrumb />
                </div>
                <ProductSingleDetails />
                <RelatedProducts sectionHeading="text-related-products" />
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

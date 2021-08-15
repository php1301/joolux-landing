import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import StickyBox from "react-sticky-box";
import Container from "@components/ui/container";
import { Layout } from "@components/layout/layout";
import { Subscription } from "@components/common/subscription";
import cookies from "next-cookies";
import { ShopFilters } from "@components/shop/filters";
import { ProductGrid } from "@components/product/product-grid";
import SearchTopBar from "@components/shop/top-bar";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import { ROUTES } from "@utils/routes";

const Search: NextPage<{ temp_total: number }> & { Layout: typeof Layout } = ({
    temp_total,
}) => {
    const { t } = useTranslation("common");
    return (
        <Container>
            <div className={`flex pt-8 pb-16 lg:pb-20`}>
                <div className="flex-shrink-0 pe-24 hidden lg:block w-96">
                    <StickyBox offsetTop={50} offsetBottom={20}>
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
                                    href={ROUTES.SEARCH}
                                    activeClassName="font-semibold text-heading"
                                >
                                    <a className="capitalize">
                                        {/* {t("breadcrumb-search")} */}
                                        {t("Hàng mới về")}
                                    </a>
                                </ActiveLink>
                            </BreadcrumbItems>
                        </div>
                        <ShopFilters />
                    </StickyBox>
                </div>
                <div className="w-full lg:-ms-9">
                    <SearchTopBar />
                    <ProductGrid temp_total={temp_total} />
                </div>
            </div>
            <Subscription />
        </Container>
    );
};
Search.Layout = Layout;
export default Search;

export const getServerSideProps: GetServerSideProps = async ({
    locale,
    ...ctx
}) => {
    const { temp_total } = cookies(ctx);
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
            temp_total: parseInt(temp_total) || 137,
        },
    };
};

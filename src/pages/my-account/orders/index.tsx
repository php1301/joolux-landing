import { Layout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import OrdersTable from "@components/my-account/orders-table";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";

const UserOrdersPage: NextPage & { Layout: typeof Layout } = () => {
    return (
        <AccountLayout>
            <OrdersTable />
        </AccountLayout>
    );
};

UserOrdersPage.Layout = Layout;

export default UserOrdersPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
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

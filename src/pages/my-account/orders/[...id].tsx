import { Layout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import OrderDetails from "@components/order/order-details";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, NextPage } from "next";

const UserOrderDetailsPage: NextPage & { Layout: typeof Layout } = () => {
    return (
        <AccountLayout>
            <OrderDetails />
        </AccountLayout>
    );
};

UserOrderDetailsPage.Layout = Layout;

export default UserOrderDetailsPage;
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

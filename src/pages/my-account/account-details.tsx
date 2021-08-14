import { Layout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import AccountDetails from "@components/my-account/account-details";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";

const AccountDetailsPage: NextPage & { Layout: typeof Layout } = () => {
    return (
        <AccountLayout>
            <AccountDetails />
        </AccountLayout>
    );
};

AccountDetailsPage.Layout = Layout;

export default AccountDetailsPage;
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

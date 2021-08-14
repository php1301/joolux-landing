import { Layout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import ChangePassword from "@components/my-account/change-password";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";

const ChangePasswordPage: NextPage & { Layout: typeof Layout } = () => {
    return (
        <AccountLayout>
            <ChangePassword />
        </AccountLayout>
    );
};

ChangePasswordPage.Layout = Layout;

export default ChangePasswordPage;
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

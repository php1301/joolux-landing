import { Layout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import ChangePassword from "@components/my-account/change-password";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextCookie from "next-cookies";
import { GetServerSideProps, NextPage } from "next";

const ChangePasswordPage: NextPage & { Layout: typeof Layout } = () => {
    return (
        <AccountLayout>
            <ChangePassword />
        </AccountLayout>
    );
};

ChangePasswordPage.Layout = Layout;

export default ChangePasswordPage;
export const getServerSideProps: GetServerSideProps = async ({
    locale,
    ...ctx
}) => {
    const { access_token, refresh_token } = nextCookie(ctx);
    if (!access_token || !refresh_token) {
        return {
            redirect: {
                destination: "/404",
                statusCode: 303,
            },
        };
    }
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

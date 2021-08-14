import { Layout } from "@components/layout/layout";
import Container from "@components/ui/container";
import ResetPassword from "@components/auth/reset-password-form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, NextPage } from "next";

const ResetPasswordPage: NextPage & { Layout: typeof Layout } = () => {
    return (
        <div className="relative flex-grow">
            <Container>
                <div className="py-16 lg:py-20 items-center">
                    <ResetPassword />
                </div>
            </Container>
        </div>
    );
};

ResetPasswordPage.Layout = Layout;

export default ResetPasswordPage;
export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
}) => {
    if (!query.token) {
        return {
            redirect: {
                destination: "/",
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

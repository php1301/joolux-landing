import Link from "@components/ui/link";
import { Layout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import { ROUTES } from "@utils/routes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import nextCookie from "next-cookies";
import { GetServerSideProps, NextPage } from "next";

const MyAccount: NextPage & { Layout: typeof Layout } = () => {
    const { t } = useTranslation("common");

    return (
        <AccountLayout>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
                {t("text-dashboard")}
            </h2>
            <p className=" text-sm leading-7 md:text-base md:leading-loose lowercase">
                {t("text-account-dashboard")}{" "}
                <Link
                    href={ROUTES.ORDERS}
                    className="text-heading underline font-semibold"
                >
                    {t("text-recent-orders")}
                </Link>
                , {t("text-manage-your")}{" "}
                <Link
                    href={ROUTES.ACCOUNT_DETAILS}
                    className="text-heading underline font-semibold"
                >
                    {t("text-account-details")}
                </Link>{" "}
                {t("text-and")}{" "}
                <Link
                    href={ROUTES.CHANGE_PASSWORD}
                    className="text-heading underline font-semibold"
                >
                    {t("text-change-your-password")}
                </Link>
                .
            </p>
        </AccountLayout>
    );
};

MyAccount.Layout = Layout;
export default MyAccount;

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

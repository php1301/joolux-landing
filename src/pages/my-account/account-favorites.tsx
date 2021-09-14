import nextCookie from "next-cookies";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AccountFavoritesComponent from "@components/my-account/account-favorites";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import {
    fetchUserFavorites,
    useGetUserFavorites,
} from "@framework/user/get-user-favorites";
import Pagination from "@components/common/pagination";

const AccountFavorites: NextPage & { Layout: typeof Layout } = () => {
    const { query } = useRouter();
    const { isLoading, data, error } = useGetUserFavorites(
        {
            ...query,
        },
        Object.values(query).join(","),
    );
    if (error) return <p>{error.message}</p>;
    const { pagination, wishList } = data ?? {};
    return (
        <AccountLayout>
            <AccountFavoritesComponent
                isLoading={isLoading}
                pagination={pagination}
                wishList={wishList}
            />
            {!isLoading && pagination?.total !== 0 && (
                <Pagination pagination={pagination} />
            )}
        </AccountLayout>
    );
};

AccountFavorites.Layout = Layout;

export default AccountFavorites;
export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
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
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        [API_ENDPOINTS.GET_USER_FAVORITES, Object.values(query).join(",")],
        async () => fetchUserFavorites(query),
    );
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
            dehydratedState: dehydrate(queryClient),
        },
    };
};

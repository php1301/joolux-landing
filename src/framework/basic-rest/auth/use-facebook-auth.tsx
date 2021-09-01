import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useMutation } from "react-query";

export interface FacebookAuthInputType {
    tokenId: string;
    avatar: string;
    email: string;
    name: string;
}
export interface LoginResponseType {
    accessToken?: string;
    refreshToken?: string;
}
async function facebookAuth(
    input: FacebookAuthInputType,
): Promise<LoginResponseType> {
    const {
        data: { accessToken, refreshToken },
    } = await http.post(
        `https://api.joolux-client.ml${API_ENDPOINTS.FACEBOOK_AUTH}`,
        input,
    );
    return {
        accessToken,
        refreshToken,
    };
}
export const useFacebookAuthMutation = () => {
    const { authorize, closeModal } = useUI();
    return useMutation<LoginResponseType, Error, FacebookAuthInputType>(
        async (input: FacebookAuthInputType) => facebookAuth(input),
        {
            onSuccess: (data: LoginResponseType) => {
                toast("Đăng nhập Facebook thành công", {
                    type: "success",
                    progressClassName: "fancy-progress-bar",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                Cookies.set("access_token", data.accessToken);
                Cookies.set("refresh_token", data.refreshToken);
                authorize();
                closeModal();
                // setTimeout(() => {
                //     window.location.href = window.location.origin;
                // }, 3000);
            },
            onError: (error: Error) => {
                console.log(error.message, "Sign In error");
                toast("Có lỗi đăng nhập với Facebook", {
                    type: "error",
                    progressClassName: "fancy-progress-bar",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                // setTimeout(() => {
                //     window.location.href = window.location.origin;
                // }, 3000);
            },
        },
    );
};

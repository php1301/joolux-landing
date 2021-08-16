import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import Router from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

export interface SignUpInputType {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    phone: string;
    otp: string;
    captcha: string;
    sessionInfo: string;
}
export interface SignUpResponseType {
    accessToken?: string;
    refreshToken?: string;
}
async function signUp(input: SignUpInputType): Promise<SignUpResponseType> {
    const {
        data: { accessToken, refreshToken },
    } = await http.post(`https://api.joolux-client.ml${API_ENDPOINTS.SIGNUP}`, {
        ...input,
        code: input.otp,
    });
    return {
        accessToken,
        refreshToken,
    };
}
export const useSignUpMutation = () => {
    const { authorize, closeModal } = useUI();
    // return useMutation<any, Error, LoginInputType>(
    return useMutation<SignUpResponseType, AxiosError, SignUpInputType>(
        async (input: SignUpInputType) => signUp(input),
        {
            onSuccess: (data: SignUpResponseType) => {
                console.log(data, "Sign Up Success");
                toast("Đăng ký thành công bạn sẽ được chuyển hướng", {
                    type: "success",
                    progressClassName: "fancy-progress-bar",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                localStorage.removeItem("session_otp");
                Cookies.set("access_token", data.accessToken);
                Cookies.set("refresh_token", data.refreshToken);
                Router.push("/my-account");
                authorize();
                closeModal();
            },
            onError: (error: AxiosError) => {
                console.log(error.response, "Sign Up error");
                localStorage.removeItem("session_otp");
                if (error.response.data.message.split(" ")[0] === "Email") {
                    toast("Email này đã được đăng ký", {
                        type: "error",
                        progressClassName: "fancy-progress-bar",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                } else if (
                    error.response.data.message.split(" ")[0] === "Please"
                ) {
                    toast("Vui lòng nhập mã OTP hợp lệ", {
                        type: "error",
                        progressClassName: "fancy-progress-bar",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                } else {
                    toast("Có lỗi đăng ký", {
                        type: "error",
                        progressClassName: "fancy-progress-bar",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
            },
        },
    );
};

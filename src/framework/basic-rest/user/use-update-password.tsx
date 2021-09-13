import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { useWindowSize } from "@utils/use-window-size";

export interface ChangePasswordInputType {
    newPassword: string;
    oldPassword: string;
    confirmNewpassword: string;
}
async function changePassword(input: ChangePasswordInputType) {
    return http.put(
        `https://api.joolux-client.ml${API_ENDPOINTS.UPDATE_USER_PASSWORD}`,
        input,
    );
}
export const useChangePasswordMutation = () => {
    const { width } = useWindowSize();

    return useMutation(
        (input: ChangePasswordInputType) => changePassword(input),
        {
            onSuccess: (data) => {
                console.log(data, "ChangePassword success response");
                toast("Cập nhật mật khẩu thành công", {
                    type: "dark",
                    progressClassName: "fancy-progress-bar",
                    position: width > 768 ? "bottom-right" : "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            },
            onError: (data) => {
                console.log(data, "ChangePassword error response");
                toast("Cập nhật thông tin không thành công", {
                    type: "error",
                    progressClassName: "fancy-progress-bar",
                    position: width > 768 ? "bottom-right" : "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            },
        },
    );
};

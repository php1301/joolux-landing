import { useRef, useEffect } from "react";
import PasswordInput from "@components/ui/password-input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import {
    useChangePasswordMutation,
    ChangePasswordInputType,
} from "@framework/user/use-update-password";
import { useTranslation } from "next-i18next";

const defaultValues = {
    oldPassword: "",
    newPassword: "",
};
const ChangePassword: React.FC<{ setPage: any }> = ({ setPage }) => {
    const {
        mutate: changePassword,
        isLoading,
        isSuccess,
    } = useChangePasswordMutation();
    const oldPassword = useRef({});
    const newPassword = useRef({});

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        watch,
    } = useForm<ChangePasswordInputType>({
        defaultValues,
    });
    oldPassword.current = watch("oldPassword", "");
    newPassword.current = watch("newPassword", "");

    function onSubmit(input: ChangePasswordInputType) {
        if (isDirty) {
            changePassword(input);
        }
    }
    useEffect(() => {
        if (isSuccess) {
            setPage(1);
            window.scrollTo({ top: 0 });
        }
    }, [isSuccess]);
    const { t } = useTranslation();
    return (
        <>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("common:text-change-password")}
            </h2>
            <motion.div
                layout
                initial="from"
                animate="to"
                exit="from"
                //@ts-ignore
                variants={fadeInTop(0.35)}
                className={`w-full flex  h-full lg:w-8/12 flex-col`}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full mx-auto flex flex-col justify-center "
                >
                    <div className="flex flex-col space-y-3">
                        <PasswordInput
                            labelKey="M???t kh???u c??"
                            variant="jl"
                            errorKey={errors.oldPassword?.message}
                            {...register("oldPassword", {
                                required: "Th??ng tin b???t bu???c",
                                minLength: {
                                    value: 8,
                                    message: "M???t kh???u ph???i c?? ??t nh???t 8 k?? t???",
                                },
                            })}
                        />
                        <PasswordInput
                            labelKey="M???t kh???u m???i"
                            variant="jl"
                            errorKey={errors.newPassword?.message}
                            {...register("newPassword", {
                                required: "Th??ng tin b???t bu???c",
                                minLength: {
                                    value: 8,
                                    message:
                                        "M???t kh???u m???i ph???i c?? ??t nh???t 8 k?? t???",
                                },
                                validate: (value) =>
                                    value !== oldPassword.current ||
                                    "M???t kh???u m???i ph???i kh??c m???t kh???u c??",
                            })}
                            className="mb-4"
                        />
                        <PasswordInput
                            labelKey="X??c nh???n m???t kh???u m???i"
                            variant="jl"
                            errorKey={errors.confirmPassword?.message}
                            {...register("confirmPassword", {
                                required: "Th??ng tin b???t bu???c",
                                validate: (value) =>
                                    value === newPassword.current ||
                                    "M???t kh???u m???i ch??a gi???ng",
                            })}
                            className="mb-4"
                        />

                        <div className="relative">
                            <Button
                                type="submit"
                                loading={isLoading}
                                disabled={isLoading}
                                variant="jl"
                                className="h-12 mt-3 w-full sm:w-40 mr-3"
                            >
                                ?????i m???t kh???u
                            </Button>
                            <Button
                                type="button"
                                variant="jl"
                                className="h-12 mt-3 w-full sm:w-40 step-form-button-back"
                                onClick={() => {
                                    setPage(1);
                                    window.scrollTo({ top: 0 });
                                }}
                            >
                                H???y
                            </Button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </>
    );
};

export default ChangePassword;

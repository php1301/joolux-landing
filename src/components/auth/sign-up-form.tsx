/* eslint-disable no-useless-escape */
import { useState, useEffect, useRef } from "react";
import { Input } from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { Logo } from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { useSignUpMutation, SignUpInputType } from "@framework/auth/use-signup";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
const SignUpForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [initialTime, setInitialTime] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const { t } = useTranslation();
    const { mutate: signUp, isLoading } = useSignUpMutation();
    const { setModalView, openModal, closeModal } = useUI();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        watch,
    } = useForm<SignUpInputType>({
        mode: "all",
    });
    const newPassword = useRef({});
    newPassword.current = watch("password", "");
    const phoneNumber = getValues("phone");
    const handleGetOtp = () => {
        if (phoneNumber && !errors.phone?.message) {
            setInitialTime(5);
            setStartTimer(true);
        }
    };

    useEffect(() => {
        if (initialTime > 0) {
            setTimeout(() => {
                setInitialTime(initialTime - 1);
            }, 1000);
        }

        if (initialTime === 0 && startTimer) {
            setStartTimer(false);
        }
    }, [initialTime, startTimer]);

    function handleSignIn() {
        setModalView("LOGIN_VIEW");
        return openModal();
    }
    const prevStep = () => setStep((step) => step - 1);
    const nextStep = () => setStep((step) => step + 1);

    function onSubmit({
        name,
        email,
        password,
        confirmPassword,
        phone,
        otp,
    }: SignUpInputType) {
        if (step !== 1) {
            signUp({
                name,
                email,
                password,
                confirmPassword,
                phone,
                otp,
            });
            console.log(name, email, password, "sign form values");
        } else {
            nextStep();
        }
    }
    return (
        <div className="overflow-hidden pt-5 px-5 sm:px-8 bg-white mx-auto w-full sm:w-96 md:w-450px border border-gray-300">
            <div className="text-center mb-6 pt-2.5">
                <div onClick={closeModal}>
                    <Logo />
                </div>
                <div className="p-2 mb-[10px] text-xs text-black bg-[#f5f5f5] -mx-5 sm:-mx-8">
                    Authenticated Luxury Consignment
                </div>
                <p className="text-lg md:text-base text-black font-bold uppercase mt-2 mb-8 sm:mb-10">
                    {t("common:registration-helper")}{" "}
                    {/* <Link
                        href={ROUTES.TERMS}
                        className="text-heading underline hover:no-underline focus:outline-none"
                    >
                        {t("common:text-terms")}
                    </Link>{" "}
                    &amp;{" "}
                    <Link
                        href={ROUTES.POLICY}
                        className="text-heading underline hover:no-underline focus:outline-none"
                    >
                        {t("common:text-policy")}
                    </Link> */}
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center"
                noValidate
            >
                <div className="flex flex-col space-y-4">
                    {step === 1 && (
                        <>
                            <Input
                                placeholderKey="forms:label-email"
                                type="email"
                                variant="jl"
                                {...register("email", {
                                    required: `${t("Thông tin bắt buộc")}`,
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: t("forms:email-error"),
                                    },
                                })}
                                errorKey={errors.email?.message}
                            />
                            <PasswordInput
                                placeholderKey="Mật khẩu"
                                variant="jl"
                                errorKey={errors.password?.message}
                                {...register("password", {
                                    required: `${t("Thông tin bắt buộc")}`,
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Mật khẩu phải có ít nhất 8 kí tự",
                                    },
                                })}
                            />
                            <PasswordInput
                                placeholderKey="Xác nhận mật khẩu"
                                variant="jl"
                                errorKey={errors.confirmPassword?.message}
                                {...register("confirmPassword", {
                                    required: `${t("Thông tin bắt buộc")}`,
                                    validate: (value) =>
                                        value === newPassword.current ||
                                        "Mật khẩu xác nhận chưa giống",
                                })}
                            />
                        </>
                    )}
                    {step !== 1 && (
                        <>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <Input
                                    placeholderKey="Nhập số điện thoại"
                                    type="text"
                                    variant="jl"
                                    inputClassName="px-4 lg:px-7 h-8 md:h-10 text-center sm:text-start bg-white"
                                    {...register("phone", {
                                        required: "Thông tin bắt buộc",
                                        pattern: {
                                            value: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                                            message:
                                                "Số điện thoại không hợp lệ",
                                        },
                                    })}
                                    errorKey={errors.phone?.message}
                                />
                                <Button
                                    disabled={startTimer || !phoneNumber}
                                    type="button"
                                    onClick={handleGetOtp}
                                    variant="jl"
                                    className={`mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 h-8 md:h-10 flex-shrink-1  ${
                                        (startTimer ||
                                            !phoneNumber ||
                                            errors.phone?.message) &&
                                        "bg-[#585858ab] hover:bg-[#585858ab]"
                                    }`}
                                >
                                    <span className="lg:py-0.5">
                                        {`Lấy mã OTP ${
                                            startTimer
                                                ? `(${initialTime}s)`
                                                : ""
                                        }`}
                                    </span>
                                </Button>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start justify-between">
                                <Input
                                    placeholderKey="Nhập mã OTP"
                                    type="text"
                                    variant="jl"
                                    inputClassName="px-4 lg:px-7 h-8 md:h-10 text-center sm:text-start bg-white"
                                    {...register("otp", {
                                        required: "Thông tin bắt buộc",
                                    })}
                                    errorKey={errors.otp?.message}
                                />
                            </div>
                        </>
                    )}
                    {step === 1 ? (
                        <div className="relative">
                            <Button
                                type="submit"
                                loading={isLoading}
                                variant="jl"
                                disabled={isLoading}
                                className="h-11 md:h-12 w-full mt-1.5"
                            >
                                Tiếp tục
                            </Button>
                        </div>
                    ) : (
                        // <div className="mt-5 flex items-center">
                        //     <Button
                        //         type="button"
                        //         loading={isLoading}
                        //         variant="jl"
                        //         disabled={isLoading}
                        //         className="h-11 md:h-12 w-1/2 mt-1.5 bg-white text-black hover:bg-gray-300"
                        //     >
                        //         Quay lại
                        //     </Button>
                        //     <Button
                        //         type="submit"
                        //         loading={isLoading}
                        //         variant="jl"
                        //         disabled={isLoading}
                        //         className="h-11 md:h-12 w-1/2 mt-1.5"
                        //     >
                        //         {t("common:text-register")}
                        //     </Button>
                        // </div>
                        <>
                            <Button
                                type="button"
                                loading={isLoading}
                                variant="jl"
                                onClick={prevStep}
                                disabled={isLoading}
                                className="h-11 md:h-12 w-full mt-1.5 step-form-button-back"
                            >
                                Quay lại
                            </Button>
                            <Button
                                type="submit"
                                loading={isLoading}
                                variant="jl"
                                disabled={isLoading}
                                className="h-11 md:h-12 w-full mt-1.5"
                            >
                                {t("common:text-register")}
                            </Button>
                        </>
                    )}
                </div>
            </form>
            <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
                <hr className="w-full border-gray-300" />
                <span className="absolute -top-2.5 px-2 bg-white">
                    {t("common:text-or")}
                </span>
            </div>
            <Button
                loading={isLoading}
                disabled={isLoading}
                variant="jl"
                className="h-11 md:h-12 w-full mt-2.5 bg-white text-black hover:opacity-80 border-solid border-[1px] border-[#101010] hover:bg-white"
                // onClick={handelSocialLogin}
            >
                <SiFacebook className="text-sm sm:text-base me-1.5 text-[#1877f2]" />
                {t("common:text-login-with-facebook")}
            </Button>
            <Button
                loading={isLoading}
                disabled={isLoading}
                variant="jl"
                className="h-11 md:h-12 w-full mt-2.5 bg-white text-black hover:opacity-80 border-solid border-[1px] border-[#101010] hover:bg-white"
                // onClick={handelSocialLogin}
            >
                <FcGoogle className="text-sm sm:text-base me-1.5" />
                {t("common:text-login-with-google")}
            </Button>
            <p className="text-[9.8px] md:text-[9px] text-body mt-2 mb-8 sm:mb-10 text-center">
                By joining into Joolux, you agree to the{" "}
                <Link
                    href={ROUTES.TERMS}
                    className="text-heading underline hover:no-underline focus:outline-none"
                >
                    {t("common:text-terms")}
                </Link>{" "}
                &amp;{" "}
                <Link
                    href={ROUTES.POLICY}
                    className="text-heading underline hover:no-underline focus:outline-none"
                >
                    {t("common:text-policy")}
                </Link>{" "}
                and to receive promotional emails.
            </p>
            <div className="bg-[#eee] mt-2 -mx-5 sm:-mx-8">
                <div className="inline-block text-xs text-body text-center my-2 w-1/2 border-solid border-r-[1px] border-[#333]">
                    <button
                        type="button"
                        className="text-xs text-heading underline font-extralight hover:no-underline focus:outline-none"
                        onClick={handleSignIn}
                    >
                        Member sign in
                    </button>
                </div>
                <div className="inline-block text-xs text-body text-center my-2 w-1/2">
                    <button
                        type="button"
                        className="text-xs text-heading underline font-extralight hover:no-underline focus:outline-none"
                        onClick={handleSignIn}
                    >
                        Sell with us
                    </button>
                </div>
            </div>{" "}
        </div>
    );
};
export default SignUpForm;

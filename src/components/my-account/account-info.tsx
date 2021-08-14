/* eslint-disable no-useless-escape */
import { Button } from "@components/ui/button";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import { useTranslation } from "next-i18next";
const AccountInfo: React.FC<{ setPage: any }> = ({ setPage }) => {
    const { t } = useTranslation();
    return (
        <motion.div
            layout
            initial="from"
            animate="to"
            exit="from"
            //@ts-ignore
            variants={fadeInTop(0.35)}
            className={`w-full flex flex-col`}
        >
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("common:text-account-details")}
            </h2>
            <div className="w-full mx-auto flex flex-col justify-center ">
                <div className="flex flex-col space-y-4 sm:space-y-5">
                    <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                        <div className="w-full sm:w-1/2 mr-3">
                            <div
                                className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                            >
                                {t("forms:label-first-name")}
                            </div>
                            <p>Phúc</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div
                                className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                            >
                                {t("forms:label-last-name")}
                            </div>
                            <p>Phạm</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                        <div className="w-full sm:w-1/2 mr-3">
                            <div
                                className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                            >
                                {t("forms:label-phone")}
                            </div>
                            <p>090807060504</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div
                                className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                            >
                                {t("Địa chỉ")}
                            </div>
                            <p>123 Điện Biên Phủ Quận 1</p>
                        </div>
                    </div>
                    {/* <div className="relative flex flex-col"> */}
                    <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                        <div className="w-full sm:w-1/2 mr-3">
                            <div
                                className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                            >
                                {t("common:text-gender")}
                            </div>
                            <p>Nam</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div
                                className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                            >
                                {t("forms:label-email-star")}
                            </div>
                            <p>abc@gmail.com</p>
                        </div>
                    </div>
                    <div className="relative">
                        <Button
                            type="button"
                            onClick={() => {
                                setPage(2);
                            }}
                            variant="jl"
                            className="h-12 mt-3 w-full sm:w-40"
                        >
                            Sửa thông tin
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AccountInfo;

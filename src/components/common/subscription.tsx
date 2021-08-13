import { useState } from "react";
import { Text } from "@components/ui/text";
import cn from "classnames";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { IoClose } from "react-icons/io5";

const data = {
    title: "common:text-subscribe-heading",
    description: "common:text-subscribe-description",
    buttonText: "common:button-subscribe",
};

interface Props {
    className?: string;
}

type FormValues = {
    subscription_email: string;
};

const defaultValues = {
    subscription_email: "",
};

export const Subscription: React.FC<Props> = ({
    className = "px-5 sm:px-8 md:px-16 2xl:px-24",
}) => {
    const [show, setShow] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ defaultValues });
    const { t } = useTranslation();
    const { title, description, buttonText } = data;
    async function onSubmit(input: FormValues) {
        console.log(input, "data");
    }
    const closeBtnClasses = {
        center: "top-4 end-4",
        bottom: "top-1/4 start-1/2 transform -translate-y-1/2 -translate-x-1/2",
    };

    return (
        show && (
            <div
                className={`${className} flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16 relative`}
            >
                <button
                    onClick={() => {
                        setShow(false);
                    }}
                    aria-label="Close panel"
                    className={cn(
                        "absolute z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-transparent shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md",
                        closeBtnClasses["center"],
                    )}
                >
                    <IoClose className="text-xl" />
                </button>
                <div className="-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center xl:text-start mb-7 md:mb-8 lg:mb-9 xl:mb-0">
                    <Text
                        variant="mediumHeading"
                        className="mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5"
                    >
                        {t(`${title}`)}
                    </Text>
                    <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
                        {t(`${description}`)}
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex-shrink-0 w-full sm:w-96 md:w-[545px]"
                    noValidate
                >
                    <div className="flex flex-col sm:flex-row items-start justify-end">
                        <Input
                            placeholderKey="forms:placeholder-email-subscribe"
                            type="email"
                            variant="jl"
                            className="w-full"
                            inputClassName="px-4 lg:px-7 h-10 lg:h-12 text-center sm:text-start bg-white"
                            {...register("subscription_email", {
                                required: "forms:email-required",
                                pattern: {
                                    // eslint-disable-next-line no-useless-escape
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "forms:email-error",
                                },
                            })}
                            errorKey={errors.subscription_email?.message}
                        />
                        <Button
                            variant="jl"
                            className="mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 h-10 lg:h-12 flex-shrink-0"
                        >
                            <span className="lg:py-0.5">
                                {t(`${buttonText}`)}
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        )
    );
};

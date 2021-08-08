import MultiStepForm from "@components/common/form/multi-step-form";
import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
const CheckoutFormInfoStep = dynamic(
    () => import("@components/checkout/checkout-form-info-step"),
    { ssr: false },
);

const CheckoutFormMethodStep = dynamic(
    () => import("@components/checkout/checkout-form-method-step"),
    { ssr: false },
);

const CheckoutFormConfirmStep = dynamic(
    () => import("@components/checkout/checkout-form-confirm-step"),
    { ssr: false },
);

const CheckoutForm: FC = () => {
    const [step, setStep] = useState<number>(1);
    const nextStep = () => {
        setStep((prev) => prev + 1);
    };
    const prevStep = () => {
        setStep((prev) => prev - 1);
    };
    const stepData = [
        {
            id: 1,
            stepBody: (
                <CheckoutFormInfoStep
                    formStep={1}
                    step={step}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            ),
            stepHeader: "Thông tin và địa chỉ nhận hàng",
        },
        {
            id: 2,
            stepBody: (
                <CheckoutFormMethodStep
                    formStep={2}
                    step={step}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            ),
            stepHeader: "Phương thức thanh toán",
        },
        {
            id: 3,
            stepBody: (
                <CheckoutFormConfirmStep
                    formStep={3}
                    step={step}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            ),
            stepHeader: "Xem lại đơn đặt hàng",
        },
    ];
    return <MultiStepForm step={step} stepData={stepData} />;
};
export default CheckoutForm;

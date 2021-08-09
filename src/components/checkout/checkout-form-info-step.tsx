import React, { FC, useState } from "react";
import CheckoutRadioBox from "./checkout-radio-box";
import { IInfoStepProps } from "./types";
import { city, districts } from "@public/api/geo-city-vn";

const radioList = [
    {
        id: 1,
        labelText: "Nam",
        value: "male",
    },
    {
        id: 2,
        labelText: "Nữ",
        value: "female",
    },
    {
        id: 3,
        labelText: "Khác",
        value: "other",
    },
];
const formatValueSelect = (value: string) => {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .replace(/ /g, "")
        .toUpperCase();
};
const CheckoutFormInfoStep: FC<IInfoStepProps> = ({
    step,
    formStep,
    register,
    errors,
    handleSubmit,
}) => {
    const [radioItem, setRadioItem] = useState(1);
    const [districtIndex, setDistrictIndex] = useState(null);

    const handleOnChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDistrictIndex(e.target.selectedIndex - 1);
    };
    return (
        step === formStep && (
            <form action="#">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-3">
                        <label className="step-form-element">
                            <div className="step-form-element-label">
                                Họ và tên{/* */} *
                            </div>
                            <input
                                {...register("fullname", {
                                    required: "Thông tin bắt buộc",
                                })}
                                type="text"
                                name="fullname"
                                defaultValue=""
                                className={`step-form-input w-full ${
                                    errors.fullname?.message && "border-red-600"
                                }`}
                                placeholder="Nhập họ và tên đầy đủ"
                            />
                            {errors.fullname?.message && (
                                <p className="step-form-input-error">
                                    {errors.fullname?.message}
                                </p>
                            )}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-3">
                        <label className="step-form-element">
                            <div className="step-form-element-label">
                                Địa chỉ{/* */} *
                            </div>
                            <input
                                type="text"
                                {...register("address", {
                                    required: "Thông tin bắt buộc",
                                })}
                                name="address"
                                defaultValue=""
                                className={`step-form-input w-full ${
                                    errors.address?.message && "border-red-600"
                                }`}
                                placeholder="Vui lòng ghi cụ thể địa chỉ, tòa nhà..."
                            />
                            {errors.address?.message && (
                                <p className="step-form-input-error">
                                    {errors.address?.message}
                                </p>
                            )}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/2 px-4 mb-3">
                        <label className="step-form-element">
                            <div className="step-form-element-label">
                                Thành phố{/* */} *
                            </div>
                            <div className="step-form-select-container">
                                <select
                                    name="city"
                                    className={`step-form-select-box w-full ${
                                        errors.city?.message && "border-red-600"
                                    }`}
                                    {...register("city", {
                                        required: "Thông tin bắt buộc",
                                    })}
                                    onChange={(e) => {
                                        handleOnChangeSelect(e);
                                    }}
                                >
                                    <option selected value="" disabled hidden>
                                        Chọn thành phố
                                    </option>
                                    {city.map((i) => {
                                        return (
                                            <option
                                                value={formatValueSelect(i)}
                                            >
                                                {i}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="step-form-select-icon-wrapper">
                                    <span className="createIconSvgWrapper">
                                        <svg
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIconSvg"
                                        >
                                            <path
                                                d="M7.96889 10H16.0314C16.3022 10 16.4897 10.1354 16.5939 10.4062C16.6981 10.6562 16.6564 10.875 16.4689 11.0625L12.4376 15.0938C12.3126 15.2188 12.1668 15.2812 12.0001 15.2812C11.8335 15.2812 11.6876 15.2188 11.5626 15.0938L7.53139 11.0625C7.34389 10.875 7.30222 10.6562 7.40639 10.4062C7.51056 10.1354 7.69806 10 7.96889 10Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {errors.city?.message && (
                                <p className="step-form-input-error">
                                    {errors.city?.message}
                                </p>
                            )}
                        </label>
                    </div>
                    <div className="w-full sm:w-1/2 px-4 mb-3">
                        <label className="step-form-element">
                            <div className="step-form-element-label">
                                Quận/Huyện{/* */} *
                            </div>
                            <div className="step-form-select-container">
                                <select
                                    name="district"
                                    className={`step-form-select-box w-full ${
                                        errors.district?.message &&
                                        "border-red-600"
                                    }`}
                                    disabled={!districtIndex}
                                    {...register("district", {
                                        required: "Thông tin bắt buộc",
                                    })}
                                >
                                    <option selected value="" disabled hidden>
                                        Chọn quận/huyện
                                    </option>
                                    {districts[districtIndex]?.map((i) => {
                                        return (
                                            <option
                                                value={formatValueSelect(i)}
                                            >
                                                {i}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="step-form-select-icon-wrapper">
                                    <span className="createIconSvgWrapper">
                                        <svg
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIconSvg"
                                        >
                                            <path
                                                d="M7.96889 10H16.0314C16.3022 10 16.4897 10.1354 16.5939 10.4062C16.6981 10.6562 16.6564 10.875 16.4689 11.0625L12.4376 15.0938C12.3126 15.2188 12.1668 15.2812 12.0001 15.2812C11.8335 15.2812 11.6876 15.2188 11.5626 15.0938L7.53139 11.0625C7.34389 10.875 7.30222 10.6562 7.40639 10.4062C7.51056 10.1354 7.69806 10 7.96889 10Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {errors.district?.message && (
                                <p className="step-form-input-error">
                                    {errors.district?.message}
                                </p>
                            )}
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-3">
                        <label className="step-form-element">
                            <div className="step-form-element-label">
                                Giới tính
                            </div>
                            <div
                                className="step-form-radio-group"
                                role="radiogroup"
                            >
                                {radioList.map((i) => {
                                    return (
                                        <CheckoutRadioBox
                                            key={i.id}
                                            id={i.id}
                                            initialCheck={radioItem === i.id}
                                            register={register}
                                            name="gender"
                                            labelText={i.labelText}
                                            setRadioItem={setRadioItem}
                                            value={i.value}
                                        />
                                    );
                                })}
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/2 px-4 mb-3">
                        <label className="step-form-element">
                            <div className="step-form-element-label">
                                Số điện thoại{/* */} *
                            </div>
                            <input
                                type="text"
                                name="phone"
                                defaultValue=""
                                className={`step-form-input w-full ${
                                    errors.phone?.message && "border-red-600"
                                }`}
                                placeholder="Số điện thoại để nhận hàng"
                                {...register("phone", {
                                    required: "Thông tin bắt buộc",
                                    pattern: {
                                        value: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                                        message: "Số điện thoại không hợp lệ",
                                    },
                                })}
                            />
                            {errors.phone?.message && (
                                <p className="step-form-input-error">
                                    {errors.phone?.message}
                                </p>
                            )}
                        </label>
                    </div>
                    <div className="w-full sm:w-1/2 px-4 mb-3">
                        <label className="step-form-element">
                            <div className="step-form-element-label">
                                Địa chỉ email{/* */} *
                            </div>
                            <input
                                type="text"
                                name="email"
                                defaultValue=""
                                className={`step-form-input w-full ${
                                    errors.email?.message && "border-red-600"
                                }`}
                                placeholder="Địa chỉ email để xác nhận đơn hàng"
                                {...register("email", {
                                    required: "Thông tin bắt buộc",
                                    pattern: {
                                        // eslint-disable-next-line no-useless-escape
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Email không hợp lệ",
                                    },
                                })}
                            />
                            {errors.email?.message && (
                                <p className="step-form-input-error">
                                    {errors.email?.message}
                                </p>
                            )}
                        </label>
                    </div>
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        id="customer-info-submit-button"
                        data-testid="customer-info-submit-button"
                        className="step-form-button-submit"
                        onClick={handleSubmit}
                    >
                        Xác Nhận Thông Tin
                    </button>
                </div>
            </form>
        )
    );
};

export default CheckoutFormInfoStep;

import React, { FC } from "react";

interface IInfoStepProps {
    nextStep?: () => void;
    prevStep?: () => void;
    step?: number;
    formStep?: number;
}
const CheckoutFormInfoStep: FC<IInfoStepProps> = ({
    nextStep,
    prevStep,
    step,
    formStep,
}) => {
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
                                type="text"
                                name="fullname"
                                defaultValue=""
                                className="step-form-input w-full"
                                placeholder="Nhập họ và tên đầy đủ"
                            />
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
                                name="address"
                                defaultValue=""
                                className="step-form-input w-full"
                                placeholder="Vui lòng ghi cụ thể địa chỉ, tòa nhà..."
                            />
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
                                    className="step-form-select-box w-full"
                                >
                                    <option selected value="" disabled hidden>
                                        Chọn thành phố
                                    </option>
                                    <option value="HANOI">Hà Nội</option>
                                    <option value="HOCHIMINH">
                                        Hồ Chí Minh
                                    </option>
                                    <option value="DANANG">Đà Nẵng</option>
                                    <option value="ANGIANG">An Giang</option>
                                    <option value="BACGIANG">Bắc Giang</option>
                                    <option value="BACKAN">Bắc Kạn</option>
                                    <option value="BACLIEU">Bạc Liêu</option>
                                    <option value="BACNINH">Bắc Ninh</option>
                                    <option value="BARIAVUNGTAU">
                                        Bà Rịa Vũng Tàu
                                    </option>
                                    <option value="BENTRE">Bến Tre</option>
                                    <option value="BINHDINH">Bình Định</option>
                                    <option value="BINHDUONG">
                                        Bình Dương
                                    </option>
                                    <option value="BINHPHUOC">
                                        Bình Phước
                                    </option>
                                    <option value="BINHTHUAN">
                                        Bình Thuận
                                    </option>
                                    <option value="CAMAU">Cà Mau</option>
                                    <option value="CAOBANG">Cao Bằng</option>
                                    <option value="DAKLAK">Đăk Lăk</option>
                                    <option value="DAKNONG">Đắk Nông</option>
                                    <option value="DIENBIEN">Điện Biên</option>
                                    <option value="DONGNAI">Đồng Nai</option>
                                    <option value="DONGTHAP">Đồng Tháp</option>
                                    <option value="GIALAI">Gia Lai</option>
                                    <option value="HAGIANG">Hà Giang</option>
                                    <option value="HAIDUONG">Hải Dương</option>
                                    <option value="HAIPHONG">Hải Phòng</option>
                                    <option value="HANAM">HÀ NAM</option>
                                    <option value="HATINH">Hà Tĩnh</option>
                                    <option value="HAUGIANG">Hậu Giang</option>
                                    <option value="HOABINH">Hòa Bình</option>
                                    <option value="HUNGYEN">Hưng Yên</option>
                                    <option value="KHANHHOA">Khánh Hòa</option>
                                    <option value="KIENGIANG">
                                        Kiên Giang
                                    </option>
                                    <option value="KONTUM">Kon Tum</option>
                                    <option value="LAICHAU">Lai Châu</option>
                                    <option value="LAMDONG">Lâm Đồng</option>
                                    <option value="LANGSON">Lạng Sơn</option>
                                    <option value="LAOCAI">Lào Cai</option>
                                    <option value="LONGAN">Long An</option>
                                    <option value="NAMDINH">Nam Định</option>
                                    <option value="NGHEAN">Nghệ An</option>
                                    <option value="NINHBINH">Ninh Bình</option>
                                    <option value="NINHTHUAN">
                                        Ninh Thuận
                                    </option>
                                    <option value="PHUTHO">Phú Thọ</option>
                                    <option value="PHUYEN">Phú Yên</option>
                                    <option value="QUANGBINH">
                                        Quảng Bình
                                    </option>
                                    <option value="QUANGNAM">Quảng Nam</option>
                                    <option value="QUANGNGAI">
                                        Quảng Ngãi
                                    </option>
                                    <option value="QUANGNINH">
                                        Quảng Ninh
                                    </option>
                                    <option value="QUANGTRI">Quảng Trị</option>
                                    <option value="SOCTRANG">Sóc Trăng</option>
                                    <option value="SONLA">Sơn La</option>
                                    <option value="TAYNINH">Tây Ninh</option>
                                    <option value="THAIBINH">Thái Bình</option>
                                    <option value="THAINGUYEN">
                                        Thái Nguyên
                                    </option>
                                    <option value="THANHHOA">Thanh Hóa</option>
                                    <option value="THUATHIENHUE">
                                        Thừa Thiên Huế
                                    </option>
                                    <option value="TIENGIANG">
                                        Tiền Giang
                                    </option>
                                    <option value="TRAVINH">Trà Vinh</option>
                                    <option value="TUYENQUANG">
                                        Tuyên Quang
                                    </option>
                                    <option value="VINHLONG">Vĩnh Long</option>
                                    <option value="VINHPHUC">Vĩnh Phúc</option>
                                    <option value="YENBAI">Yên Bái</option>
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
                                    className="step-form-select-box w-full"
                                    disabled
                                >
                                    <option selected value="" disabled hidden>
                                        Chọn quận/huyện
                                    </option>
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
                                <label
                                    role="radio"
                                    aria-checked="true"
                                    tabIndex={-1}
                                    className="step-form-radio-label"
                                >
                                    <input
                                        type="radio"
                                        className="Radio__HiddenInput-ndekxg-1 kqzECY hidden"
                                        name="gender"
                                        defaultValue="male"
                                        defaultChecked
                                    />
                                    <div className="step-form-radio-box" />
                                    <span className="step-form-radio-text">
                                        Nam
                                    </span>
                                </label>
                                <label
                                    role="radio"
                                    aria-checked="false"
                                    tabIndex={0}
                                    className="step-form-radio-label"
                                >
                                    <input
                                        type="radio"
                                        className="Radio__HiddenInput-ndekxg-1 kqzECY hidden"
                                        name="gender"
                                        defaultValue="female"
                                    />
                                    <div className="step-form-radio-box" />
                                    <span className="step-form-radio-text">
                                        Nữ
                                    </span>
                                </label>
                                <label
                                    role="radio"
                                    aria-checked="false"
                                    tabIndex={0}
                                    className="step-form-radio-label"
                                >
                                    <input
                                        type="radio"
                                        className="Radio__HiddenInput-ndekxg-1 kqzECY hidden"
                                        name="gender"
                                        defaultValue="other"
                                    />
                                    <div className="step-form-radio-box" />
                                    <span className="step-form-radio-text">
                                        Khác
                                    </span>
                                </label>
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
                                className="step-form-input w-full"
                                placeholder="Số điện thoại để nhận hàng"
                            />
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
                                className="step-form-input w-full"
                                placeholder="Địa chỉ email để xác nhận đơn hàng"
                            />
                        </label>
                    </div>
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        id="customer-info-submit-button"
                        data-testid="customer-info-submit-button"
                        className="step-form-button-submit"
                        onClick={nextStep}
                    >
                        Xác Nhận Thông Tin
                    </button>
                </div>
            </form>
        )
    );
};

export default CheckoutFormInfoStep;

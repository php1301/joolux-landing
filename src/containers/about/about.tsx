import React, { FC } from "react";

const About: FC = () => {
    return (
        <div>
            <div className="mx-auto max-w-[1234px] py-10 sm:py-14 px-8 font-body other-page">
                <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row">
                    <div className="pr-3 sm:pr-10 mb-3">
                        <svg
                            className="w-[100px] h-[100px] smJl:w-[70px] smJl:h-[70px] text-secondary"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M49.994 0C22.386 0 0 22.386 0 49.994s22.386 49.994 49.994 49.994 49.994-22.376 49.994-49.994S77.612 0 49.994 0zm0 96.228c-25.525 0-46.222-20.697-46.222-46.234 0-25.537 20.697-46.222 46.222-46.222 25.525 0 46.234 20.697 46.234 46.222 0 25.525-20.697 46.234-46.234 46.234z"
                                fill="currentColor"
                            />
                            <path
                                d="M64.266 34.93A13.708 13.708 0 0 0 53.4 40.242l-.151.202a1.634 1.634 0 0 0-.137 1.52 1.637 1.637 0 0 0 1.497.99c.061 0 .122-.005.182-.013h.056c.04-.005.08-.012.12-.022l.066-.016.105-.032.064-.022.1-.045.057-.028a1.08 1.08 0 0 0 .105-.06l.044-.027c.048-.031.094-.065.138-.102l.016-.014c.038-.033.074-.067.108-.101l.04-.045c.025-.026.051-.054.075-.084l.013-.014v-.012a10.555 10.555 0 1 1-.99 11.349l-1.327-2.875-4.07-8.773a13.894 13.894 0 0 0-4.435-4.777 13.863 13.863 0 1 0 3.27 20.01l.018-.021.012-.014v-.012a.206.206 0 0 0 .024-.035 1.912 1.912 0 0 0 .095-.147v-.016c.024-.042.044-.087.065-.13l.016-.041c.012-.032.024-.065.034-.097l.016-.052.024-.095.012-.054c0-.033.01-.067.015-.101.004-.034 0-.032 0-.049v-.155c0-.214-.043-.427-.125-.625l-.027-.056a1.625 1.625 0 0 0-2.689-.403l-.072.094a10.555 10.555 0 1 1 .673-11.974c.119.202.232.393.339.605l2.253 4.9v.014l1.412 3.042.32.684 1.145 2.49a13.91 13.91 0 0 0 4.741 5.271 13.822 13.822 0 1 0 7.62-25.346z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="about-text-content">
                        <div className="text-xs font-medium uppercase mb-1">
                            Cuộc Hành Trình Hàng Hiệu
                        </div>
                        <h1 className="leading-[1.333] text-2xl font-brand uppercase mb-10 font-normal">
                            Về chúng tôi
                        </h1>
                        <div>
                            <p>
                                Chúng tôi – những người cùng đam mê viết nên
                                Cuộc Hành Trình Hàng Hiệu:
                            </p>
                            <p className="font-semibold">
                                JOOLUX - Journey of Luxury
                            </p>
                            <p>
                                <span className="font-semibold">
                                    JOOLUX là sàn giao dịch hàng hiệu đã qua sử
                                    dụng với sứ mệnh “Đưa thế giới hàng hiệu đến
                                    gần hơn với người Việt Nam”.
                                </span>{" "}
                                Khởi đầu cuộc hành trình này, Joolux mang đến
                                dịch vụ Ký gửi giúp cho những tín đồ hàng hiệu
                                có một nơi giao dịch uy tín để giải phóng tủ đồ
                                của mình sẵn sàng cho bộ sưu tập mới.
                            </p>
                            <p>
                                Trong cuộc hành trình này, các tín đồ hàng hiệu
                                sẽ được khám phá những trải nghiệm không giới
                                hạn để trọn vẹn niềm say mê hàng hiệu cùng hệ
                                sinh thái gồm các dịch vụ mua sắm và chăm sóc
                                hàng hiệu như: Kiểm định, cho thuê, spa và chế
                                tác.
                            </p>
                            <p>
                                Với sự đa dạng các mặt hàng đã được kiểm duyệt
                                chặt chẽ, bao gồm Túi Xách, Đồng Hồ, Giày &amp;
                                Sneaker và Phụ Kiện từ những thương hiệu hàng
                                hiệu nổi tiếng nhất trên thế giới, Joolux tin
                                chắc khách hàng sẽ hài lòng trong mỗi sự lựa
                                chọn của mình. Và cùng Joolux viết tiếp chuyến
                                đi cho những món hàng hiệu.
                            </p>
                            <p>
                                Để xứng đáng là người đồng hành tin cậy của
                                khách hàng trên hành trình thoả mãn đam mê hàng
                                hiệu, Joolux chọn cho mình kim chỉ nam mang tên{" "}
                                <span className="font-semibold">
                                    “BE AUTHENTIC” – một lời khẳng định giúp
                                    khách hàng tự tin về những sản phẩm hàng
                                    hiệu quý khách đang sở hữu là 100% hàng
                                    thật.
                                </span>
                            </p>
                            <p>
                                Joolux xây dựng quy trình thẩm định sản phẩm
                                nghiêm ngặt, với việc ứng dụng những Công nghệ
                                kiểm định hàng hiệu tiên tiến và chính xác nhất,
                                cùng đội ngũ các chuyên gia kinh nghiệm về hàng
                                hiệu để đảm bảo chất lượng sản phẩm chính hãng
                                tuyệt đối.
                            </p>
                            <div
                                className="mt-10 mb-11 mx-auto"
                                style={{ maxWidth: 270, width: "75%" }}
                            >
                                <svg
                                    width="100%"
                                    className="mx-auto"
                                    height={111}
                                    viewBox="0 0 295 111"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M32.79 2.425a2.567 2.567 0 0 0-2.55-2.33 2.56 2.56 0 0 0-2.551 2.33v38.79a11.303 11.303 0 0 1-3.192 7.922 11.271 11.271 0 0 1-15.79.379 11.302 11.302 0 0 1-3.567-7.76 2.577 2.577 0 0 0-.734-1.828A2.569 2.569 0 0 0 0 41.702a16.442 16.442 0 0 0 5.105 11.326 16.396 16.396 0 0 0 22.973-.379 16.443 16.443 0 0 0 4.73-11.489V2.425h-.017zM195.843 55.568h-23.587V1.164a1.028 1.028 0 1 0-2.054 0v54.404H166.1V1.164A1.033 1.033 0 0 0 165.076.06a1.024 1.024 0 0 0-.969.687 1.013 1.013 0 0 0-.055.416v55.432a1.029 1.029 0 0 0 1.027 1.023h30.764a1.027 1.027 0 0 0 .677-1.726 1.028 1.028 0 0 0-.677-.325zM236.86.114a1.028 1.028 0 0 0-1.027 1.028v43.13a11.27 11.27 0 0 1-4.103 8.714 11.229 11.229 0 0 1-6.145 2.533c-.34.033-.686.049-1.032.049h-6.151c-.346 0-.692 0-1.032-.049a11.267 11.267 0 0 1-7.315-3.627 11.294 11.294 0 0 1-2.954-7.62V1.164a1.028 1.028 0 1 0-2.054 0v43.108a13.355 13.355 0 0 0 6.156 11.247v.049h.07a13.268 13.268 0 0 0 7.108 2.051h6.15c2.516.004 4.98-.707 7.108-2.051h.07v-.049a13.355 13.355 0 0 0 6.156-11.247v-.238-42.87a1.027 1.027 0 0 0-1.005-1.05zM294.826 56.006l-.649-.936-13.317-19.187-4.075-5.829-2.762-3.994.54-.784.249-.358.973-1.385.281-.406 7.686-10.955.281-.405 6.075-8.73.913-1.305a1.036 1.036 0 0 0 .027-1.14 1.026 1.026 0 0 0-1.703-.04l-.653.931-2.287 3.275-4.08 5.829-4.076 5.829-3.448 4.936-1.254 1.786-.67.968-.124.179-.125-.179-.675-.968-1.254-1.786-3.448-4.936-4.076-5.83-4.075-5.828-2.291-3.275-.622-.93a1.027 1.027 0 0 0-1.681 1.18l.914 1.304 6.102 8.73.281.405 7.674 10.966.282.405.967 1.386.249.357.54.785 1.254 1.791 6.118 8.795.281.4 13.058 18.82.914 1.304a1.026 1.026 0 0 0 1.059.412 1.022 1.022 0 0 0 .616-1.587h.011zM285.713 54.696l-6.107-8.724-.281-.406-7.669-10.97-.281-.417-.973-1.391-.249-.352-.303-.439-1.232-1.775-6.415-9.141-.281-.406-13.053-18.813-.913-1.31a1.027 1.027 0 0 0-1.681 1.18l.654.931 13.312 19.192 4.053 5.829 3.027 4.33-2.702 3.87-13.296 19.186-.649.936a1.041 1.041 0 0 0-.213.79 1.022 1.022 0 0 0 .812.859 1.023 1.023 0 0 0 1.082-.474l.913-1.305 13.053-18.818.281-.4 2.016-2.853.541.79 1.248 1.792 3.448 4.93 4.07 5.851 4.081 5.829 2.286 3.247.654.931a1.024 1.024 0 0 0 1.466.31 1.03 1.03 0 0 0 .215-1.484l-.914-1.305zM127.175.081a28.612 28.612 0 0 0-14.68 4.051 28.671 28.671 0 0 0-10.534 11.012l-.248.449c-.13.316-.198.654-.2.996.001.328.066.653.189.958l.059.119a2.556 2.556 0 0 0 2.19 1.483 2.543 2.543 0 0 0 2.323-1.261 23.594 23.594 0 0 1 11.19-10.594 23.549 23.549 0 0 1 15.332-1.419 23.576 23.576 0 0 1 12.939 8.36 23.636 23.636 0 0 1 0 29.15 23.577 23.577 0 0 1-12.939 8.36 23.55 23.55 0 0 1-15.332-1.42 23.594 23.594 0 0 1-11.19-10.593l-.983-2.133-1.951-4.254-7.232-15.695-.816-1.776A28.772 28.772 0 0 0 81.855 2.75 28.718 28.718 0 0 0 63.193.723 28.748 28.748 0 0 0 47.26 10.66a28.82 28.82 0 0 0-.576 35.53 28.751 28.751 0 0 0 15.603 10.45 28.717 28.717 0 0 0 18.717-1.417A28.769 28.769 0 0 0 94.86 42.54c.092-.163.184-.325.27-.493a2.504 2.504 0 0 0 0-1.921l-.059-.136a2.549 2.549 0 0 0-2.169-1.48 2.543 2.543 0 0 0-2.322 1.226 23.595 23.595 0 0 1-11.19 10.593 23.552 23.552 0 0 1-15.332 1.42 23.578 23.578 0 0 1-12.939-8.36 23.635 23.635 0 0 1 0-29.15 23.578 23.578 0 0 1 12.939-8.36A23.551 23.551 0 0 1 79.39 7.3a23.595 23.595 0 0 1 11.189 10.593l.978 2.133 4.037 8.79v.026l2.827 6.132 2.205 4.8.919 1.998a28.71 28.71 0 0 0 10.067 11.189 28.66 28.66 0 0 0 39.966-9.091 28.763 28.763 0 0 0 .621-29.06 28.705 28.705 0 0 0-10.515-10.767A28.655 28.655 0 0 0 127.175.08zM42.925 105.458a3.379 3.379 0 0 0 1.08-1.532 8.67 8.67 0 0 0 .466-2.327c.065-.904.097-1.905.097-3.01v-7.723c0-1.234-.027-2.446-.07-3.637-.044-1.19-.103-2.403-.157-3.637l.703.098c.222.028.446.042.67.043.226 0 .451-.015.675-.043l.703-.098c-.06 1.234-.108 2.447-.157 3.637a89.245 89.245 0 0 0-.07 3.637v2.615c0 .898 0 1.78.027 2.652.027.87 0 1.71 0 2.516v2.219a6.42 6.42 0 0 1-.405 2.317 5.759 5.759 0 0 1-1.125 1.894 5.408 5.408 0 0 1-1.81 1.277c-.721.315-1.5.473-2.286.466l-.222-.79a2.978 2.978 0 0 0 1.88-.574zM50.016 96.993a7.873 7.873 0 0 1 .6-3.247 5.979 5.979 0 0 1 1.589-2.165 6.299 6.299 0 0 1 2.2-1.207 8.017 8.017 0 0 1 4.864 0 6.325 6.325 0 0 1 2.162 1.207 6.044 6.044 0 0 1 1.589 2.165 9.07 9.07 0 0 1 0 6.494 6.061 6.061 0 0 1-1.59 2.165 5.82 5.82 0 0 1-2.161 1.169 8.99 8.99 0 0 1-4.864 0 5.785 5.785 0 0 1-2.2-1.169 6 6 0 0 1-1.59-2.165 7.913 7.913 0 0 1-.6-3.247zm2.47 0c-.002.765.068 1.528.21 2.279.123.686.364 1.345.714 1.948a3.788 3.788 0 0 0 1.346 1.364 4.528 4.528 0 0 0 4.15 0 3.787 3.787 0 0 0 1.347-1.364 5.954 5.954 0 0 0 .718-1.948 12.714 12.714 0 0 0 0-4.552 6.013 6.013 0 0 0-.718-1.954 3.823 3.823 0 0 0-1.346-1.364 4.53 4.53 0 0 0-4.151 0 3.824 3.824 0 0 0-1.346 1.364 6.01 6.01 0 0 0-.713 1.954c-.143.75-.213 1.51-.211 2.273zM66.76 99.38c0-.99 0-1.84.043-2.538.044-.699.044-1.402.044-2.095v-2.132c0-.763 0-1.548-.038-2.333.385.084.778.13 1.172.14.388-.01.773-.057 1.152-.14a81.855 81.855 0 0 0-.211 3.691c-.049 1.337-.07 2.706-.07 4.119a7.59 7.59 0 0 0 .254 2.23c.12.428.33.827.616 1.169a3.146 3.146 0 0 0 2.416 1.039 3.49 3.49 0 0 0 1.962-.541 3.179 3.179 0 0 0 1.135-1.24c.13-.314.232-.59.308-.812.088-.293.15-.593.183-.898.044-.374.07-.882.082-1.52.01-.64 0-1.506 0-2.61v-2.36-1.18c0-.373 0-.73-.044-1.082l.59.098a4.147 4.147 0 0 0 1.178 0c.189-.027.378-.06.54-.098a83.336 83.336 0 0 0-.167 4.227 358.455 358.455 0 0 0-.027 4.33c0 .844 0 1.667.027 2.474.027.806.048 1.585.086 2.332a10.838 10.838 0 0 0-2.162 0c0-.168.033-.346.044-.541.01-.195 0-.379 0-.59v-1.229h-.055a4.766 4.766 0 0 1-1.88 1.981 5.094 5.094 0 0 1-2.498.634 4.862 4.862 0 0 1-3.437-1.169 4.364 4.364 0 0 1-1.243-3.356zM88.233 92.274a2.553 2.553 0 0 0-.827-.141c-.422-.007-.838.1-1.205.308-.356.207-.663.49-.897.828-.25.38-.432.8-.54 1.24a5.797 5.797 0 0 0-.195 1.532v5.964c.001.543.035 1.085.102 1.624a11.887 11.887 0 0 0-2.302 0c.054-.639.087-1.505.097-2.598.011-1.094.011-2.438 0-4.032v-.904-2.528c0-.952-.043-2.051-.097-3.285l.59.097c.194.029.391.043.588.044.181-.002.362-.016.54-.044l.59-.097a19.632 19.632 0 0 0-.13 1.624c-.01.416 0 .768 0 1.125l.054.027c1.103-2.02 2.337-3.03 3.703-3.03.146 0 .292.008.437.027.159.028.313.075.46.14-.113.33-.17.675-.168 1.023 0 .46-.027.877-.027 1.25l-.194.141a1.394 1.394 0 0 0-.579-.335zM100.032 92.539a2.661 2.661 0 0 0-2.248-1.083c-1.309 0-2.265.403-2.87 1.207a5.526 5.526 0 0 0-.914 3.4v2.386c0 .844 0 1.727.043 2.652.044.925.087 1.77.179 2.517a14.213 14.213 0 0 0-1.26-.054c-.41 0-.832 0-1.264.054.097-.747.156-1.586.184-2.517.026-.931.043-1.808.043-2.652v-2.923c0-.838 0-1.726-.043-2.652-.044-.925-.087-1.796-.184-2.597.417.081.84.128 1.264.14a3.35 3.35 0 0 0 .492-.043l.627-.097c-.054.746-.08 1.499-.08 2.246h.053a5.84 5.84 0 0 1 1.881-1.868 4.924 4.924 0 0 1 2.61-.66 6.007 6.007 0 0 1 1.584.222c.531.15 1.024.415 1.443.774a3.92 3.92 0 0 1 1.054 1.488c.295.766.433 1.583.406 2.403 0 .807 0 1.624-.054 2.485-.055.86-.06 1.758-.06 2.706V102.784c0 .292 0 .568.043.828a11.746 11.746 0 0 0-1.178-.054c-.384-.001-.769.017-1.151.054.038-.974.081-1.975.124-3.004a75.93 75.93 0 0 0 .07-3.177v-1.71a5.284 5.284 0 0 0-.794-3.182zM106.145 97.388c0-2.305.54-4.11 1.621-5.412 1.081-1.303 2.676-1.957 4.783-1.965a6.515 6.515 0 0 1 2.573.455 5.437 5.437 0 0 1 1.805 1.24 4.856 4.856 0 0 1 1.081 1.813c.238.715.356 1.465.352 2.218v.542c0 .173-.027.357-.044.54l-3.005-.053c-.991-.022-1.991-.033-2.999-.033-.617 0-1.233 0-1.838.033l-1.838.054c-.011.14-.011.282 0 .422v.363c-.005.697.104 1.39.325 2.05a4.6 4.6 0 0 0 .935 1.625c.425.462.943.831 1.518 1.082a4.97 4.97 0 0 0 2.076.406 4.524 4.524 0 0 0 1.151-.152 6.43 6.43 0 0 0 1.146-.422 6.293 6.293 0 0 0 1.054-.633 5.21 5.21 0 0 0 .854-.785l.14.087-.167 1.375a7.84 7.84 0 0 1-2.087 1.152 7.349 7.349 0 0 1-2.599.477 7.926 7.926 0 0 1-2.762-.466 6.018 6.018 0 0 1-3.562-3.442 6.789 6.789 0 0 1-.513-2.57zm6.485-6.495a3.073 3.073 0 0 0-1.751.477c-.472.31-.874.718-1.178 1.196a5.652 5.652 0 0 0-.703 1.57 8.608 8.608 0 0 0-.297 1.623l1.811.054c.627 0 1.237.027 1.837.027.6 0 1.244 0 1.881-.027l1.849-.054c0-.543-.041-1.086-.125-1.624a5.02 5.02 0 0 0-.502-1.575 3.383 3.383 0 0 0-1.054-1.206 2.981 2.981 0 0 0-1.773-.455l.005-.005zM125.418 103.65c-.205-.503-.475-1.158-.8-1.964-.324-.807-.681-1.624-1.054-2.544-.373-.92-.756-1.797-1.151-2.706-.394-.91-.762-1.797-1.108-2.615-.346-.817-.648-1.531-.908-2.164l-.589-1.375.67.097c.411.058.827.058 1.238 0l.67-.097a74.067 74.067 0 0 0 1.935 5.336c.713 1.754 1.463 3.57 2.248 5.451a77.537 77.537 0 0 0 2.254-5.283 88.896 88.896 0 0 0 1.924-5.504 3.105 3.105 0 0 0 1.849 0c-.13.26-.341.704-.627 1.331l-1.038 2.246c-.405.872-.843 1.84-1.319 2.896-.475 1.055-.967 2.165-1.459 3.247l-1.476 3.318a108.732 108.732 0 0 0-1.345 3.117c-.411.98-.773 1.873-1.081 2.669a31.789 31.789 0 0 0-.687 1.894 3.298 3.298 0 0 0-1.908 0 57.04 57.04 0 0 0 3.762-7.35zM141.995 96.993a7.777 7.777 0 0 1 .605-3.247 5.942 5.942 0 0 1 1.584-2.165 6.3 6.3 0 0 1 2.199-1.207 8.019 8.019 0 0 1 4.865 0 6.364 6.364 0 0 1 2.162 1.207 6.038 6.038 0 0 1 1.583 2.165 8.992 8.992 0 0 1 0 6.494 6.06 6.06 0 0 1-1.583 2.165 5.843 5.843 0 0 1-2.162 1.169 8.992 8.992 0 0 1-4.865 0 5.78 5.78 0 0 1-2.199-1.169 5.981 5.981 0 0 1-1.584-2.165 7.823 7.823 0 0 1-.605-3.247zm2.47 0c-.002.765.068 1.528.21 2.279.125.685.367 1.344.714 1.948a3.784 3.784 0 0 0 1.346 1.364 4.526 4.526 0 0 0 4.151 0 3.782 3.782 0 0 0 1.345-1.364 5.957 5.957 0 0 0 .719-1.948 12.394 12.394 0 0 0 0-4.552 5.995 5.995 0 0 0-.719-1.954 3.814 3.814 0 0 0-1.345-1.364 4.532 4.532 0 0 0-4.151 0 3.825 3.825 0 0 0-1.346 1.364 6.144 6.144 0 0 0-.714 1.954c-.142.75-.212 1.51-.21 2.273zM163.144 84.356a2.1 2.1 0 0 0-1.768.855 2.592 2.592 0 0 0-.405.882 4.588 4.588 0 0 0-.124 1.082c0 .336.032.823.097 1.456s.146 1.25.238 1.83h2.891c-.036.178-.056.359-.059.54a2.202 2.202 0 0 0 0 .282c.009.095.023.189.043.282l-1.448-.055h-1.443v6.078c0 2.014.043 4.043.097 6.084a3.359 3.359 0 0 0-.616-.054h-.557c-.395 0-.805 0-1.238.054.135-2.041.206-4.06.227-6.051.022-1.992.027-4.032.027-6.11h-1.01l-1.011.054c.02-.093.034-.187.043-.282a2.202 2.202 0 0 0 0-.281 2.983 2.983 0 0 0-.059-.541h2.021c.004-.594.06-1.186.168-1.77a12.113 12.113 0 0 1 1.264-3.637c.266-.512.607-.98 1.011-1.391a4.86 4.86 0 0 1 1.276-.899 3.41 3.41 0 0 1 1.583-.395c.184 0 .366.029.541.087 0 .373-.044.747-.071 1.12-.027.374-.043.753-.043 1.126l-.167.081a2.89 2.89 0 0 0-1.508-.427zM174.883 87.966c-.043-1.191-.097-2.404-.151-3.643l.702.103c.223.026.446.039.67.038.226 0 .452-.012.676-.038l.697-.103c-.054 1.24-.108 2.452-.151 3.643-.043 1.19-.07 2.397-.07 3.637 0 2.36.009 4.405.027 6.137 0 1.732.037 3.28.059 4.649 1.322 0 2.593-.014 3.81-.043a35.412 35.412 0 0 0 3.93-.325 3.313 3.313 0 0 0-.141.844c.01.258.058.514.141.758a58.455 58.455 0 0 0-2.584-.054h-5.172c-.833 0-1.697 0-2.594.054.054-1.164.108-2.343.151-3.54.043-1.196.07-2.413.07-3.653v-4.828c0-1.237-.023-2.45-.07-3.636zM188.362 99.38c0-.99 0-1.84.044-2.538.043-.699.043-1.402.043-2.095v-2.132c0-.763 0-1.548-.043-2.333.387.083.782.13 1.178.14.387-.01.773-.057 1.151-.14a82.273 82.273 0 0 0-.211 3.691c-.048 1.337-.07 2.706-.07 4.119a7.593 7.593 0 0 0 .254 2.23 2.905 2.905 0 0 0 1.621 1.91c.446.206.932.307 1.422.298a3.49 3.49 0 0 0 1.962-.541 3.175 3.175 0 0 0 1.151-1.283c.13-.314.233-.59.308-.812.089-.293.15-.594.184-.898.043-.374.07-.883.081-1.521.011-.639 0-1.505 0-2.609v-2.36-1.18c0-.373 0-.73-.043-1.082l.589.097a4.147 4.147 0 0 0 1.178 0c.189-.027.378-.06.541-.097a83 83 0 0 0-.168 4.227 364.824 364.824 0 0 0-.027 4.33c0 .844 0 1.667.027 2.473.027.807.049 1.586.081 2.333a10.999 10.999 0 0 0-2.162 0c0-.168.033-.347.038-.541.005-.195 0-.379 0-.59v-1.186h-.054a4.764 4.764 0 0 1-1.881 1.981 5.092 5.092 0 0 1-2.497.634 4.858 4.858 0 0 1-3.437-1.17 4.354 4.354 0 0 1-1.26-3.355zM209.095 95.532c.67-.899 1.33-1.774 1.978-2.625a61.642 61.642 0 0 0 1.892-2.625l.492.097c.162.029.327.043.492.044.321-.015.639-.062.951-.141a282.376 282.376 0 0 0-2.621 3.047 337.836 337.836 0 0 0-2.541 3.02 98.604 98.604 0 0 0 2.622 3.664 152.729 152.729 0 0 0 2.794 3.61 5.332 5.332 0 0 0-.757-.054h-1.346c-.255 0-.509.018-.762.054a234.764 234.764 0 0 0-1.902-2.793c-.654-.941-1.319-1.9-1.994-2.852-.692.953-1.37 1.903-2.033 2.852-.664.942-1.313 1.878-1.951 2.793a7.31 7.31 0 0 0-.924-.054 7.654 7.654 0 0 0-.957.054 126.611 126.611 0 0 0 5.189-6.49 324.943 324.943 0 0 0-2.535-3.398l-2.621-3.453.74.097c.494.058.993.058 1.487 0l.745-.097a48.904 48.904 0 0 0 1.697 2.625 153.14 153.14 0 0 0 1.865 2.625zM217.986 99.38c0-.99 0-1.84.043-2.538.043-.699.038-1.402.038-2.095v-2.132c0-.763-.027-1.548-.043-2.333a4.887 4.887 0 0 0 2.329 0 80.903 80.903 0 0 0-.21 3.691 112.44 112.44 0 0 0-.071 4.119 7.395 7.395 0 0 0 .254 2.23c.122.428.331.827.616 1.169a3.125 3.125 0 0 0 2.411 1.039c.695.019 1.38-.17 1.967-.541a3.203 3.203 0 0 0 1.141-1.24c.129-.314.232-.59.308-.812.089-.293.15-.593.184-.898.055-.505.084-1.013.086-1.52v-4.97-1.18c0-.373-.027-.73-.043-1.082l.589.098a4.09 4.09 0 0 0 1.178 0l.541-.098a75.71 75.71 0 0 0-.168 4.227c-.014 1.357-.025 2.8-.032 4.33 0 .844 0 1.667.032 2.474.033.806.043 1.585.081 2.332a11.119 11.119 0 0 0-2.189 0c0-.168.033-.346.043-.541.011-.195 0-.379 0-.59v-1.229h-.059a4.787 4.787 0 0 1-1.875 1.981 5.097 5.097 0 0 1-2.497.634 4.862 4.862 0 0 1-3.438-1.169 4.361 4.361 0 0 1-1.216-3.356zM239.459 92.274a2.553 2.553 0 0 0-.827-.141c-.422-.007-.838.1-1.205.308a2.79 2.79 0 0 0-.897.828 3.905 3.905 0 0 0-.541 1.24 5.821 5.821 0 0 0-.194 1.532v5.964c.002.542.035 1.085.097 1.624a11.892 11.892 0 0 0-2.297 0c.054-.639.087-1.505.097-2.598v-4.936-2.528c0-.952-.043-2.051-.097-3.285l.589.097a3.686 3.686 0 0 0 1.13 0l.589-.097a18.777 18.777 0 0 0-.124 1.624c-.011.416 0 .768 0 1.125l.059.027c1.103-2.02 2.337-3.03 3.702-3.03.145-.001.289.008.433.027.16.028.316.075.464.14a3.016 3.016 0 0 0-.167 1.023c-.022.462-.032.879-.032 1.25l-.195.141a1.33 1.33 0 0 0-.584-.335zM246.999 103.65c-.211-.503-.476-1.158-.8-1.964-.324-.807-.681-1.624-1.054-2.544-.373-.92-.757-1.797-1.151-2.706-.395-.91-.762-1.797-1.108-2.615-.346-.817-.649-1.531-.908-2.164l-.589-1.375.67.097c.204.028.41.043.616.044.208-.002.416-.016.622-.044l.67-.097a73.12 73.12 0 0 0 1.935 5.336c.713 1.754 1.461 3.57 2.243 5.451a72.803 72.803 0 0 0 2.259-5.283 94.491 94.491 0 0 0 1.924-5.504 3.105 3.105 0 0 0 1.849 0c-.13.26-.341.704-.633 1.331-.286.628-.632 1.38-1.038 2.246-.405.866-.837 1.84-1.318 2.896-.481 1.055-.962 2.165-1.454 3.247l-1.476 3.318a111.757 111.757 0 0 0-1.346 3.117c-.41.98-.772 1.873-1.08 2.669a31.089 31.089 0 0 0-.687 1.894 3.298 3.298 0 0 0-1.908 0 57.684 57.684 0 0 0 3.762-7.35z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <blockquote>
                                <div className="mx-8">
                                    <div className="flex">
                                        <span className="createIconSvgWrapper w-[30px] h-[30px] mr-8 sm:mr-10 text-gray-900">
                                            <svg
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                strokeLinejoin="round"
                                                strokeMiterlimit="1.414"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-labelledby="title"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                className="createIconSvg w-[30px] h-[30px]"
                                            >
                                                <path
                                                    d="M 9,3 C 4.05,3 0,7.05 0,12 v 9 H 9 V 12 H 3 C 3,8.67 5.67,6 9,6 Z m 15,0 c -4.95,0 -9,4.05 -9,9 v 9 h 9 v -9 h -6 c 0,-3.33 2.67,-6 6,-6 z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                        <p>
                                            <em>
                                                Chúng tôi tin rằng không khó
                                                khăn nào có thể ngăn cản đam mê
                                                của bạn, và người Việt Nam xứng
                                                đáng có một nơi mua sắm hàng
                                                hiệu tin cậy. Chúng tôi đặt trải
                                                nghiệm của bạn lên trên tất cả,
                                                hãy đến với Joolux để mua sắm
                                                hàng hiệu trực tuyến một cách{" "}
                                                <b className="font-bold">
                                                    An toàn – Tiện lợi – Chuyên
                                                    nghiệp
                                                </b>
                                            </em>
                                        </p>
                                    </div>
                                </div>
                                <footer className="text-right mt-4">
                                    <b className="font-semibold">Tạ Hiển</b>{" "}
                                    <span>- CEO Joolux</span>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
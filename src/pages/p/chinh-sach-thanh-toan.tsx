import { BreadcrumbItems } from "@components/common/breadcrumb";
import { Layout } from "@components/layout/layout";
import ActiveLink from "@components/ui/active-link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps, NextPage } from "next";
import React from "react";

const ChinhSachThanhToan: NextPage & {
    Layout: typeof Layout;
} = () => {
    return (
        <div>
            <div className="mx-auto max-w-[1234px] pt-4 smJl:pb-16 pb-10 px-8 font-body other-page">
                <div className="pb-7">
                    <BreadcrumbItems separator="/">
                        <ActiveLink
                            href={"/"}
                            activeClassName="font-semibold text-heading"
                        >
                            <a className="font-extralight text-[#878787] hover:font-normal hover:text-black">
                                Trang Chủ
                            </a>
                        </ActiveLink>
                        <ActiveLink
                            href={ROUTES.CHINH_SACH_THANH_TOAN}
                            activeClassName="font-semibold text-heading"
                        >
                            <a className="capitalize font-medium">
                                Chính sách thanh toán
                            </a>
                        </ActiveLink>
                    </BreadcrumbItems>
                </div>
                <h1 className="leading-[1.333] text-4xl font-bold">
                    Chính sách thanh toán
                </h1>
                <div className="py-10">
                    <p>
                        Tại&nbsp;<b>Joolux</b>, việc mua sắm trở nên thật dễ
                        dàng với các hình thức thanh toán tiện lợi và linh hoạt:
                    </p>
                    <p>1. Thanh toán chuyển khoản qua ngân hàng</p>
                    <p>2. Thanh toán tiền </p>
                    <p>
                        <b>Thông tin tài khoản</b>
                    </p>
                    <p>
                        <i>
                            Áp dụng với các khách hàng thanh toán bằng hình thức
                            chuyển khoản
                        </i>
                    </p>
                    <ul>
                        <li>
                            <p>Tên người nhận: VND-TGTT-CTY CP COZILAND</p>
                        </li>
                        <li>
                            <p>
                                Ngân hàng: <b>TECHCOMBANK</b> - STK:
                                19036996821019, CN Gia Định, Tp. HCM
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>
                                Tên người nhận: Công ty CP Coziland (Đơn vị chủ
                                quản của website)
                            </p>
                        </li>
                        <li>
                            <p>
                                Ngân hàng: <b>VIETCOMBANK</b>&nbsp;– STK:
                                0451000355859, CN Thành Công, Hà Nội.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>Nội dung chuyển khoản:</p>
                            <p>
                                <i>
                                    <b>Tên khách hàng - Mã đơn hàng.</b>
                                </i>
                            </p>
                        </li>
                    </ul>
                    <p>
                        <i>
                            Lưu ý:&nbsp;Chúng tôi sẽ giữ đơn hàng trong vòng 48
                            giờ. Sau thời gian trên, hệ thống sẽ tự động huỷ đơn
                            hàng.
                        </i>
                    </p>
                    <p>
                        Sau khi chuyển khoản thành công, quý khách vui lòng
                        thông báo đến chúng tôi qua hotline&nbsp;
                        <a href="tel:tel:02822398484" />
                        1900 292984&nbsp;hoặc qua email&nbsp;
                        <a href="mailto:info@joolux.com">
                            <b>info@joolux.com</b>
                        </a>
                        &nbsp;với nội dung sau:
                    </p>
                    <ul>
                        <li>
                            <p>Tiêu đề email: THANH TOÁN ĐƠN HÀNG TẠI JOOLUX</p>
                        </li>
                        <li>
                            <p>
                                Nội dung: Họ &amp; Tên khách hàng, số điện
                                thoại, mã đơn hàng và đính kèm hình ảnh biên
                                nhận chuyển tiền
                            </p>
                        </li>
                    </ul>
                    <p />
                </div>
            </div>
        </div>
    );
};
ChinhSachThanhToan.Layout = Layout;
export default ChinhSachThanhToan;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};

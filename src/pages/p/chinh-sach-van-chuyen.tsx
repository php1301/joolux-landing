import { BreadcrumbItems } from "@components/common/breadcrumb";
import { Layout } from "@components/layout/layout";
import ActiveLink from "@components/ui/active-link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import Link from "@components/ui/link";

const ChinhSachVanChuyen: NextPage & {
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
                            href={ROUTES.CHINH_SACH_VAN_CHUYEN}
                            activeClassName="font-semibold text-heading"
                        >
                            <a className="capitalize font-medium">
                                Chính sách vận chuyển
                            </a>
                        </ActiveLink>
                    </BreadcrumbItems>
                </div>
                <h1 className="leading-[1.333] text-4xl font-bold">
                    Chính sách vận chuyển
                </h1>
                <div className="py-10">
                    <p>
                        <b>Joolux</b>&nbsp;cung cấp dịch vụ giao hàng cho tất cả
                        các tỉnh thành trên toàn quốc. Để đảm bảo sản phẩm được
                        đến tay khách hàng trong thời gian sớm nhất, chúng tôi
                        chỉ liên kết với những đơn vị vận chuyển uy tín.
                    </p>
                    <p />
                    <h4>1. Thời gian và khung giờ giao hàng</h4>
                    <ul>
                        <li>
                            <p>
                                Thời giao giao hàng: <b>Joolux </b>hỗ trợ giao
                                hàng từ thứ 2 đến đến thứ 6 hàng tuần, trừ thứ
                                7, chủ nhật và các ngày lễ.
                            </p>
                        </li>
                        <li>
                            <p>
                                Khung giờ giao hàng: Khung giờ giao hàng của các
                                đơn vị vận chuyển sẽ bắt đầu từ 08:00 đến 17:00
                                (giờ hành chính)
                            </p>
                        </li>
                    </ul>
                    <p>
                        Nếu có các yêu cầu về thời gian và địa điểm giao hàng,
                        Khách hàng vui lòng ghi chú tại phần thông tin đặt hàng.
                    </p>
                    <p />
                    <h4>2. Phí vận chuyển</h4>
                    <h5>2.1 Các sản phẩm chăm sóc giày Crep Protect</h5>
                    <figure>
                        <img
                            title="shipping-info"
                            src="//images.ctfassets.net/p86i8hai3zda/1lcR0EmVduPjlOWwJ6BZ4W/71277f05b8235267f23490037a0e069c/shipping-info.jpg"
                        />
                    </figure>
                    <p />
                    <h5>
                        2.2 Các sản phẩm khác ( Túi xách, giày, đồng hồ....)
                    </h5>
                    <p>
                        Khi mua sắm tại&nbsp;<b>Joolux</b>, quý khách sẽ được
                        miễn phí giao hàng đối với các đơn hàng nội thành: Hồ
                        Chí Minh, Hà Nội, Hải Phòng, Đà Nẵng. Đối với các đơn
                        hàng ngoại thành hoặc tại các tỉnh, thành phố
                        khác,&nbsp;<b>Joolux</b>&nbsp;sẽ tính phí giao hàng theo
                        biểu phí giao hàng của đơn vị vận chuyển.
                    </p>
                    <p />
                    <h5>2.3 Khu vực tính phí vận chuyển:</h5>
                    <h6>2.3.1 Nội thành</h6>
                    <ul>
                        <li>
                            <p>
                                Hồ Chí Minh: Quận 1,2,3,4,5,6,7,8,10,11, Bình
                                Thạnh, Phú Nhuận, Tân Bình, Tân Phú
                            </p>
                        </li>
                        <li>
                            <p>
                                Hà Nội: Quận Đống Đa, Hoàn Kiếm, Ba Đình, Hai Bà
                                Trưng, Cầu Giấy
                            </p>
                        </li>
                    </ul>
                    <h6>2.3.2 Ngoại thành, tỉnh</h6>
                    <ul>
                        <li>
                            <p>
                                Hồ Chí Minh: Quận 12, 9, Thủ Đức, Bình Tân, Gò
                                Vấp, Hóc Môn, Củ Chi, Bình Chánh, Nhà Bè, Cần
                                Giờ và các khu vực huyện, thị xã
                            </p>
                        </li>
                        <li>
                            <p>
                                Hà Nội: Quận Long Biên, Từ Liêm, Hà Đông, Thanh
                                Trì, Gia Lâm và các khu vực huyện, thị xã
                            </p>
                        </li>
                        <li>
                            <p>Các tỉnh thành khác</p>
                        </li>
                    </ul>
                    <p />
                    <h4>3. Kiểm tra hàng hóa</h4>
                    <p>
                        Khi sản phẩm được giao đến,&nbsp;<b>Joolux&nbsp;</b>
                        khuyến khích khách hàng nên mở kiện hàng ra kiểm tra, để
                        đảm bảo đúng sản phẩm, số lượng, không bị hư hại trong
                        quá trình vận chuyển, sau đó Khách hàng mới ký&nbsp;xác
                        nhận với nhân viên giao hàng.
                    </p>
                    <p>
                        Khi nhận hàng, nhân viên giao nhận buộc phải đợi Khách
                        hàng kiểm tra sản phẩm bên trong kiện hàng. Nếu nhân
                        viên giao nhận không đợi Khách hàng kiểm tra hàng hoá,
                        Khách hàng hãy thông báo ngay cho chúng tôi biết thông
                        qua tổng đài&nbsp;<a href="tel:02822398484">1</a>900
                        292984
                    </p>
                    <p>
                        Quý khách tránh dùng vật sắc nhọn, dễ gây hư hỏng để mở
                        hàng.
                    </p>
                    <p>
                        Trường hợp sau khi thanh toán và kiểm tra hàng hóa, nếu
                        quý khách có nhu cầu đổi trả, vui lòng tham khảo chi
                        tiết&nbsp;
                        <Link
                            className="text-secondary"
                            href={ROUTES.CHINH_SACH_BAO_HANH_DOI_TRA}
                        >
                            Chính sách đổi trả
                        </Link>
                        &nbsp;của&nbsp;<b>Joolux</b>.
                    </p>
                </div>
            </div>
        </div>
    );
};
ChinhSachVanChuyen.Layout = Layout;
export default ChinhSachVanChuyen;

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

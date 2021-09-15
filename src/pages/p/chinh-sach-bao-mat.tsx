import { BreadcrumbItems } from "@components/common/breadcrumb";
import { Layout } from "@components/layout/layout";
import ActiveLink from "@components/ui/active-link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps, NextPage } from "next";
import React from "react";

const ChinhSachBaoMat: NextPage & {
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
                            href={ROUTES.CHINH_SACH_BAO_MAT}
                            activeClassName="font-semibold text-heading"
                        >
                            <a className="capitalize font-medium">
                                Chính sách bảo mật
                            </a>
                        </ActiveLink>
                    </BreadcrumbItems>
                </div>
                <h1 className="leading-[1.333] text-4xl font-bold">
                    Chính sách bảo mật
                </h1>
                <div className="py-10">
                    <p>
                        <b>Joolux&nbsp;</b>cam kết sẽ bảo mật những thông tin
                        mang tính riêng tư của khách hàng. Khách hàng vui lòng
                        đọc bản “Chính sách bảo mật” dưới đây để hiểu hơn những
                        cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ
                        quyền lợi của người truy cập:
                    </p>
                    <h5>1. Mục đích và phạm vi thu thập</h5>
                    <p>
                        Để truy cập và sử dụng một số dịch vụ tại&nbsp;
                        <b>Joolux</b>, khách hàng có thể sẽ được yêu cầu đăng ký
                        với chúng tôi thông tin cá nhân (Email, Họ tên, Số ĐT
                        liên lạc…). Mọi thông tin khai báo phải đảm bảo tính
                        chính xác và hợp pháp.&nbsp;<b>Joolux&nbsp;</b>không
                        chịu mọi trách nhiệm liên quan đến pháp luật của thông
                        tin khai báo.
                    </p>
                    <p>
                        Chúng tôi cũng có thể thu thập thông tin về số lần viếng
                        thăm, bao gồm số trang khách hàng xem, số links (liên
                        kết) khách hàng click và những thông tin khác liên quan
                        đến việc kết nối đến site&nbsp;<b>Joolux</b>. Chúng tôi
                        cũng thu thập các thông tin mà trình duyệt Web (Browser)
                        khách hàng sử dụng mỗi khi truy cập vào&nbsp;
                        <b>Joolux</b>, bao gồm: địa chỉ IP, loại Browser, ngôn
                        ngữ sử dụng, thời gian và những địa chỉ mà Browser truy
                        xuất đến.
                    </p>
                    <h5>2. Phạm vi sử dụng thông tin</h5>
                    <p>
                        <b>Joolux&nbsp;</b>thu thập và sử dụng thông tin cá nhân
                        khách hàng với mục đích phù hợp và hoàn toàn tuân thủ
                        nội dung của&nbsp;<i>“Chính sách bảo mật”</i>&nbsp;này.
                        Khi cần thiết, chúng tôi có thể sử dụng những thông tin
                        này để liên hệ trực tiếp với khách hàng dưới các hình
                        thức như: gửi thư ngỏ, đơn đặt hàng, thư cảm ơn, sms,
                        thông tin về kỹ thuật và bảo mật…
                    </p>
                    <h5>3. Thời gian lưu trữ thông tin</h5>
                    <p>
                        Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến
                        khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và
                        thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin
                        cá nhân thành viên sẽ được bảo mật trên máy chủ
                        của&nbsp;<b>Joolux</b>.
                    </p>
                    <h5>
                        4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá
                        nhân
                    </h5>
                    <p>Đơn vị: Công ty Cổ phần Coziland.</p>
                    <p>
                        Văn phòng: B16-09 Saigon Royal, 34 -35 Bến Vân Đồn,
                        Phường 12, Quận 4, Tp. Hồ Chí Minh
                    </p>
                    <p>Hotline: 1900 292984</p>
                    <h5>5. Cam kết bảo mật thông tin cá nhân khách hàng</h5>
                    <p>
                        Thông tin cá nhân của thành viên trên&nbsp;
                        <a href="https://joolux.com/">
                            <b>https://joolux.com</b>&nbsp;
                        </a>
                        được&nbsp;<b>Joolux&nbsp;</b>cam kết bảo mật tuyệt đối
                        theo chính sách bảo vệ thông tin cá nhân của&nbsp;
                        <b>Joolux</b>. Việc thu thập và sử dụng thông tin của
                        mỗi thành viên chỉ được thực hiện khi có sự đồng ý của
                        khách hàng đó trừ những trường hợp pháp luật có quy định
                        khác.
                    </p>
                    <p>
                        Không sử dụng, không chuyển giao, cung cấp hay tiết lộ
                        cho bên thứ 3 nào về thông tin cá nhân của thành viên
                        khi không có sự cho phép đồng ý từ thành viên.
                    </p>
                    <p>
                        Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn
                        công dẫn đến mất mát dữ liệu cá nhân thành viên,&nbsp;
                        <b>Joolux&nbsp;</b>sẽ có trách nhiệm thông báo vụ việc
                        cho cơ quan chức năng điều tra xử lý kịp thời và thông
                        báo cho thành viên được biết.
                    </p>
                    <p>
                        Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của
                        Thành viên bao gồm thông tin hóa đơn kế toán chứng từ số
                        hóa tại khu vực dữ liệu trung tâm an toàn cấp 1 của
                        Joolux.
                    </p>
                    <p>
                        Ban quản lý&nbsp;<b>Joolux&nbsp;</b>yêu cầu các cá nhân
                        khi đăng ký/mua sản phẩm là thành viên, phải cung cấp
                        đầy đủ thông tin cá nhân có liên quan như: Họ và tên,
                        địa chỉ liên lạc, email, số chứng minh nhân dân, điện
                        thoại, số tài khoản, số thẻ thanh toán …., và chịu trách
                        nhiệm về tính pháp lý của những thông tin trên. Ban quản
                        lý&nbsp;
                        <b>Joolux&nbsp;</b>không chịu trách nhiệm cũng như không
                        giải quyết mọi khiếu nại. có liên quan đến quyền lợi của
                        Thành viên đó nếu xét thấy tất cả thông tin cá nhân của
                        thành viên đó cung cấp khi đăng ký ban đầu là không
                        chính xác.
                    </p>
                    <h5>6. Quản lý thông tin xấu</h5>
                    <p>
                        Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ
                        mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu
                        của mình. Thành viên có trách nhiệm thông báo kịp thời
                        cho website TMĐT&nbsp;<b>Joolux&nbsp;</b>về những hành
                        vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ
                        tên đăng ký và mật khẩu của bên thứ ba để có biện pháp
                        giải quyết phù hợp.
                    </p>
                    <p>
                        Thành viên không được thay đổi, chỉnh sửa, gán ghép, sao
                        chép, truyền bá, phân phối, cung cấp và tạo những công
                        cụ tương tự của dịch vụ do website TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>cung cấp cho một bên thứ ba nếu không
                        được sự đồng ý của website TMĐT&nbsp;<b>Joolux</b>.
                    </p>
                    <p>
                        Thành viên không được hành động gây mất uy tín của
                        website TMĐT&nbsp;<b>Joolux&nbsp;</b>dưới mọi hình thức
                        như gây mất đoàn kết giữa các thành viên bằng cách sử
                        dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc
                        tuyên truyền, phổ biến những thông tin không có lợi cho
                        uy tín của website TMĐT&nbsp;<b>Joolux</b>.
                    </p>
                </div>
            </div>
        </div>
    );
};
ChinhSachBaoMat.Layout = Layout;
export default ChinhSachBaoMat;

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

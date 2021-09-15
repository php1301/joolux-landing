import { BreadcrumbItems } from "@components/common/breadcrumb";
import { Layout } from "@components/layout/layout";
import ActiveLink from "@components/ui/active-link";
import Link from "@components/ui/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps, NextPage } from "next";
import React from "react";

const QuyCheHoatDong: NextPage & {
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
                                Trang chủ
                            </a>
                        </ActiveLink>
                        <ActiveLink
                            href={ROUTES.QUY_CHE_HOAT_DONG}
                            activeClassName="font-semibold text-heading"
                        >
                            <a className="capitalize font-medium">
                                Quy chế hoạt động
                            </a>
                        </ActiveLink>
                    </BreadcrumbItems>
                </div>
                <h1 className="leading-[1.333] text-4xl font-bold">
                    Quy chế hoạt động
                </h1>
                <div className="py-10">
                    <h5>I. Nguyên tắc chung</h5>
                    <p>
                        Website thương mại điện tử&nbsp;<b>Joolux</b>&nbsp;do
                        Công ty Cổ Phần Coziland thực hiện hoạt động và vận
                        hành. Đối tượng phục vụ là tất cả khách hàng trên 63
                        tỉnh thành Việt Nam có nhu cầu mua sản phẩm.
                    </p>
                    <p>
                        Sản phẩm được kinh doanh tại&nbsp;<b>Joolux</b>
                        &nbsp;phải đáp ứng đầy đủ các quy định của pháp luật,
                        không bán sản phẩm nhái, sản phẩm không rõ nguồn gốc.
                    </p>
                    <p>
                        Hoạt động mua bán tại&nbsp;<b>Joolux</b>&nbsp;phải được
                        thực hiện công khai, minh bạch, đảm bảo quyền lợi của
                        người tiêu dùng.
                    </p>
                    <h5>II. Quy định chung</h5>
                    <h6>Tên Miền website Thương mại Điện tử</h6>
                    <p>
                        Website thương mại điện tử&nbsp;<b>Joolux</b>&nbsp;do
                        Công ty Cổ phần Coziland phát triển với tên miền giao
                        dịch là:&nbsp;<b>https://joolux.com</b>&nbsp;(sau đây
                        gọi tắt là: “Website TMĐT&nbsp;<b>Joolux</b>")
                    </p>
                    <h6>Định nghĩa chung</h6>
                    <p>
                        <b>Nhà bán hàng</b>&nbsp;là các tổ chức, cá nhân có hoạt
                        động thương mại hợp pháp do&nbsp;<b>Joolux</b>
                        &nbsp;chính thức công nhận và được phép sử dụng dịch vụ
                        do Joolux cung cấp và các bên liên quan cung cấp.
                    </p>
                    <p>
                        <b>Khách hàng</b>&nbsp;là công dân Việt Nam trên khắp 63
                        tỉnh thành. Khách hàng có quyền đăng ký tài khoản hoặc
                        không cần đăng ký để thực hiện giao dịch.
                    </p>
                    <p>
                        <b>Thành viên</b>&nbsp;là bao gồm cả khách hàng và người
                        tham khảo thông tin, thảo luận tại website.
                    </p>
                    <p>
                        Nội dung bản Quy chế này tuân thủ theo các quy định hiện
                        hành của Việt Nam. Thành viên khi tham gia website
                        TMĐT&nbsp;<b>Joolux</b>&nbsp;phải tự tìm hiểu trách
                        nhiệm pháp lý của mình đối với luật pháp hiện hành của
                        Việt Nam và cam kết thực hiện đúng những nội dung trong
                        Quy chế này.
                    </p>
                    <h5>III. Quy trình giao dịch</h5>
                    <h6>Dành cho khách hàng tại website TMĐT Joolux</h6>
                    <p>
                        <u>
                            <i>Bước 1:</i>
                        </u>
                        &nbsp;Tìm sản phẩm cần mua.
                    </p>
                    <p>
                        <u>
                            <i>Bước 2:</i>
                        </u>
                        &nbsp;Xem giá và thông tin chi tiết sản phẩm. Nhấn&nbsp;
                        <i>THANH TOÁN</i>&nbsp;để hoàn tất đơn hàng hoặc
                        chọn&nbsp;
                        <i>THÊM VÀO GIỎ HÀNG</i>&nbsp;nếu khách hàng muốn thanh
                        toán nhiều sản phẩm cùng lúc.
                    </p>
                    <p>
                        <u>
                            <i>Bước 3:</i>
                        </u>
                        &nbsp;Quý khách điền đầy đủ thông tin mua hàng theo mẫu
                        có sẵn.
                    </p>
                    <p>
                        <u>
                            <i>Bước 4:</i>
                        </u>
                        &nbsp;Sau khi nhận đơn hàng,&nbsp;<b>Joolux</b>&nbsp;sẽ
                        liên lạc với khách hàng qua số điện khách hàng cung cấp
                        bằng tổng đài&nbsp;
                        <a href="tel:02822398484" />
                        1900 292984&nbsp;để xác thực thông tin đơn hàng.
                    </p>
                    <p>
                        <u>
                            <i>Bước 5:</i>
                        </u>
                        &nbsp;Đơn vị vận chuyển sẽ giao sản phẩm tận nhà đến cho
                        khách hàng.
                    </p>
                    <h6>Quy trình giao nhận vận chuyển</h6>
                    <p>
                        <b>Joolux</b>&nbsp;thực hiện giao hàng miễn phí trên
                        toàn quốc. Khi nhận đơn hàng từ khách hàng và sau khi đã
                        xác thông tin mua sản phẩm qua điện thoại,&nbsp;
                        <b>Joolux</b>
                        &nbsp;sẽ tiến hành giao hàng theo yêu cầu của quý khách.
                    </p>
                    <p>
                        Thời gian vận chuyển: Giao hàng tận nơi trong vòng 3 – 6
                        ngày.
                    </p>
                    <h5>IV. Quy trình thanh toán</h5>
                    <p>
                        Khách hàng và nhà bán hàng có thể tham khảo các phương
                        thức thanh toán sau đây và lựa chọn áp dụng phương thức
                        phù hợp:
                    </p>
                    <p>
                        <b>
                            Cách 1: Thanh toán bằng tiền mặt khi nhận sản phẩm
                        </b>
                    </p>
                    <p>
                        <i>
                            <u>Bước 1:</u>
                        </i>
                        <i>&nbsp;</i>Khách hàng tìm hiểu thông tin về sản phẩm.
                    </p>
                    <p>
                        <u>
                            <i>Bước 2:</i>
                        </u>
                        &nbsp;<b>Joolux</b>&nbsp;xác thực đơn hàng (điện thoại,
                        tin nhắn, email).
                    </p>
                    <p>
                        <u>
                            <i>Bước 3:</i>
                        </u>
                        &nbsp;<b>Joolux</b>&nbsp;xác nhận thông tin Khách hàng.
                    </p>
                    <p>
                        <u>
                            <i>Bước 4:</i>
                        </u>
                        &nbsp;<b>Joolux</b>&nbsp;vận chuyển sản phẩm.
                    </p>
                    <p>
                        <u>
                            <i>Bước 5:</i>
                        </u>
                        &nbsp;Khách hàng nhận sản phẩm và thanh toán.
                    </p>
                    <p>
                        <b>
                            Cách 2: Thanh toán online qua thẻ tín dụng, chuyển
                            khoản
                        </b>
                    </p>
                    <p>
                        <u>
                            <i>Bước 1:</i>
                        </u>
                        &nbsp;Khách hàng tìm hiểu thông tin về sản phẩm.
                    </p>
                    <p>
                        <u>
                            <i>Bước 2:</i>
                        </u>
                        &nbsp;<b>Joolux</b>&nbsp;xác thực đơn hàng (điện thoại,
                        tin nhắn, email).
                    </p>
                    <p>
                        <u>
                            <i>Bước 3:</i>
                        </u>
                        &nbsp;<b>Joolux</b>&nbsp;xác nhận thông tin Khách hàng.
                    </p>
                    <p>
                        <u>
                            <i>Bước 4:</i>
                        </u>
                        &nbsp;Khách hàng thanh toán online bằng hình thức chuyển
                        khoản, thẻ tín dụng Visa/Master card/JCB.
                    </p>
                    <p>
                        <u>
                            <i>Bước 5:</i>
                        </u>
                        &nbsp;<b>Joolux</b>&nbsp;vận chuyển sản phẩm.
                    </p>
                    <p>
                        <u>
                            <i>Bước 6:</i>
                        </u>
                        &nbsp;Khách hàng nhận sản phẩm.
                    </p>
                    <h5>V. Đảm bảo an toàn giao dịch</h5>
                    <p>
                        Ban quản lý đã sử dụng các dịch vụ để bảo vệ thông tin
                        về nội dung mà nhà bán hàng đăng sản phẩm trên&nbsp;
                        <b>Joolux</b>. Để đảm bảo các giao dịch được tiến hành
                        thành công, hạn chế tối đa rủi ro có thể phát sinh,
                        khách hàng nên cung cấp thông tin đầy đủ (tên, địa chỉ,
                        số điện thoại, email) khi tham gia mua sản phẩm
                        của&nbsp;<b>Joolux</b>
                        &nbsp;để&nbsp;<b>Joolux</b>&nbsp;có thể liên hệ nhanh
                        với khách hàng trong trường hợp xảy ra lỗi.
                    </p>
                    <p>
                        Khách hàng chỉ nên thanh toán sau khi đã kiểm tra chi
                        tiết sản phẩm và hài lòng với sản phẩm.
                    </p>
                    <p>
                        Khi thanh toán trực tuyến bằng thẻ ATM nội địa, Visa,
                        Master khách hàng nên tự mình thực hiện và không được để
                        lộ thông tin thẻ.&nbsp;<b>Joolux</b>&nbsp;không lưu trữ
                        thông tin thẻ của khách hàng sau khi thanh toán, mà
                        thông qua hệ thống của ngân hàng liên kết. Nên tuyệt đối
                        bảo mật thông tin thẻ cho khách hàng.
                    </p>
                    <p>
                        Trong trường hợp lỗi xảy ra trong quá trình thanh toán
                        trực tuyến,&nbsp;<b>Joolux</b>&nbsp;sẽ là đơn vị đứng ra
                        giải quyết cho khách hàng ngay khi tiếp nhận thông tin
                        từ người thực hiện giao dịch.
                    </p>
                    <h5>VI. Bảo vệ thông tin cá nhân khách hàng</h5>
                    <p>
                        <b>Joolux</b>&nbsp;cam kết sẽ bảo mật những thông tin
                        mang tính riêng tư của khách hàng. Khách hàng vui lòng
                        đọc bản&nbsp;<i>“Chính sách bảo mật”</i>&nbsp;dưới đây
                        để hiểu hơn những cam kết mà chúng tôi thực hiện, nhằm
                        tôn trọng và bảo vệ quyền lợi của người truy cập:
                    </p>
                    <h6>1. Mục đích và phạm vi thu thập</h6>
                    <p>
                        Để truy cập và sử dụng một số dịch vụ tại&nbsp;
                        <b>Joolux,</b>&nbsp;khách hàng có thể sẽ được yêu cầu
                        đăng ký với chúng tôi thông tin cá nhân (Email, Họ tên,
                        Số ĐT liên lạc…). Mọi thông tin khai báo phải đảm bảo
                        tính chính xác và hợp pháp.&nbsp;<b>Joolux</b>
                        &nbsp;không chịu mọi trách nhiệm liên quan đến pháp luật
                        của thông tin khai báo.
                    </p>
                    <p>
                        Chúng tôi cũng có thể thu thập thông tin về số lần viếng
                        thăm, bao gồm số trang khách hàng xem, số links (liên
                        kết) khách hàng click và những thông tin khác liên quan
                        đến việc kết nối đến site&nbsp;<b>Joolux.</b>&nbsp;Chúng
                        tôi cũng thu thập các thông tin mà trình duyệt Web
                        (Browser) khách hàng sử dụng mỗi khi truy cập vào&nbsp;
                        <b>Joolux</b>, bao gồm: địa chỉ IP, loại Browser, ngôn
                        ngữ sử dụng, thời gian và những địa chỉ mà Browser truy
                        xuất đến.
                    </p>
                    <h6>2. Phạm vi sử dụng thông tin</h6>
                    <p>
                        <b>Joolux</b>&nbsp;thu thập và sử dụng thông tin cá nhân
                        khách hàng với mục đích phù hợp và hoàn toàn tuân thủ
                        nội dung của&nbsp;
                        <Link
                            className="text-secondary"
                            href={ROUTES.CHINH_SACH_BAO_MAT}
                        >
                            Chính sách bảo mật
                        </Link>
                        &nbsp;. Khi cần thiết, chúng tôi có thể sử dụng những
                        thông tin này để liên hệ trực tiếp với khách hàng dưới
                        các hình thức như: gửi thư ngỏ, đơn đặt hàng, thư cảm
                        ơn, sms, thông tin về kỹ thuật và bảo mật…
                    </p>
                    <h6>3. Thời gian lưu trữ thông tin</h6>
                    <p>
                        Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến
                        khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và
                        thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin
                        cá nhân thành viên sẽ được bảo mật trên máy chủ
                        của&nbsp;<b>Joolux.</b>
                    </p>
                    <h6>
                        4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá
                        nhân
                    </h6>
                    <p>Đơn vị: Công ty Cổ phần Coziland.</p>
                    <p>
                        Văn phòng: 46 Nguyễn Thị Minh Khai, Phường Dakao, Quận
                        1, Tp. HCM
                    </p>
                    <p>
                        Hotline:&nbsp;
                        <a href="tel:02822398484" />
                        1900 292984.
                    </p>
                    <h6>5. Cam kết bảo mật thông tin cá nhân khách hàng</h6>
                    <p>
                        Thông tin cá nhân của thành viên trên&nbsp;<b>Joolux</b>
                        &nbsp;được&nbsp;<b>Joolux</b>&nbsp;cam kết bảo mật tuyệt
                        đối theo chính sách bảo vệ thông tin cá nhân của&nbsp;
                        <b>Joolux.</b>&nbsp;Việc thu thập và sử dụng thông tin
                        của mỗi thành viên chỉ được thực hiện khi có sự đồng ý
                        của khách hàng đó trừ những trường hợp pháp luật có quy
                        định khác. Không sử dụng, không chuyển giao, cung cấp
                        hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của
                        thành viên khi không có sự cho phép đồng ý từ thành
                        viên.
                    </p>
                    <p>
                        Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn
                        công dẫn đến mất mát dữ liệu cá nhân thành viên,&nbsp;
                        <b>Joolux</b>&nbsp;sẽ có trách nhiệm thông báo vụ việc
                        cho cơ quan chức năng điều tra xử lý kịp thời và thông
                        báo cho thành viên được biết.
                    </p>
                    <p>
                        Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của
                        Thành viên bao gồm thông tin hóa đơn kế toán chứng từ số
                        hóa tại khu vực dữ liệu trung tâm an toàn cấp 1
                        của&nbsp;
                        <b>Joolux.</b>
                    </p>
                    <p>
                        Ban quản lý&nbsp;<b>Joolux</b>&nbsp;yêu cầu các cá nhân
                        khi đăng ký/mua sản phẩm là thành viên, phải cung cấp
                        đầy đủ thông tin cá nhân có liên quan như: Họ và tên,
                        địa chỉ liên lạc, email, số chứng minh nhân dân, điện
                        thoại, số tài khoản, số thẻ thanh toán …., và chịu trách
                        nhiệm về tính pháp lý của những thông tin trên. Ban quản
                        lý&nbsp;
                        <b>Joolux</b>&nbsp;không chịu trách nhiệm cũng như không
                        giải quyết mọi khiếu nại có liên quan đến quyền lợi của
                        Thành viên đó nếu xét thấy tất cả thông tin cá nhân của
                        thành viên đó cung cấp khi đăng ký ban đầu là không
                        chính xác
                    </p>
                    <h5>VII. Quản lý thông tin xấu</h5>
                    <p>
                        Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ
                        mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu
                        của mình. Thành viên có trách nhiệm thông báo kịp thời
                        cho website TMĐT&nbsp;<b>Joolux</b>&nbsp;về những hành
                        vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ
                        tên đăng ký và mật khẩu của bên thứ ba để có biện pháp
                        giải quyết phù hợp.
                    </p>
                    <p>
                        Thành viên không được thay đổi, chỉnh sửa, gán ghép,
                        copy, truyền bá, phân phối, cung cấp và tạo những công
                        cụ tương tự của dịch vụ do website TMĐT&nbsp;
                        <b>Joolux</b>&nbsp;cung cấp cho một bên thứ ba nếu không
                        được sự đồng ý của website TMĐT&nbsp;<b>Joolux</b>
                        &nbsp;trong bản Quy chế này.
                    </p>
                    <p>
                        Thành viên không được hành động gây mất uy tín của
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;dưới mọi hình thức
                        như gây mất đoàn kết giữa các thành viên bằng cách sử
                        dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc
                        tuyên truyền, phổ biến những thông tin không có lợi cho
                        uy tín của Website TMĐT&nbsp;<b>Joolux.</b>
                    </p>
                    <h5>
                        VIII. Trách nhiệm trong trường hợp phát sinh lỗi kỹ
                        thuật
                    </h5>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;cam kết nỗ lực đảm
                        bảo sự an toàn và ổn định của toàn bộ hệ thống kỹ thuật.
                        Tuy nhiên, trong trường hợp xảy ra sự cố do lỗi
                        của&nbsp;
                        <b>Joolux, Joolux</b>&nbsp;sẽ ngay lập tức áp dụng các
                        biện pháp để đảm bảo quyền lợi cho khách hàng.
                    </p>
                    <p>
                        Khi thực hiện các giao dịch trên Sàn, bắt buộc các thành
                        viên phải thực hiện đúng theo các quy trình hướng dẫn.
                    </p>
                    <p>
                        Ban quản lý website TMĐT&nbsp;<b>Joolux</b>&nbsp;cam kết
                        cung cấp chất lượng dịch vụ tốt nhất cho các thành viên
                        tham gia giao dịch. Trường hợp phát sinh lỗi kỹ thuật,
                        lỗi phần mềm hoặc các lỗi khách quan khác dẫn đến thành
                        viên không thể tham gia giao dịch được thì các thành
                        viên thông báo cho Ban quản lý Website TMĐT&nbsp;
                        <b>Joolux</b>&nbsp;qua địa chỉ email&nbsp;
                        <b>
                            <u>info@joolux.com</u>
                        </b>
                        <b>&nbsp;</b>hoặc qua điện thoại&nbsp;
                        <a href="tel:02822398484" />
                        1900 292983(từ 8:30 – 18:00 hằng ngày) chúng tôi sẽ khắc
                        phục lỗi trong thời gian sớm nhất, tạo điều kiện cho các
                        thành viên tham gia Website TMĐT&nbsp;<b>Joolux.</b>
                    </p>
                    <p>
                        Tuy nhiên, Ban quản lý Website TMĐT&nbsp;<b>Joolux</b>
                        &nbsp;sẽ không chịu trách nhiệm giải quyết trong trường
                        hợp thông báo của các thành viên không đến được Ban quản
                        lý, phát sinh từ lỗi kỹ thuật, lỗi đường truyền, phần
                        mềm hoặc các lỗi khác không do Ban quản lý gây ra.
                    </p>
                    <h5>
                        IX. Quyền và nghĩa vụ của Ban quản lý website TMĐT
                        Joolux
                    </h5>
                    <h6>1. Quyền của Ban quản lý Joolux</h6>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;sẽ tiến hành cung
                        cấp các dịch vụ, sản phẩm cho khách hàng sau khi đã hoàn
                        thành các thủ tục và các điều kiện bắt buộc mà nêu ra.
                    </p>
                    <p>
                        <b>Joolux</b>&nbsp;sẽ tiến hành xây dựng các chính sách
                        dịch vụ trên Trang web. Các chính sách này sẽ được công
                        bố trên&nbsp;<b>Joolux.</b>
                    </p>
                    <p>
                        Trong trường hợp có cơ sở để chứng minh thành viên cung
                        cấp thông tin cho Sàn giao dịch điện tử Joolux không
                        chính xác, sai lệch, không đầy đủ hoặc có dấu hiệu vi
                        phạm pháp luật hay thuần phong mỹ tục Việt Nam thì Sàn
                        giao dịch điện tử&nbsp;<b>Joolux</b>&nbsp;có quyền từ
                        chối, tạm ngừng hoặc chấm dứt quyền sử dụng dịch vụ của
                        thành viên.
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;có thể chấm dứt
                        quyền thành viên và quyền sử dụng một hoặc tất cả các
                        dịch vụ của thành viên trong trường hợp thành viên vi
                        phạm các Quy chế của Website TMĐT&nbsp;<b>Joolux,</b>
                        &nbsp;hoặc có những hành vi ảnh hưởng đến hoạt động kinh
                        doanh trên Website TMĐT&nbsp;<b>Joolux.</b>
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;có thể chấm dứt
                        ngay quyền sử dụng dịch vụ và quyền thành viên của thành
                        viên nếu Website TMĐT&nbsp;<b>Joolux</b>&nbsp;phát hiện
                        thành viên bị kết án hoặc đang trong thời gian thụ án,
                        trong trường hợp thành viên tiếp tục hoạt động có thể
                        gây cho Website TMĐT&nbsp;<b>Joolux</b>&nbsp;trách nhiệm
                        pháp lý, có những hoạt động lừa đảo, giả mạo, gây rối
                        loạn thị trường, gây mất đoàn kết đối với các thành viên
                        khác của Website TMĐT&nbsp;
                        <b>Joolux,</b>&nbsp;hoạt động vi phạm pháp luật hiện
                        hành của Việt Nam.
                    </p>
                    <p>
                        Trong trường hợp chấm dứt quyền thành viên và quyền sử
                        dụng dịch vụ thì tất cả các chứng nhận, các quyền của
                        thành viên được cấp sẽ mặc nhiên hết giá trị và bị chấm
                        dứt.
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;giữ bản quyền sử
                        dụng dịch vụ và các nội dung trên Website TMĐT&nbsp;
                        <b>Joolux</b>
                        &nbsp;theo các quy định pháp luật về bảo hộ sở hữu trí
                        tuệ tại Việt Nam. Tất cả các biểu tượng, nội dung theo
                        các ngôn ngữ khác nhau đều thuộc quyền sở hữu của
                        Website TMĐT&nbsp;
                        <b>Joolux</b>. Nghiêm cấm mọi hành vi sao chép, sử dụng
                        và phổ biến bất hợp pháp các quyền sở hữu trên.
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;giữ quyền được thay
                        đổi bảng, biểu giá dịch vụ và phương thức thanh toán
                        trong thời gian cung cấp dịch vụ cho thành viên theo nhu
                        cầu và điều kiện khả năng của Website TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>và sẽ báo trước cho thành viên thời
                        hạn là một (01) tháng.
                    </p>
                    <h6>2. Nghĩa vụ của Ban quản lý Joolux</h6>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;chịu trách nhiệm
                        xây dựng dịch vụ bao gồm một số công việc chính như:
                        nghiên cứu, thiết kế, mua sắm các thiết bị phần cứng và
                        phần mềm, kết nối Internet, xây dựng chính sách phục vụ
                        cho hoạt động Website TMĐT&nbsp;<b>Joolux</b>&nbsp;trong
                        điều kiện và phạm vi cho phép.
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux&nbsp;</b>sẽ tiến hành triển
                        khai và hợp tác với các đối tác trong việc xây dựng hệ
                        thống các dịch vụ, các công cụ tiện ích phục vụ cho việc
                        giao dịch của các thành viên tham gia và người sử dụng
                        trên Website TMĐT&nbsp;<b>Joolux</b>
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux&nbsp;</b>chịu trách nhiệm
                        xây dựng, bổ sung hệ thống các kiến thức, thông tin về:
                        nghiệp vụ ngoại thương, thương mại điện tử, hệ thống văn
                        bản pháp luật thương mại trong nước và quốc tế, thị
                        trường nước ngoài, cũng như các tin tức có liên quan đến
                        hoạt động của Website TMĐT&nbsp;<b>Joolux</b>&nbsp;.
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux&nbsp;</b>sẽ tiến hành các
                        hoạt động xúc tiến, quảng bá Website TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>ra thị trường nước ngoài trong phạm
                        vi và điều kiện cho phép, góp phần mở rộng, kết nối đáp
                        ứng các nhu cầu của khách hàng, nhà bán hàng và phát
                        triển thị trường nước ngoài của các thành viên tham gia
                        Website TMĐT&nbsp;<b>Joolux</b>&nbsp;.
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>Joolux&nbsp;</b>sẽ cố gắng đến mức
                        cao nhất trong phạm vi và điều kiện có thể để duy trì
                        hoạt động bình thường của Website TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>và khắc phục các sự cố như: sự cố kỹ
                        thuật về máy móc, lỗi phần mềm, hệ thống đường truyền
                        internet, nhân sự, các biến động xã hội, thiên tai, mất
                        điện, các quyết định của cơ quan nhà nước hay một tổ
                        chức liên quan thứ ba. Tuy nhiên nếu những sự cố trên
                        xảy ra nằm ngoài khả năng kiểm soát, là những trường hợp
                        bất khả kháng mà gây thiệt hại cho thành viên thì
                        Website TMĐT&nbsp;<b>Joolux&nbsp;</b>không phải chịu
                        trách nhiệm liên đới.
                    </p>
                    <h6>3. Website TMĐT Joolux phải có trách nhiệm</h6>
                    <p>
                        Xây dựng và thực hiện cơ chế để đảm bảo việc đăng thông
                        tin trên Website TMĐT&nbsp;<b>Joolux&nbsp;</b>được thực
                        hiện chính xác.
                    </p>
                    <p>
                        Không đăng tải những thông tin bán sản phẩm, dịch vụ
                        thuộc danh mục sản phẩm, dịch vụ cấm kinh doanh theo quy
                        định của pháp luật và sản phẩm hạn chế kinh doanh theo
                        quy định tại Thông tư 47/2014/TT-BCT.
                    </p>
                    <h5>
                        X. Quyền và trách nhiệm thành viên tham gia website TMĐT
                        Joolux
                    </h5>
                    <h6>1. Quyền của Thành viên Website TMĐT Joolux</h6>
                    <p>
                        Khi đăng ký trở thành thành viên của&nbsp;
                        <b>Joolux&nbsp;</b>và được&nbsp;<b>Joolux&nbsp;</b>đồng
                        ý, thành viên sẽ được tham gia thảo luận, đánh giá sản
                        phẩm, mua sản phẩm tại Joolux .
                    </p>
                    <p>
                        Thành viên có quyền đóng góp ý kiến cho Website
                        TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>trong quá trình hoạt động. Các kiến
                        nghị được gửi trực tiếp bằng thư, fax hoặc email đến cho
                        Website TMĐT&nbsp;<b>Joolux</b>.
                    </p>
                    <h6>2. Nghĩa vụ của Thành viên Website TMĐT Joolux</h6>
                    <p>
                        Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ
                        và mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật
                        khẩu và hộp thư điện tử của mình.
                    </p>
                    <p>
                        Thành viên cam kết những thông tin cung cấp cho Website
                        TMĐT&nbsp;<b>Joolux&nbsp;</b>và những thông tin đang tải
                        lên Website TMĐT&nbsp;<b>Joolux&nbsp;</b>là chính xác.
                    </p>
                    <p>
                        Thành viên cam kết không được thay đổi, chỉnh sửa, sao
                        chép, truyền bá, phân phối, cung cấp và tạo những công
                        cụ tương tự của dịch vụ do Website TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>cung cấp cho một bên thứ ba nếu không
                        được sự đồng ý của Website TMĐT&nbsp;<b>Joolux&nbsp;</b>
                        trong Quy định này.
                    </p>
                    <p>
                        Thành viên hành động gây mất uy tín của Website
                        TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>dưới mọi hình thức như gây mất đoàn
                        kết giữa các thành viên bằng cách sử dụng tên đăng ký
                        thứ hai, thông qua một bên thứ ba hoặc tuyên truyền, phổ
                        biến những thông tin không có lợi cho uy tín của Website
                        TMĐT&nbsp;
                        <b>Joolux</b>.
                    </p>
                    <h5>XI. Điều khoản áp dụng</h5>
                    <p>
                        Mọi tranh chấp phát sinh giữa Website TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>và thành viên sẽ được giải quyết trên
                        cơ sở thương lượng.
                    </p>
                    <p>
                        Quy chế của Website TMĐT&nbsp;<b>Joolux&nbsp;</b>chính
                        thức có hiệu lực thi hành kể từ ngày ký Quyết định ban
                        hành kèm theo Quy chế này. Website TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>có quyền và có thể thay đổi Quy chế
                        này bằng cách thông báo lên Website TMĐT&nbsp;
                        <b>Joolux&nbsp;</b>cho các thành viên biết. Quy chế sửa
                        đổi có hiệu lực kể từ ngày Quyết định về việc sửa đổi
                        Quy chế có hiệu lực. Việc thành viên tiếp tục sử dụng
                        dịch vụ sau khi Quy chế sửa đổi được công bố và thực thi
                        đồng nghĩa với việc họ đã chấp nhận&nbsp;
                        <i>Quy chế sửa đổi</i>&nbsp;này.
                    </p>
                    <h5>XII. Điều khoản cam kết</h5>
                    <p>
                        Địa chỉ liên lạc chính thức của Website TMĐT&nbsp;
                        <b>Joolux</b>:
                    </p>
                    <p>
                        Website TMĐT&nbsp;<b>https://joolux.com</b>
                    </p>
                    <p>Công ty: Công ty Cổ Phần Coziland</p>
                    <p>
                        Địa chỉ: 46 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1,
                        Tp. Hồ Chí Minh
                    </p>
                    <p>
                        Hotline:&nbsp;
                        <a href="tel:02822398484" />
                        1900 292984, Email:&nbsp;
                        <u>
                            <b>info@joolux.com</b>
                        </u>
                    </p>
                </div>
            </div>
        </div>
    );
};
QuyCheHoatDong.Layout = Layout;
export default QuyCheHoatDong;

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

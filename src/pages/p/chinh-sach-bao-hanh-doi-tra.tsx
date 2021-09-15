import { BreadcrumbItems } from "@components/common/breadcrumb";
import { Layout } from "@components/layout/layout";
import ActiveLink from "@components/ui/active-link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps, NextPage } from "next";
import React from "react";

const ChinhSachBaoHanhDoiTra: NextPage & {
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
                            {/* <a>{t("breadcrumb-home")}</a> */}
                            <a className="font-extralight text-[#878787] hover:font-normal hover:text-black">
                                Trang Chủ
                            </a>
                        </ActiveLink>
                        <ActiveLink
                            href={ROUTES.CHINH_SACH_BAO_HANH_DOI_TRA}
                            activeClassName="font-semibold text-heading"
                        >
                            <a className="capitalize font-medium">
                                {/* {t("breadcrumb-search")} */}
                                Chính sách bảo hành đổi trả
                            </a>
                        </ActiveLink>
                    </BreadcrumbItems>
                </div>
                <h1 className="leading-[1.333] text-4xl font-bold">
                    Chính sách bảo hành đổi trả
                </h1>
                <div className="py-10">
                    <h5>I. Chính sách đổi trả</h5>
                    <p>
                        <b>Joolux</b>&nbsp;mang đến cho bạn sự an tâm mua sắm
                        tuyệt đối bởi chính sách đổi trả linh hoạt áp dụng cho
                        tất cả các sản phẩm. Joolux đảm bảo sản phẩm khách hàng
                        nhận được còn nguyên vẹn, đúng các thông tin được mô tả
                        và hiển thị trên website.
                    </p>
                    <p>
                        Nếu sản phẩm khách hàng nhận được bị lỗi trong quá trình
                        vận chuyển, thông tin không giống với mô tả trên
                        website, quý khách vui lòng thông báo ngay với
                        Joolux&nbsp;<b>ngay khi nhận hàng và ký xác nhận</b>
                        &nbsp;với đơn vị vận chuyển về tình trạng sản phẩm nhận
                        được. Joolux sẽ hỗ trợ quý khách đổi trả nhanh chóng.
                    </p>
                    <p>
                        Để đảm bảo quyền lợi của khách hàng khi mua sắm, chi phí
                        vận chuyển trong quá trình đổi trả sẽ hoàn toàn miễn phí
                        và Joolux sẽ chịu hoàn toàn chi phí này.
                    </p>
                    <p />
                    <h6>1. Điều kiện đổi trả</h6>
                    <p>
                        Sản phẩm được chấp nhận đổi trả nếu đáp ứng các điều
                        kiện sau:
                    </p>
                    <ul>
                        <li>
                            <p>
                                Sản phẩm nằm trong thời gian chấp nhận đổi trả:
                                Ngay khi nhận hàng, ký xác nhận với đơn vị vận
                                chuyển về tình trạng sản phẩm nhận được và từ
                                chối nhận sản phẩm.
                            </p>
                        </li>
                        <li>
                            <p>
                                Sản phẩm không có dấu hiệu sử dụng, không qua
                                giặt ủi hoặc sửa chữa.
                            </p>
                        </li>
                        <li>
                            <p>
                                Sản phẩm được gửi lại cùng phiếu đổi trả với đầy
                                đủ thông tin, hóa đơn và phiếu giao hàng của{" "}
                                <b>Joolux</b>
                            </p>
                        </li>
                        <li>
                            <p>
                                Sản phẩm còn nguyên hộp, nguyên seal, đầy đủ phụ
                                kiện, các loại tài liệu đi kèm sản phẩm (như
                                hướng dẫn sử dụng, thẻ bảo hành, thẻ quà tặng,
                                nhãn mác, ... nếu có).
                            </p>
                        </li>
                        <li>
                            <p>
                                Thông tin cá nhân trong quá trình đổi trả phải
                                trùng khớp với thông tin nhận hàng ban đầu trong
                                đơn hàng.
                            </p>
                        </li>
                    </ul>
                    <p />
                    <h6>2. Quy trình đổi trả</h6>
                    <p>
                        Những quyền lợi ưu việt từ&nbsp;<b>Joolux</b>&nbsp;sẽ
                        giúp bạn thỏa niềm đam mê mua sắm mà không còn âu lo về
                        chất lượng sản phẩm. Nếu Khách hàng không hài lòng về
                        sản phẩm, vui lòng gửi thông tin về cho chúng tôi theo
                        các bước sau:
                    </p>
                    <p>
                        <u>
                            <b>Bước 1:</b>
                        </u>
                    </p>
                    <p>
                        <b>Cách 1:</b>&nbsp;Gọi điện thoại đến tổng đài&nbsp;
                        <a href="tel:02822398484" />
                        1900 292984&nbsp;để được hướng dẫn trực tiếp
                    </p>
                    <p>
                        <b>Cách 2:</b>&nbsp;Truy cập website https://joolux.com/
                        , đăng nhập tài khoản cá nhân, chọn chức năng&nbsp;
                        <i>“Đăng ký trả hàng”</i>&nbsp;và điền đầy đủ thông tin
                        vào phiếu yêu cầu đổi trả. Sau khi nhận được yêu cầu, bộ
                        phận&nbsp;<i>Chăm Sóc Khách Hàng</i>&nbsp;sẽ chủ động
                        liên hệ với bạn để hướng dẫn cách thức đổi trả sản phẩm.
                    </p>
                    <p>
                        <u>
                            <b>Bước 2:</b>
                        </u>
                    </p>
                    <p>
                        Gửi sản phẩm về cho&nbsp;<b>Joolux&nbsp;</b>theo thông
                        tin được hướng dẫn. Đội ngũ chuyên gia của&nbsp;
                        <b>Joolux&nbsp;</b>sẽ thẩm định sản phẩm dựa trên các
                        điều kiện đổi trả.
                    </p>
                    <p>
                        <u>
                            <b>Bước 3:</b>
                        </u>
                    </p>
                    <p>
                        Khách hàng vui lòng gửi sản phẩm về cho&nbsp;
                        <b>Joolux</b>&nbsp;qua đơn vị vận chuyển của Joolux theo
                        thông tin sau:
                    </p>
                    <p>
                        <i>
                            <b>Người nhận</b>
                        </i>
                        <i>: Công Ty Cổ Phần Coziland</i>
                    </p>
                    <p>
                        <i>
                            <b>Số điện thoại</b>
                        </i>
                        <i>:&nbsp;</i>
                        <a href="tel:02822398484">
                            <i>1</i>
                        </a>
                        <i>900 292984</i>
                    </p>
                    <p>
                        <i>
                            <b>Địa chỉ</b>
                        </i>
                        <i>
                            : B16-09 Saigon Royal, 34 - 35 Bến Vân Đồn, Phường
                            12, Quận 4, Tp. Hồ Chí Minh.
                        </i>
                    </p>
                    <p>
                        Sản phẩm đáp ứng các điều kiện đổi trả, <b>Joolux </b>sẽ
                        đổi sản phẩm tương tự hoặc sản phẩm cùng loại theo ý
                        muốn Khách hàng.
                    </p>
                    <ul>
                        <li>
                            <p>
                                Trong trường hợp sản phẩm Khách hàng muốn đổi ở
                                tình trạng hết hàng, <b>Joolux </b>sẽ thông báo
                                qua email hoặc liên hệ qua số điện thoại của
                                Khách hàng. Nếu Khách hàng muốn tiếp tục quy
                                trình đổi trả, chúng tôi sẽ tiến hành thủ tục
                                trả sản phẩm và hoàn tiền.
                            </p>
                        </li>
                        <li>
                            <p>
                                Trường hợp sản phẩm không nằm trong điều kiện
                                đổi trả, <b>Joolux </b>sẽ gửi lại sản phẩm cho
                                Khách hàng. Chi phí vận chuyển trong trường hợp
                                này sẽ do Khách hàng chi trả.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Quý khách vui lòng điền đầy đủ thông tin vào&nbsp;
                        <i>Phiếu đăng ký trả hàng</i>&nbsp;và đính kèm sản phẩm
                        khi giao cho đơn vị vận chuyển. Trong trường hợp đối tác
                        giao hàng của&nbsp;<b>Joolux</b>&nbsp;(Giao Hàng Nhanh -
                        viết tắt là GHN) đến nhận hàng, Khách hàng sẽ đưa cho
                        phía đối tác ký nhận vào ô&nbsp;<i>"GHN ký xác nhận"</i>
                        .
                    </p>
                    <p>
                        <b />
                    </p>
                    <p>
                        <b>Lưu ý khi đổi trả:</b>
                    </p>
                    <ul>
                        <li>
                            <p>
                                Tất cả các sản phẩm được đăng bán tại website
                                https://joolux.com/ đều được mô tả đầy đủ và chi
                                tiết, bao gồm tình trạng hiện tại, kích cỡ (hoặc
                                số đo) và các lỗi sản phẩm (nếu có). Khách hàng
                                vui lòng xem kỹ các mô tả và hình ảnh sản phẩm
                                để tránh đổi trả không cần thiết.
                            </p>
                        </li>
                        <li>
                            <p>
                                Bất cứ sản phẩm nào bạn nhận được có nhãn dán đi
                                kèm đều phải được hoàn lại đầy đủ cùng sản phẩm.
                            </p>
                        </li>
                        <li>
                            <p>
                                Các sản phẩm được mua dưới dạng <i>Bộ (set) </i>
                                hoặc <i>Gói sản phẩm (combo) </i>phải được hoàn
                                lại cùng nhau.
                            </p>
                        </li>
                        <li>
                            <p>
                                Khi tiến hành đổi trả sản phẩm, Khách hàng sẽ
                                chịu trách nhiệm đảm bảo sản phẩm còn nguyên vẹn
                                trong quá trình vận chuyển. Các rủi ro và quyền
                                sở hữu sẽ chỉ được chuyển giao cho{" "}
                                <b>Joolux </b>khi <b>Joolux </b>nhận được sản
                                phẩm trong tình trạng ban đầu.
                            </p>
                        </li>
                    </ul>
                    <p>
                        <b />
                    </p>
                    <p>
                        <b>Một số lưu ý khi nhận sản phẩm</b>
                    </p>
                    <ul>
                        <li>
                            <p>
                                Khi sản phẩm được giao đến, <b>Joolux </b>khuyến
                                khích Khách hàng nên mở hàng ra kiểm tra, để đảm
                                bảo đúng sản phẩm, số lượng, không bị hư hại
                                trong quá trình vận chuyển, sau đó Khách hàng
                                mới ký xác nhận với nhân viên giao hàng.
                            </p>
                        </li>
                        <li>
                            <p>
                                Khi nhận hàng, nhân viên giao nhận buộc phải đợi
                                Khách hàng kiểm tra sản phẩm bên trong kiện
                                hàng. Nếu nhân viên giao nhận không đợi Khách
                                hàng kiểm tra hàng hoá, vui lòng thông báo cho
                                chúng tôi biết thông qua tổng đài.
                            </p>
                        </li>
                        <li>
                            <p>
                                Khi mở hàng, Khách hàng tránh dùng vật sắc nhọn,
                                có thể gây hư hỏng cho sản phẩm bên trong.
                            </p>
                        </li>
                    </ul>
                    <p>
                        <b />
                    </p>
                    <p>
                        <b>Những trường hợp không áp dụng&nbsp;</b>
                        <b>
                            <i>Chính sách đổi trả:</i>
                        </b>
                    </p>
                    <ul>
                        <li>
                            <p>
                                Các sản phẩm thuộc chương trình khuyến mãi đặc
                                biệt: ưu đãi dành cho hội viên, private sale,
                                hot deal, ...
                            </p>
                        </li>
                        <li>
                            <p>
                                Các sản phẩm đặc biệt khác không nằm trong danh
                                mục chương trình khuyến mãi. Những sản phẩm này
                                sẽ được đánh dấu tại trang chi tiết sản phẩm.
                            </p>
                        </li>
                    </ul>
                    <p />
                    <h5>3. Chính sách hoàn tiền</h5>
                    <p>
                        Kể từ khi yêu cầu đổi trả của Khách hàng được chấp
                        nhận,&nbsp;<b>Joolux</b>&nbsp;sẽ tiến hành hoàn tiền vào
                        tài khoản Khách hàng. Tùy theo phương thức thanh toán
                        của đơn hàng,&nbsp;<b>Joolux</b>&nbsp;sẽ có những hình
                        thức hoàn tiền khác nhau:
                    </p>
                    <figure>
                        <img
                            title="return-table"
                            src="//images.ctfassets.net/p86i8hai3zda/18OKk5eK4q28d13D7ZdMoL/7fa21615f6a3740d66ba0e7b974cb354/return-table.jpg"
                        />
                    </figure>
                    <p>
                        Thời gian hoàn tiền tính trên ngày làm việc của từng
                        ngân hàng. Đối với thẻ tín dụng/thẻ ghi nợ quốc tế thời
                        gian hoàn tiền tối đa là&nbsp;<i>60 ngày</i>&nbsp;tuỳ
                        ngân hàng phát hành thẻ.
                    </p>
                    <p />
                    <h5>II. Chính sách bảo hành</h5>
                    <p>
                        Chúng tôi đặt trải nghiệm của Khách hàng lên trên tất
                        cả. Thông qua sản phẩm và dịch vụ của mình, chúng tôi
                        mong muốn mang đến niềm vui và sự an tâm mua sắm cho
                        Khách hàng. Nếu có vấn đề xảy ra trong quá trình sử dụng
                        sản phẩm, bạn hãy yên tâm liên hệ với chúng tôi để được
                        tư vấn miễn phí.
                    </p>
                    <p>
                        Mỗi sản phẩm sẽ có&nbsp;<i>Chính sách bảo hành</i>
                        &nbsp;riêng được thể hiện tại trang chi tiết sản phẩm.
                        Khách hàng vui lòng xem thông tin chi tiết về Chính sách
                        bảo hành tại trang mô tả sản phẩm hoặc liên hệ bộ
                        phận&nbsp;<i>Chăm Sóc Khách Hàng</i>&nbsp;của chúng tôi
                        để được hỗ trợ.
                    </p>
                    <p>
                        Ngoài Chính sách bảo hành riêng cho từng sản phẩm,
                        Joolux sẽ hỗ trợ khách hàng mọi quy trình bảo hành (chi
                        phí sẽ được tính trên người dùng).
                    </p>
                </div>
            </div>
        </div>
    );
};
ChinhSachBaoHanhDoiTra.Layout = Layout;
export default ChinhSachBaoHanhDoiTra;

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

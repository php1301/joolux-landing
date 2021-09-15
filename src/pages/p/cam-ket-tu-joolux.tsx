import { BreadcrumbItems } from "@components/common/breadcrumb";
import { Layout } from "@components/layout/layout";
import ActiveLink from "@components/ui/active-link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps, NextPage } from "next";
import React from "react";

const CamKetTuJoolux: NextPage & {
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
                            href={ROUTES.CAM_KET_TU_JOOLUX}
                            activeClassName="font-semibold text-heading"
                        >
                            <a className="capitalize font-medium">
                                Cam kết từ Joolux
                            </a>
                        </ActiveLink>
                    </BreadcrumbItems>
                </div>
                <h1 className="leading-[1.333] text-4xl font-bold">
                    Cam kết từ Joolux
                </h1>
                <div className="py-10">
                    <p>
                        Với mong muốn mang đến một trải nghiệm mua sắm hoàn
                        hảo,&nbsp;<b>Joolux</b>&nbsp;luôn nỗ lực hoàn thiện từ
                        khâu đánh giá sản phẩm cho đến dịch vụ khách hàng. Lời
                        cam kết bền vững nhất của&nbsp;<b>Joolux</b>&nbsp;chính
                        là chất lượng của mỗi sản phẩm thông qua quá trình kiểm
                        định chặt chẽ. Chúng tôi áp dụng chính sách hoàn trả
                        miễn phí 100% nếu khách hàng có bất kỳ phát hiện nào về
                        sản phẩm giả, nhái hoặc kém chất lượng.
                    </p>
                    <h5>
                        1. CÔNG NGHỆ KIỂM ĐỊNH HÀNG THẬT - GIẢ HÀNG ĐẦU THẾ GIỚI
                        - ENTRUPY
                    </h5>
                    <figure>
                        <img
                            title="entrupy-verified"
                            src="//images.ctfassets.net/p86i8hai3zda/2gF9zWEJ4cgJYr1sQQztJh/ff56e2413d19de305ad85ef99b85a65a/entrupy-verified.jpg"
                        />
                    </figure>
                    <p>
                        Joolux độc quyền sử dụng thiết bị công nghệ hiện đại
                        Entrupy để kiểm định chất lượng sản phẩm trước khi đến
                        tay khách hàng. Máy kiểm định hoạt động bằng cách soi
                        các mẫu sản phẩm dưới kính hiển vi rồi gửi kết quả đến
                        điện thoại thông minh. Với khả năng phóng to đến&nbsp;
                        <b>400</b>&nbsp;lần cùng với hơn&nbsp;<b>50 triệu</b>
                        &nbsp;dữ liệu sản phẩm từ các thương hiệu nổi tiếng như
                        LV, Gucci, Chanel, Hermes, Dior,…, thiết bị phát hiện
                        ngay lập tức bất kỳ khác biệt nào so với nguyên bản sản
                        phẩm. Sự phân tích của thiết bị cho kết quả chính xác và
                        hoàn hảo về chất lượng sản phẩm lên tới&nbsp;
                        <b>99,1%</b>&nbsp;– một kết quả chính xác gần như tuyệt
                        đối.
                    </p>
                    <p>
                        Khách hàng có thể an tâm hơn khi sử dụng Dịch vụ kiểm
                        định sản phẩm tại Joolux. Với quy trình kiểm định sản
                        phẩm nghiêm ngặt, Joolux tin rằng không có bất kỳ khó
                        khăn nào có thể ngăn cản đam mê mua sắm. Những tín đồ
                        đích thực xứng đáng có một nơi mua sắm an toàn và tin
                        cậy.
                    </p>
                    <p>
                        Công nghệ kiểm định&nbsp;<b>Entrupy</b>&nbsp;hỗ trợ cho
                        các thương hiệu sau:
                    </p>
                    <figure>
                        <img
                            title="entrupy-brands"
                            src="//images.ctfassets.net/p86i8hai3zda/2ANkjbeeEpD4xB81ASKQXv/2760693ebb94ba9acf1a7816bc267df5/entrupy-brands.jpg"
                        />
                    </figure>
                    <p />
                    <h5>2. ĐỘI NGŨ CHUYÊN GIA GIÀU KINH NGHIỆM</h5>
                    <p>
                        <b>Joolux</b>&nbsp;sở hữu đội ngũ chuyên gia giàu kinh
                        nghiệm về các thương hiệu nổi tiếng từ nhiều lĩnh vực
                        như túi xách, giày, đồng hồ, mắt kính, nước hoa, ... Tất
                        cả sản phẩm đều được xác thực thông qua quy trình kiểm
                        định dựa trên nhiều góc độ như logo, tags, mã sản phẩm,
                        chất liệu, khoá kéo, đường kim mũi chỉ
                    </p>
                    <figure>
                        <img
                            title="entrupy-guarantee"
                            src="//images.ctfassets.net/p86i8hai3zda/r3Zx4vQfdYeUQAQbUmTdq/3b5ab9b50b35b4ec7c77647e7b261128/entrupy-guarantee.jpg"
                        />
                    </figure>
                    <p />
                </div>
            </div>
        </div>
    );
};
CamKetTuJoolux.Layout = Layout;
export default CamKetTuJoolux;

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

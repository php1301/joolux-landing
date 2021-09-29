import { ProxyTypeSet } from "immer/dist/internal";
import React, { FC } from "react";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";

interface IBlogItemProps {
    banner?: any;
    variant?: "rounded" | "default";
    effectActive?: boolean;
    className?: string;
    classNameInner?: string;
}

const BlogItemCenter: FC<IBlogItemProps> = ({ ...props }) => {
    const { t } = useTranslation("common");

    return (
        <div className="pb-7">
            <BreadcrumbItems separator="/">
                <ActiveLink
                    href={"/"}
                    activeClassName="font-semibold text-heading"
                >
                    {/* <a>{t("breadcrumb-home")}</a> */}
                    <a>{t("Trang chủ")}</a>
                </ActiveLink>
                <ActiveLink
                    href={ROUTES.BLOG}
                    activeClassName="font-semibold text-heading"
                >
                    <a className="capitalize">
                        {/* {t("breadcrumb-search")} */}
                        {t("blog")}
                    </a>
                </ActiveLink>
            </BreadcrumbItems>
        </div>
    );
};
export default BlogItemCenter;

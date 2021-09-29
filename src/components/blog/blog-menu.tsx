import { ProxyTypeSet } from "immer/dist/internal";
import React, { FC } from "react";

import ActiveLink from "@components/ui/active-link";

interface IBlogMenuProps {
    banner?: any;
    variant?: "rounded" | "default";
    effectActive?: boolean;
    className?: string;
    classNameInner?: string;
}

const BlogMenu: FC<IBlogMenuProps> = ({ ...props }) => {
    return (
        <div className="text-xs block Breadcrumbb">
            <div className="mb-8">
                <h6 className="Typography__H6-sc-18cqegv-5 hnzrVF text-15px font-bold uppercase border-b border-gray-900 pb-3">
                    Danh mục
                </h6>
                <div className="py-4">
                    <ul className="ist-nonem-0 p-0">
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <a
                                className="hover:text-secondary transition-colors duration-200"
                                href="/blog/category/phong-van"
                            >
                                Phỏng Vấn (8)
                            </a>
                        </li>
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <a
                                className="hover:text-secondary transition-colors duration-200"
                                href="/blog/category/tin-tuc-thoi-trang"
                            >
                                Tin Tức Thời Trang (38)
                            </a>
                        </li>
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <a
                                className="hover:text-secondary transition-colors duration-200"
                                href="/blog/category/su-kien"
                            >
                                Sự kiện (9)
                            </a>
                        </li>
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <a
                                className="hover:text-secondary transition-colors duration-200"
                                href="/blog/category/thi-truong"
                            >
                                Thị Trường (41)
                            </a>
                        </li>
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <a
                                className="hover:text-secondary transition-colors duration-200"
                                href="/blog/category/tui-xach"
                            >
                                Túi Xách (10)
                            </a>
                        </li>
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <ActiveLink
                                activeClassName="!text-secondary"
                                href="/blog/category/phong-van"
                            >
                                <a
                                    href="/blog/category/phu-kien"
                                    className="hover:text-secondary transition-colors duration-200 blog-category-item"
                                >
                                    Phụ Kiện (33)
                                </a>
                            </ActiveLink>
                        </li>
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <a
                                className="hover:text-secondary transition-colors duration-200"
                                href="/blog/category/phong-cach-song"
                            >
                                Phong Cách Sống (52)
                            </a>
                        </li>
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <a
                                className="hover:text-secondary transition-colors duration-200"
                                href="/blog/category/lam-dep"
                            >
                                Làm Đẹp (18)
                            </a>
                        </li>
                        <li className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC">
                            <a
                                className="hover:text-secondary transition-colors duration-200"
                                href="/blog/category/thoi-trang"
                            >
                                Thời Trang (60)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default BlogMenu;

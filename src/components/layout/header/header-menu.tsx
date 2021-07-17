import Link from "@components/ui/link";
import { FaChevronDown } from "react-icons/fa";
import MegaMenu from "@components/ui/mega-menu";
import ListMenu from "@components/ui/list-menu";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

interface MenuProps {
    data: any;
    className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
    const { t } = useTranslation("menu");
    return (
        <nav className={classNames(`headerMenu flex relative`, className)}>
            {data?.map((item: any) => {
                if (!item.subMenu) {
                    return (
                        <div
                            className={`menuItem group cursor-pointer py-7 ${
                                item.subMenu ? "relative" : ""
                            }`}
                            key={item.id}
                        >
                            <Link
                                href={item.path}
                                className="uppercase font-bold inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 relative group-hover:text-black"
                            >
                                {t(item.label)}
                            </Link>

                            {item?.columns && Array.isArray(item.columns) && (
                                <MegaMenu columns={item.columns} />
                            )}
                        </div>
                    );
                }
            })}
            <div className="flex ml-auto">
                <div className={`menuItem group cursor-pointer py-7 `} key={7}>
                    <Link
                        href={"/ky-gui"}
                        className="uppercase font-bold inline-flex items-center text-sm xl:text-base text-secondary px-3 xl:px-4 py-2 relative group-hover:text-black"
                    >
                        Ký gửi
                    </Link>
                </div>
                <div
                    className={`menuItem group cursor-pointer py-7 relative`}
                    key={data[0].id}
                >
                    <Link
                        href={"/other"}
                        className="uppercase font-bold inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 relative group-hover:text-black"
                    >
                        Dịch vụ khác
                    </Link>
                    {data[0]?.subMenu && Array.isArray(data[0].subMenu) && (
                        <div className="subMenu shadow-header bg-gray-200 absolute start-0 opacity-0 group-hover:opacity-100">
                            <ul className="text-body text-sm py-5">
                                {data[0].subMenu.map(
                                    (menu: any, index: number) => {
                                        const dept: number = 1;
                                        const menuName: string = `sidebar-menu-${dept}-${index}`;

                                        return (
                                            <ListMenu
                                                dept={dept}
                                                data={menu}
                                                hasSubMenu={menu.subMenu}
                                                menuName={menuName}
                                                key={menuName}
                                                menuIndex={index}
                                            />
                                        );
                                    },
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default HeaderMenu;
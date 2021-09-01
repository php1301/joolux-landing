/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ROUTES } from "@utils/routes";
import { useLogoutMutation } from "@framework/auth/use-logout";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    IoPersonCircleSharp,
    IoHomeOutline,
    IoCartOutline,
    IoPersonOutline,
    IoSettingsOutline,
    IoLogOutOutline,
} from "react-icons/io5";
import { useTranslation } from "next-i18next";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ExaAccountDropdownmple() {
    const { t } = useTranslation("common");
    const { mutate: logout } = useLogoutMutation();
    const { pathname } = useRouter();
    const newPathname = pathname.split("/").slice(2, 3);
    const mainPath = `/${newPathname[0]}`;
    const accountMenu = [
        {
            slug: ROUTES.ACCOUNT,
            name: "text-dashboard",
            icon: <IoHomeOutline className="w-5 h-5" />,
        },
        {
            slug: ROUTES.ORDERS,
            name: "text-orders",
            icon: <IoCartOutline className="w-5 h-5" />,
        },
        {
            slug: ROUTES.ACCOUNT_DETAILS,
            name: "text-account-details",
            icon: <IoPersonOutline className="w-5 h-5" />,
        },
        {
            slug: ROUTES.CHANGE_PASSWORD,
            name: "text-change-password",
            icon: <IoSettingsOutline className="w-5 h-5" />,
        },
    ];
    return (
        <div className="group inline-block relative">
            <button>
                <IoPersonCircleSharp className="w-7 h-7 text-white" />
            </button>
            <ul
                className="absolute hidden text-gray-700 group-hover:block min-w-[200px] -right-20 top-6 bg-white"
                style={{
                    boxShadow: "rgb(61 61 61 / 25%) 0px 4px 16px",
                }}
            >
                {accountMenu.map((item) => {
                    return (
                        <Link key={item.slug} href={item.slug}>
                            <a
                                className={
                                    "flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 hover:bg-gray-300"
                                }
                            >
                                {item.icon}
                                <span className="ps-2">
                                    {t(`${item?.name}`)}
                                </span>
                            </a>
                        </Link>
                    );
                })}
                <button
                    className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 hover:bg-gray-300 focus:outline-none w-full"
                    onClick={() => logout()}
                >
                    <IoLogOutOutline className="w-5 h-5" />
                    <span className="ps-2">Đăng xuất</span>
                </button>
            </ul>
        </div>
    );
}

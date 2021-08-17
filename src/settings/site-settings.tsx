import { ILFlag } from "@components/icons/ILFlag";
import { SAFlag } from "@components/icons/SAFlag";
import { CNFlag } from "@components/icons/CNFlag";
import { USFlag } from "@components/icons/USFlag";
import { DEFlag } from "@components/icons/DEFlag";
import { ESFlag } from "@components/icons/ESFlag";
export const siteSettings = {
    name: "Joolux",
    description:
        "Cập nhật những thông tin mới nhất về xu hướng thời trang với Joolux. Đăng ký nhận thông tin bằng cách nhập email của bạn.",
    author: {
        name: "Webdev Studios",
        websiteUrl: "https://webdevstudios.org",
        address: "",
    },
    logo: {
        url: "/assets/images/logo.svg",
        alt: "Webdev",
        href: "/",
        width: 95,
        height: 30,
    },
    defaultLanguage: "en",
    currencyCode: "USD",
    site_header: {
        menu: [
            {
                id: 1,
                path: "/hang-moi-ve",
                label: "Hàng mới về",
            },
            {
                id: 2,
                path: "/dich-vu",
                label: "Dịch vụ khác",
                subMenu: [
                    {
                        id: 1,
                        path: "/dich-vu/kiem-dinh-hang-hieu",
                        label: "Kiểm định hàng hiệu",
                    },
                    {
                        id: 2,
                        path: "/dich-vu/cham-soc-hang-hieu",
                        label: "Chăm sóc và chế tác hàng hiệu",
                    },
                    {
                        id: 3,
                        path: "/minimal",
                        label: "Cho thuê hàng hiệu (upcoming)",
                    },
                ],
            },
            {
                id: 3,
                path: "/hang-moi-ve",
                label: "Thương hiệu",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=top-wear",
                                label: "Thương hiệu nổi tiếng",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?brands=louis-vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 2,
                                        path: "/hang-moi-ve?brands=gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 3,
                                        path: "/hang-moi-ve?brands=chanel",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 4,
                                        path: "/hang-moi-ve?brands=hermes",
                                        label: "Hermès",
                                    },
                                    {
                                        id: 5,
                                        path: "/hang-moi-ve?brands=frederique-constant",
                                        label: "Frederique Constant",
                                    },
                                    {
                                        id: 6,
                                        path: "/hang-moi-ve?brands=longines",
                                        label: "Longines",
                                    },
                                    {
                                        id: 7,
                                        path: "/hang-moi-ve?brands=adidas",
                                        label: "adidas",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?brands=adidas",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?brands=Nike",
                                        label: "Nike",
                                    },
                                    {
                                        id: 2,
                                        path: "/hang-moi-ve?brands=adidas",
                                        label: "Dior",
                                    },
                                    {
                                        id: 3,
                                        path: "/hang-moi-ve?brands=dolce-gabbana",
                                        label: "Dolce & Gabbana",
                                    },
                                    {
                                        id: 4,
                                        path: "/hang-moi-ve?brands=valentino",
                                        label: "Valentino",
                                    },
                                    {
                                        id: 5,
                                        path: "/hang-moi-ve?brands=burberry",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 6,
                                        path: "/hang-moi-ve?brands=prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 7,
                                        path: "/hang-moi-ve?brands=zenith",
                                        label: "Zenith",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=footwear",
                                label: "    ",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?brands=fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 2,
                                        path: "/hang-moi-ve?brands=saint-laurent",
                                        label: "Saint Laurent",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                path: "/tui-xach",
                label: "Túi xách",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=top-wear",
                                label: "Thương hiệu nổi tiếng",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/tui-xach",
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/tui-xach?brands=louis-vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 3,
                                        path: "/tui-xach?brands=gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 4,
                                        path: "/tui-xach?brands=dolce-gabbana",
                                        label: "Dolce & Gabbana",
                                    },
                                    {
                                        id: 5,
                                        path: "/tui-xach?brands=chanel",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 6,
                                        path: "/tui-xach?brands=hermes",
                                        label: "Hermès",
                                    },
                                    {
                                        id: 7,
                                        path: "/tui-xach?brands=dior",
                                        label: "Dior",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=western-wear",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/tui-xach?brands=prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 2,
                                        path: "/tui-xach?brands=burberry",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 3,
                                        path: "/tui-xach?brands=celine",
                                        label: "Celine",
                                    },
                                    {
                                        id: 4,
                                        path: "/tui-xach?brands=fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 5,
                                        path: "/tui-xach?brands=goyard",
                                        label: "Goyard",
                                    },
                                    {
                                        id: 6,
                                        path: "/tui-xach?brands=yves-saint-laurent",
                                        label: "Yves Saint Laurent",
                                    },
                                    {
                                        id: 7,
                                        path: "/tui-xach?brands=saint-laurent",
                                        label: "Saint Laurent",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=footwear",
                                label: "    ",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/tui-xach?brands=balenciaga",
                                        label: "Balenciaga",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                path: "/giay-sneaker",
                label: "GIÀY & SNEAKER",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=top-wear",
                                label: "Thương hiệu nổi tiếng",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/giay-sneaker",
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/giay-sneaker?brands=prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 3,
                                        path: "/giay-sneaker?brands=christian-dior",
                                        label: "Christian Dior",
                                    },
                                    {
                                        id: 4,
                                        path: "/giay-sneaker?brands=adidas",
                                        label: "Adidas",
                                    },
                                    {
                                        id: 5,
                                        path: "/giay-sneaker?brands=chanel",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 6,
                                        path: "/giay-sneaker?brands=nike",
                                        label: "Nike",
                                    },
                                    {
                                        id: 7,
                                        path: "/giay-sneaker?brands=puma",
                                        label: "Puma",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=western-wear",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/giay-sneaker?brands=new-balance",
                                        label: "New Balance",
                                    },
                                    {
                                        id: 2,
                                        path: "/giay-sneaker?brands=hermes",
                                        label: "Hermès",
                                    },
                                    {
                                        id: 3,
                                        path: "/giay-sneaker?brands=dior",
                                        label: "Dior",
                                    },
                                    {
                                        id: 4,
                                        path: "/giay-sneaker?brands=gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 5,
                                        path: "/giay-sneaker?brands=fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 6,
                                        path: "/giay-sneaker?brands=louis-vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 7,
                                        path: "/giay-sneaker?brands=balenciaga",
                                        label: "Balenciaga",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=footwear",
                                label: "    ",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/giay-sneaker?brands=salvatore-ferragamo",
                                        label: "Salvatore Ferragamo",
                                    },
                                    {
                                        id: 2,
                                        path: "/giay-sneaker?brands=dolce-gabbana",
                                        label: "Dolce & Gabbana",
                                    },
                                    {
                                        id: 3,
                                        path: "/giay-sneaker?brands=under-armour",
                                        label: "Under Armour",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                path: "/dong-ho-cao-cap",
                label: "Đồng hồ",

                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=top-wear",
                                label: "Thương hiệu nổi tiếng",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/dong-ho-cao-cap",
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/dong-ho-cao-cap?brands=casio",
                                        label: "Casio",
                                    },
                                    {
                                        id: 3,
                                        path: "/dong-ho-cao-cap?brands=tag-heuer",
                                        label: "Tag Heuer",
                                    },
                                    {
                                        id: 4,
                                        path: "/dong-ho-cao-cap?brands=fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 5,
                                        path: "/dong-ho-cao-cap?brands=omega",
                                        label: "Omega",
                                    },
                                    {
                                        id: 6,

                                        path: "/dong-ho-cao-cap?brands=longines",
                                        label: "Longines",
                                    },
                                    {
                                        id: 7,

                                        path: "/dong-ho-cao-cap?brands=burberry",
                                        label: "Burberry",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=western-wear",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/dong-ho-cao-cap?brands=gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 2,
                                        path: "/dong-ho-cao-cap?brands=mont-blanc",
                                        label: "Mont Blanc",
                                    },
                                    {
                                        id: 3,
                                        path: "/dong-ho-cao-cap?brands=frederique-constant",
                                        label: "Frederique Constant",
                                    },
                                    {
                                        id: 4,
                                        path: "/dong-ho-cao-cap?brands=edox",
                                        label: "Edox",
                                    },
                                    {
                                        id: 5,
                                        path: "/dong-ho-cao-cap?brands=versace",
                                        label: "Versace",
                                    },
                                    {
                                        id: 6,
                                        path: "/dong-ho-cao-cap?brands=seiko",
                                        label: "Seiko",
                                    },
                                    {
                                        id: 7,
                                        path: "/dong-ho-cao-cap?brands=citizen",
                                        label: "Citizen",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=western-wear",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/dong-ho-cao-cap?brands=eterna",
                                        label: "Eterna",
                                    },
                                    {
                                        id: 2,

                                        path: "/dong-ho-cao-cap?brands=oris",
                                        label: "Oris",
                                    },
                                    {
                                        id: 3,

                                        path: "/dong-ho-cao-cap?brands=mido",
                                        label: "Mido",
                                    },
                                    {
                                        id: 4,
                                        path: "/dong-ho-cao-cap?brands=maurice-lacroix",
                                        label: "Maurice Lacroix",
                                    },
                                    {
                                        id: 5,
                                        path: "/dong-ho-cao-cap?brands=orient",
                                        label: "Orient",
                                    },
                                    {
                                        id: 6,
                                        path: "/dong-ho-cao-cap?brands=victorinox",
                                        label: "Victorinox",
                                    },
                                    {
                                        id: 7,
                                        path: "/dong-ho-cao-cap?brands=tissot",
                                        label: "Tissot",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 4,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=western-wear",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/dong-ho-cao-cap?brands=raymond-weil",
                                        label: "Raymond Weil",
                                    },
                                    {
                                        id: 2,
                                        path: "/dong-ho-cao-cap?brands=zenith",
                                        label: "Zenith",
                                    },
                                    {
                                        id: 3,

                                        path: "/dong-ho-cao-cap?brands=hublot",
                                        label: "Hublot",
                                    },
                                    {
                                        id: 4,

                                        path: "/dong-ho-cao-cap?brands=rolex",
                                        label: "Rolex",
                                    },
                                    {
                                        id: 5,
                                        path: "/dong-ho-cao-cap?brands=hermes",
                                        label: "Hermès",
                                    },
                                    {
                                        id: 6,

                                        path: "/dong-ho-cao-cap?brands=louis-vuitton",
                                        label: "Louis Vuitton",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 7,
                path: "/phu-kien",
                label: "Phụ kiện",

                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=top-wear",
                                label: "Thương hiệu nổi tiếng",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/phu-kien",
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/phu-kien?brands=oliver-peoples",
                                        label: "Oliver Peoples",
                                    },
                                    {
                                        id: 3,

                                        path: "/phu-kien?brands=oakley",
                                        label: "Oakley",
                                    },
                                    {
                                        id: 4,
                                        path: "/phu-kien?brands=randolph-engineering",
                                        label: "Randolph Engineering",
                                    },
                                    {
                                        id: 5,

                                        path: "/phu-kien?brands=spy+",
                                        label: "Spy+",
                                    },
                                    {
                                        id: 6,
                                        path: "/phu-kien?brands=ermenegildo-zegna",
                                        label: "Ermenegildo Zegna",
                                    },
                                    {
                                        id: 7,

                                        path: "/phu-kien?brands=tom-ford",
                                        label: "Tom Ford",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=western-wear",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/phu-kien?brands=ray-ban",
                                        label: "Ray Ban",
                                    },
                                    {
                                        id: 2,
                                        path: "/phu-kien?brands=fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 3,
                                        path: "/phu-kien?brands=kenzo",
                                        label: "Kenzo",
                                    },
                                    {
                                        id: 4,
                                        path: "/phu-kien?brands=etnia-barcelona",
                                        label: "ETNIA Barcelona",
                                    },
                                    {
                                        id: 5,
                                        path: "/phu-kien?brands=louis-vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 6,
                                        path: "/phu-kien?brands=persol",
                                        label: "Persol",
                                    },
                                    {
                                        id: 7,

                                        path: "/phu-kien?brands=zink",
                                        label: "Zink",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=western-wear",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/phu-kien?brands=versace",
                                        label: "Versace",
                                    },
                                    {
                                        id: 2,
                                        path: "/phu-kien?brands=hugo-boss",
                                        label: "Hugo Boss",
                                    },
                                    {
                                        id: 3,
                                        path: "/phu-kien?brands=ferragamo",
                                        label: "Ferragamo",
                                    },
                                    {
                                        id: 4,
                                        path: "/phu-kien?brands=tod%27s",
                                        label: "TOD'S",
                                    },
                                    {
                                        id: 5,
                                        path: "/phu-kien?brands=salvatore-ferragamo",
                                        label: "Salvatore Ferragamo",
                                    },
                                    {
                                        id: 6,
                                        path: "/phu-kien?brands=givenchy",
                                        label: "Givenchy",
                                    },
                                    {
                                        id: 7,
                                        path: "/phu-kien?brands=balenciaga",
                                        label: "Balenciaga",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 4,
                        columnItems: [
                            {
                                id: 1,
                                path: "/search?q=western-wear",
                                label: "\n",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/phu-kien?brands=emilio-pucci",
                                        label: "Emilio Pucci",
                                    },
                                    {
                                        id: 2,
                                        path: "/phu-kien?brands=prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 3,
                                        path: "/phu-kien?brands=mont-blanc",
                                        label: "Mont Blanc",
                                    },
                                    {
                                        id: 4,
                                        path: "/phu-kien?brands=dior",
                                        label: "Dior",
                                    },
                                    {
                                        id: 5,
                                        path: "/phu-kien?brands=gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 6,
                                        path: "/phu-kien?brands=hermes",
                                        label: "Hermès",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
        mobileMenu: [
            {
                id: 1,
                path: "/hang-moi-ve",
                label: "Hàng mới về",
            },
            {
                id: 2,
                path: "/dich-vu",
                label: "Dịch vụ khác",
                subMenu: [
                    {
                        id: 1,
                        path: "/dich-vu/kiem-dinh-hang-hieu",
                        label: "Kiểm định hàng hiệu",
                    },
                    {
                        id: 2,
                        path: "/dich-vu/cham-soc-hang-hieu",
                        label: "Chăm sóc và chế tác hàng hiệu",
                    },
                    {
                        id: 3,
                        path: "/minimal",
                        label: "Cho thuê hàng hiệu (upcoming)",
                    },
                ],
            },
            {
                id: 3,
                path: "/hang-moi-ve",
                label: "Thương hiệu",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                subMenu: [
                    {
                        id: 1,
                        path: "/hang-moi-ve",
                        label: "Thương hiệu nổi tiếng",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?brands=louis-vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 2,
                                path: "/hang-moi-ve?brands=gucci",
                                label: "Gucci",
                            },
                            {
                                id: 3,
                                path: "/hang-moi-ve?brands=chanel",
                                label: "Chanel",
                            },
                            {
                                id: 4,
                                path: "/hang-moi-ve?brands=hermes",
                                label: "Hermès",
                            },
                            {
                                id: 5,
                                path: "/hang-moi-ve?brands=frederique-constant",
                                label: "Frederique Constant",
                            },
                            {
                                id: 6,
                                path: "/hang-moi-ve?brands=longines",
                                label: "Longines",
                            },
                            {
                                id: 7,
                                path: "/hang-moi-ve?brands=adidas",
                                label: "adidas",
                            },
                            {
                                id: 8,
                                path: "/hang-moi-ve?brands=Nike",
                                label: "Nike",
                            },
                            {
                                id: 9,
                                path: "/hang-moi-ve?brands=adidas",
                                label: "Dior",
                            },
                            {
                                id: 10,
                                path: "/hang-moi-ve?brands=dolce-gabbana",
                                label: "Dolce & Gabbana",
                            },
                            {
                                id: 11,
                                path: "/hang-moi-ve?brands=valentino",
                                label: "Valentino",
                            },
                            {
                                id: 12,
                                path: "/hang-moi-ve?brands=burberry",
                                label: "Burberry",
                            },
                            {
                                id: 13,
                                path: "/hang-moi-ve?brands=prada",
                                label: "Prada",
                            },
                            {
                                id: 14,
                                path: "/hang-moi-ve?brands=zenith",
                                label: "Zenith",
                            },
                            {
                                id: 15,
                                path: "/hang-moi-ve?brands=fendi",
                                label: "Fendi",
                            },
                            {
                                id: 16,
                                path: "/hang-moi-ve?brands=saint-laurent",
                                label: "Saint Laurent",
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                path: "/tui-xach",
                label: "Túi xách",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                subMenu: [
                    {
                        id: 1,
                        path: "/tui-xach",
                        label: "Thương hiệu",
                        subMenu: [
                            {
                                id: 1,
                                path: "/tui-xach",
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/tui-xach?brands=louis-vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 3,
                                path: "/tui-xach?brands=gucci",
                                label: "Gucci",
                            },
                            {
                                id: 4,
                                path: "/tui-xach?brands=dolce-gabbana",
                                label: "Dolce & Gabbana",
                            },
                            {
                                id: 5,
                                path: "/tui-xach?brands=chanel",
                                label: "Chanel",
                            },
                            {
                                id: 6,
                                path: "/tui-xach?brands=hermes",
                                label: "Hermès",
                            },
                            {
                                id: 7,
                                path: "/tui-xach?brands=dior",
                                label: "Dior",
                            },

                            {
                                id: 8,
                                path: "/tui-xach?brands=prada",
                                label: "Prada",
                            },
                            {
                                id: 9,
                                path: "/tui-xach?brands=burberry",
                                label: "Burberry",
                            },
                            {
                                id: 10,
                                path: "/tui-xach?brands=celine",
                                label: "Celine",
                            },
                            {
                                id: 11,
                                path: "/tui-xach?brands=fendi",
                                label: "Fendi",
                            },
                            {
                                id: 12,
                                path: "/tui-xach?brands=goyard",
                                label: "Goyard",
                            },
                            {
                                id: 13,
                                path: "/tui-xach?brands=yves-saint-laurent",
                                label: "Yves Saint Laurent",
                            },
                            {
                                id: 14,
                                path: "/tui-xach?brands=saint-laurent",
                                label: "Saint Laurent",
                            },
                            {
                                id: 15,
                                path: "/tui-xach?brands=balenciaga",
                                label: "Balenciaga",
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                path: "/giay-sneaker",
                label: "GIÀY & SNEAKER",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                subMenu: [
                    {
                        id: 1,
                        path: "/giay-sneaker",
                        label: "Thương hiệu nổi tiếng",
                        subMenu: [
                            {
                                id: 1,
                                path: "/giay-sneaker",
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/giay-sneaker?brands=prada",
                                label: "Prada",
                            },
                            {
                                id: 3,
                                path: "/giay-sneaker?brands=christian-dior",
                                label: "Christian Dior",
                            },
                            {
                                id: 4,
                                path: "/giay-sneaker?brands=adidas",
                                label: "Adidas",
                            },
                            {
                                id: 5,
                                path: "/giay-sneaker?brands=chanel",
                                label: "Chanel",
                            },
                            {
                                id: 6,
                                path: "/giay-sneaker?brands=nike",
                                label: "Nike",
                            },
                            {
                                id: 7,
                                path: "/giay-sneaker?brands=puma",
                                label: "Puma",
                            },
                            {
                                id: 8,
                                path: "/giay-sneaker?brands=new-balance",
                                label: "New Balance",
                            },
                            {
                                id: 9,
                                path: "/giay-sneaker?brands=hermes",
                                label: "Hermès",
                            },
                            {
                                id: 10,
                                path: "/giay-sneaker?brands=dior",
                                label: "Dior",
                            },
                            {
                                id: 11,
                                path: "/giay-sneaker?brands=gucci",
                                label: "Gucci",
                            },
                            {
                                id: 12,
                                path: "/giay-sneaker?brands=fendi",
                                label: "Fendi",
                            },
                            {
                                id: 13,
                                path: "/giay-sneaker?brands=louis-vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 14,
                                path: "/giay-sneaker?brands=balenciaga",
                                label: "Balenciaga",
                            },
                            {
                                id: 15,
                                path: "/giay-sneaker?brands=salvatore-ferragamo",
                                label: "Salvatore Ferragamo",
                            },
                            {
                                id: 16,
                                path: "/giay-sneaker?brands=dolce-gabbana",
                                label: "Dolce & Gabbana",
                            },
                            {
                                id: 17,
                                path: "/giay-sneaker?brands=under-armour",
                                label: "Under Armour",
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                path: "/dong-ho-cao-cap",
                label: "Đồng hồ",
                subMenu: [
                    {
                        id: 1,
                        path: "/dong-ho-cao-cap",
                        label: "Thương hiệu nổi tiếng",
                        subMenu: [
                            {
                                id: 1,
                                path: "/dong-ho-cao-cap",
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/dong-ho-cao-cap?brands=casio",
                                label: "Casio",
                            },
                            {
                                id: 3,
                                path: "/dong-ho-cao-cap?brands=tag-heuer",
                                label: "Tag Heuer",
                            },
                            {
                                id: 4,
                                path: "/dong-ho-cao-cap?brands=fendi",
                                label: "Fendi",
                            },
                            {
                                id: 5,
                                path: "/dong-ho-cao-cap?brands=omega",
                                label: "Omega",
                            },
                            {
                                id: 6,

                                path: "/dong-ho-cao-cap?brands=longines",
                                label: "Longines",
                            },
                            {
                                id: 7,

                                path: "/dong-ho-cao-cap?brands=burberry",
                                label: "Burberry",
                            },
                            {
                                id: 8,
                                path: "/dong-ho-cao-cap?brands=gucci",
                                label: "Gucci",
                            },
                            {
                                id: 9,
                                path: "/dong-ho-cao-cap?brands=mont-blanc",
                                label: "Mont Blanc",
                            },
                            {
                                id: 10,
                                path: "/dong-ho-cao-cap?brands=frederique-constant",
                                label: "Frederique Constant",
                            },
                            {
                                id: 11,
                                path: "/dong-ho-cao-cap?brands=edox",
                                label: "Edox",
                            },
                            {
                                id: 12,
                                path: "/dong-ho-cao-cap?brands=versace",
                                label: "Versace",
                            },
                            {
                                id: 13,
                                path: "/dong-ho-cao-cap?brands=seiko",
                                label: "Seiko",
                            },
                            {
                                id: 14,
                                path: "/dong-ho-cao-cap?brands=citizen",
                                label: "Citizen",
                            },
                            {
                                id: 15,
                                path: "/dong-ho-cao-cap?brands=eterna",
                                label: "Eterna",
                            },
                            {
                                id: 16,
                                path: "/dong-ho-cao-cap?brands=oris",
                                label: "Oris",
                            },
                            {
                                id: 17,
                                path: "/dong-ho-cao-cap?brands=mido",
                                label: "Mido",
                            },
                            {
                                id: 18,
                                path: "/dong-ho-cao-cap?brands=maurice-lacroix",
                                label: "Maurice Lacroix",
                            },
                            {
                                id: 19,
                                path: "/dong-ho-cao-cap?brands=orient",
                                label: "Orient",
                            },
                            {
                                id: 20,
                                path: "/dong-ho-cao-cap?brands=victorinox",
                                label: "Victorinox",
                            },
                            {
                                id: 21,
                                path: "/dong-ho-cao-cap?brands=tissot",
                                label: "Tissot",
                            },
                            {
                                id: 22,
                                path: "/dong-ho-cao-cap?brands=raymond-weil",
                                label: "Raymond Weil",
                            },
                            {
                                id: 23,
                                path: "/dong-ho-cao-cap?brands=zenith",
                                label: "Zenith",
                            },
                            {
                                id: 24,
                                path: "/dong-ho-cao-cap?brands=hublot",
                                label: "Hublot",
                            },
                            {
                                id: 25,
                                path: "/dong-ho-cao-cap?brands=rolex",
                                label: "Rolex",
                            },
                            {
                                id: 26,
                                path: "/dong-ho-cao-cap?brands=hermes",
                                label: "Hermès",
                            },
                            {
                                id: 27,
                                path: "/dong-ho-cao-cap?brands=louis-vuitton",
                                label: "Louis Vuitton",
                            },
                        ],
                    },
                ],
            },
            {
                id: 7,
                path: "/phu-kien",
                label: "Phụ kiện",

                subMenu: [
                    {
                        id: 7,
                        path: "/phu-kien",
                        label: "Thương hiệu nổi tiếng",
                        subMenu: [
                            {
                                id: 1,
                                path: "/phu-kien",
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/phu-kien?brands=oliver-peoples",
                                label: "Oliver Peoples",
                            },
                            {
                                id: 3,

                                path: "/phu-kien?brands=oakley",
                                label: "Oakley",
                            },
                            {
                                id: 4,
                                path: "/phu-kien?brands=randolph-engineering",
                                label: "Randolph Engineering",
                            },
                            {
                                id: 5,

                                path: "/phu-kien?brands=spy+",
                                label: "Spy+",
                            },
                            {
                                id: 6,
                                path: "/phu-kien?brands=ermenegildo-zegna",
                                label: "Ermenegildo Zegna",
                            },
                            {
                                id: 7,
                                path: "/phu-kien?brands=tom-ford",
                                label: "Tom Ford",
                            },
                            {
                                id: 8,
                                path: "/phu-kien?brands=ray-ban",
                                label: "Ray Ban",
                            },
                            {
                                id: 9,
                                path: "/phu-kien?brands=fendi",
                                label: "Fendi",
                            },
                            {
                                id: 10,
                                path: "/phu-kien?brands=kenzo",
                                label: "Kenzo",
                            },
                            {
                                id: 11,
                                path: "/phu-kien?brands=etnia-barcelona",
                                label: "ETNIA Barcelona",
                            },
                            {
                                id: 12,
                                path: "/phu-kien?brands=louis-vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 13,
                                path: "/phu-kien?brands=persol",
                                label: "Persol",
                            },
                            {
                                id: 14,
                                path: "/phu-kien?brands=zink",
                                label: "Zink",
                            },
                            {
                                id: 15,
                                path: "/phu-kien?brands=versace",
                                label: "Versace",
                            },
                            {
                                id: 16,
                                path: "/phu-kien?brands=hugo-boss",
                                label: "Hugo Boss",
                            },
                            {
                                id: 17,
                                path: "/phu-kien?brands=ferragamo",
                                label: "Ferragamo",
                            },
                            {
                                id: 18,
                                path: "/phu-kien?brands=tod%27s",
                                label: "TOD'S",
                            },
                            {
                                id: 19,
                                path: "/phu-kien?brands=salvatore-ferragamo",
                                label: "Salvatore Ferragamo",
                            },
                            {
                                id: 20,
                                path: "/phu-kien?brands=givenchy",
                                label: "Givenchy",
                            },
                            {
                                id: 21,
                                path: "/phu-kien?brands=balenciaga",
                                label: "Balenciaga",
                            },
                            {
                                id: 22,
                                path: "/phu-kien?brands=emilio-pucci",
                                label: "Emilio Pucci",
                            },
                            {
                                id: 23,
                                path: "/phu-kien?brands=prada",
                                label: "Prada",
                            },
                            {
                                id: 24,
                                path: "/phu-kien?brands=mont-blanc",
                                label: "Mont Blanc",
                            },
                            {
                                id: 25,
                                path: "/phu-kien?brands=dior",
                                label: "Dior",
                            },
                            {
                                id: 26,
                                path: "/phu-kien?brands=gucci",
                                label: "Gucci",
                            },
                            {
                                id: 27,
                                path: "/phu-kien?brands=hermes",
                                label: "Hermès",
                            },
                        ],
                    },
                ],
            },
        ],
        languageMenu: [
            {
                id: "ar",
                name: "عربى - AR",
                value: "ar",
                icon: <SAFlag width="20px" height="15px" />,
            },
            {
                id: "zh",
                name: "中国人 - ZH",
                value: "zh",
                icon: <CNFlag width="20px" height="15px" />,
            },
            {
                id: "en",
                name: "English - EN",
                value: "en",
                icon: <USFlag width="20px" height="15px" />,
            },
            {
                id: "de",
                name: "Deutsch - DE",
                value: "de",
                icon: <DEFlag width="20px" height="15px" />,
            },
            {
                id: "he",
                name: "rעברית - HE",
                value: "he",
                icon: <ILFlag width="20px" height="15px" />,
            },
            {
                id: "es",
                name: "Español - ES",
                value: "es",
                icon: <ESFlag width="20px" height="15px" />,
            },
        ],
    },
};

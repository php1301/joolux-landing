import Link from "@components/ui/link";
// import Image from "next/image";
import type { FC } from "react";
import { useWindowSize } from "@utils/use-window-size";
import cn from "classnames";
import { LinkProps } from "next/link";

interface IBannerProps {
    banner: any;
    variant?: "rounded" | "default";
    effectActive?: boolean;
    className?: string;
    classNameInner?: string;
    href: LinkProps["href"];
}

function getImage(deviceWidth: number, imgObj: any) {
    return deviceWidth < 480 ? imgObj?.mobile : imgObj?.desktop;
}

const BannerCard: FC<IBannerProps> = ({
    banner,
    className,
    variant = "rounded",
    effectActive = false,
    classNameInner,
    href,
}) => {
    const { width } = useWindowSize();
    const { title, image } = banner;
    const selectedImage = getImage(width, image);
    return (
        <div className={cn(className, "mx-auto flex justify-center flex-wrap")}>
            <Link
                href={href}
                // https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover
                className={cn(
                    "h-full group flex justify-center relative overflow-hidden",
                    classNameInner,
                )}
            >
                <img
                    src={
                        selectedImage?.url ||
                        "/assets/images/hero/banner-2-jl.jpg"
                    }
                    // width={selectedImage.width}
                    // height={selectedImage.height}
                    // layout="fill"
                    alt={title}
                    // objectFit="fill"
                    // quality={100}
                    //  so when we resize the browser window, the aspect ratio of the images is preserved:
                    className={cn("bg-gray-300 object-fill w-full", {
                        "rounded-md": variant === "rounded",
                    })}
                />
                {effectActive && (
                    <div className="absolute inset-0 -start-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine h-full"></div>
                )}
            </Link>
        </div>
    );
};

export default BannerCard;

import React from "react";
import { JooLuxIcon } from "@components/icons";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";

export const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
    className,
    ...props
}) => {
    return (
        <Link
            href={siteSettings.logo.href}
            className={cn(
                "inline-flex focus:outline-none site-logo text-xl font-black text-secondary",
                className,
            )}
            {...props}
        >
            <JooLuxIcon
                data-test="icon"
                // className="text-white mx-auto"
                width="295"
                height="107"
            />
        </Link>
    );
};

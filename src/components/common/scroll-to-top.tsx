import React, { FC } from "react";
import cn from "classnames";
import { useWindowScroll } from "react-use";
const ScrollToTop: FC = () => {
    // const {} = useWindowSize();
    const { y } = useWindowScroll();
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div
            onClick={handleScrollToTop}
            className={cn("go-top-button", {
                hidden: y < 400,
            })}
        >
            Top
        </div>
    );
};

export default ScrollToTop;

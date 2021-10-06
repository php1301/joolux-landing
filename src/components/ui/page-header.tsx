import Image from "next/image";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
interface HeaderProps {
    pageSubHeader?: string;
    pageHeader?: string;
}

const PageHeader: React.FC<HeaderProps> = ({
    pageSubHeader = "",
    pageHeader = "",
}) => {
    return (
        <div
            className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover h-full page-header"
            // style={{
            //     backgroundImage:
            //         "url(/assets/images/banner/banner-charity.png)",
            // }}
        >
            {/* <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" /> */}
            <Image
                src="/assets/images/banner/banner-charity.png"
                quality={100}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(565, 275),
                )}`}
                layout="fill"
            />
        </div>
    );
};

export default PageHeader;

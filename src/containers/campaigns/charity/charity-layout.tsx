import React, { FC } from "react";
import PageHeader from "@components/ui/page-header";
import CountdownComponent from "@components/common/countdown";
import Timeline from "@components/ui/timeline";

const CharityLayout: FC = () => {
    return (
        <div className="section-1">
            <PageHeader />
            <div className="mx-auto max-w-[1400px] text-center pt-8 smJl:pb-16 pb-10 px-8 overflow-hidden">
                <h2 className="font-brand text-black uppercase text-lg md:text-3xl">
                    Sự kiện mở bán gây quỹ
                </h2>
                <CountdownComponent />
                <div className="mt-16 relative">
                    <img className="mx-auto" src="/assets/images/divider.jpg" />
                    <h2 className="font-body text-[#18191f] text-lg md:text-3xl mt-6 font-medium">
                        Timeline chương trình
                    </h2>
                    <Timeline />
                </div>
            </div>
        </div>
    );
};

export default CharityLayout;

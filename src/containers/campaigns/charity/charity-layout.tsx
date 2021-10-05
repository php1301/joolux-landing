import React, { FC } from "react";
import PageHeader from "@components/ui/page-header";
import CountdownComponent from "@components/common/countdown";

const CharityLayout: FC = () => {
    return (
        <>
            <PageHeader />
            <div className="mx-auto max-w-[1234px] text-center pt-8 smJl:pb-16 pb-10 px-8">
                <h2 className="font-brand text-black uppercase text-lg md:text-3xl">
                    Sự kiện mở bán gây quỹ
                </h2>
                <CountdownComponent />
                <div className="mt-16">
                    <img className="mx-auto" src="/assets/images/divider.jpg" />
                    <h2 className="font-body text-[#18191f] text-lg md:text-3xl mt-6 font-medium">
                        Timeline chương trình
                    </h2>
                </div>
            </div>
        </>
    );
};

export default CharityLayout;

import React, { FC } from "react";
import Image from "next/image";
import { CollectionBanner } from "@framework/types";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
const BrandBlock: FC<{
    collectionBanner: CollectionBanner[];
}> = ({ collectionBanner }) => (
    <div className="mx-auto max-w-[1234px] px-5">
        <div className="flex flex-wrap">
            {collectionBanner.map((item) => {
                return (
                    <div
                        className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-5"
                        key={item.slug}
                    >
                        <Link
                            className="bg-white border border-gray-300 block"
                            href={`${ROUTES.PROMOTIONS}/${item.slug}`}
                        >
                            <div>
                                <div className="brand-image">
                                    <Image
                                        alt="Louis Vuitton"
                                        layout="fill"
                                        src={item.image}
                                    />
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="font-semibold leading-[1.33] jqBAH text-xl mb-2 mb-2px">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Mua ngay
                                </p>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    </div>
);
export default BrandBlock;

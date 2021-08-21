import React, { FC } from "react";
import Image from "next/image";
const BrandBlock: FC = () => (
    <div className="mx-auto max-w-[1234px] px-5">
        <div className="flex flex-wrap">
            <div className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-5">
                <a
                    className="bg-white border border-gray-300 block"
                    href="/promotion/louis-vuitton"
                >
                    <div>
                        <div className="brand-image">
                            <Image
                                alt="Louis Vuitton"
                                layout="fill"
                                src="https://images.ctfassets.net/p86i8hai3zda/6idyzvNg4gxUTrTGAnP0DF/8b1c12227d301598247b9cee290053d3/Banner_LV__1_.jpg"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="font-semibold leading-[1.33] jqBAH text-xl mb-2 mb-2px">
                            Louis Vuitton
                        </p>
                        <p className="text-sm text-gray-700">Mua ngay</p>
                    </div>
                </a>
            </div>
            <div className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-5">
                <a
                    className="bg-white border border-gray-300 block"
                    href="/promotion/christian-dior"
                >
                    <div>
                        <div className="brand-image">
                            <Image
                                alt="Christian Dior"
                                layout="fill"
                                src="https://images.ctfassets.net/p86i8hai3zda/4d0C2FQFjaaRMfQXLlyFUx/4d06bf8666872975f62dd07e6c53bcfa/Dior.jpg"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="font-semibold leading-[1.33] jqBAH text-xl mb-2 mb-2px">
                            Christian Dior
                        </p>
                        <p className="text-sm text-gray-700">Mua ngay</p>
                    </div>
                </a>
            </div>
            <div className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-5">
                <a
                    className="bg-white border border-gray-300 block"
                    href="/promotion/tui-hieu-cong-so"
                >
                    <div>
                        <div className="brand-image">
                            <Image
                                alt="Túi hiệu công sở"
                                layout="fill"
                                src="https://images.ctfassets.net/p86i8hai3zda/3APFTfvmsG8dEzepjkRrEh/20431c04491294f20b98d3ba1dca1fe8/T__i_hi___u_c__ng_s___.jpg"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="font-semibold leading-[1.33] jqBAH text-xl mb-2 mb-2px">
                            Túi hiệu công sở
                        </p>
                        <p className="text-sm text-gray-700">Mua ngay</p>
                    </div>
                </a>
            </div>
            <div className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-5">
                <a
                    className="bg-white border border-gray-300 block"
                    href="/promotion/tui-hieu-dao-pho"
                >
                    <div>
                        <div className="brand-image">
                            <Image
                                alt="Túi hiệu dạo phố"
                                layout="fill"
                                src="https://images.ctfassets.net/p86i8hai3zda/0GEJxDNLAufstIOPcYg9g/17b0e7cc41b0c4c2aa9f5136856f29f9/T__i_hi___u_d___o_ph___.jpg"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="font-semibold leading-[1.33] jqBAH text-xl mb-2 mb-2px">
                            Túi hiệu dạo phố
                        </p>
                        <p className="text-sm text-gray-700">Mua ngay</p>
                    </div>
                </a>
            </div>
            <div className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-5">
                <a
                    className="bg-white border border-gray-300 block"
                    href="/promotion/giai-dieu-mua-he"
                >
                    <div>
                        <div className="brand-image">
                            <Image
                                alt=" Giai điệu ngày hè"
                                layout="fill"
                                src="https://images.ctfassets.net/p86i8hai3zda/5IPkpjGvz5RyluL1DFCHB/2301777d7b60295d3acbd64bb6090988/Giai___i___u_ng__y_h__.jpg"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="font-semibold leading-[1.33] jqBAH text-xl mb-2 mb-2px">
                            Giai điệu ngày hè
                        </p>
                        <p className="text-sm text-gray-700">Mua ngay</p>
                    </div>
                </a>
            </div>
            <div className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-5">
                <a
                    className="bg-white border border-gray-300 block"
                    href="/promotion/vi-hieu-thoi-trang"
                >
                    <div>
                        <div className="brand-image">
                            <Image
                                alt="Ví hiệu thời trang"
                                layout="fill"
                                src="https://images.ctfassets.net/p86i8hai3zda/3jr9b8TatQP1hcktYjEtEl/45cbec1c1fd29624610b1f52ee7ab6bd/V___hi___u_th___i_th_____ng.jpg"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="font-semibold leading-[1.33] jqBAH text-xl mb-2 mb-2px">
                            Ví hiệu thời trang
                        </p>
                        <p className="text-sm text-gray-700">Mua ngay</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
);
export default BrandBlock;

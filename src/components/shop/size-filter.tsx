import { useRouter } from "next/router";
import React, { useState } from "react";
import { prepareUrlAs } from "@utils/prepare-url";
import { CheckBox } from "@components/ui/checkbox";
import Scrollbar from "@components/common/scrollbar";

export const SizeFilter = ({ sizesFilter }) => {
    const router = useRouter();
    const { pathname, query } = router;
    const [showAllSizes, setShowAllSizes] = useState(false);
    const selectedSizes = query?.sizes
        ? (query.sizes as string).split("|")
        : [];
    const [formState, setFormState] = React.useState<string[]>(selectedSizes);

    React.useEffect(() => {
        setFormState(selectedSizes);
    }, [query?.sizes]);

    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;
        const currentFormState = formState.includes(value)
            ? formState.filter((i) => i !== value)
            : [...formState, value];
        const { sizes, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...(currentFormState.length
                        ? {
                              sizes: currentFormState.join("|"),
                          }
                        : {}),
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: true });
        // router.push(
        //     {
        //         pathname,
        //         query: {
        //             ...restQuery,
        //             ...(currentFormState.length
        //                 ? {
        //                       category: currentFormState.join(","),
        //                   }
        //                 : {}),
        //         },
        //     },
        //     undefined,
        //     { scroll: false },
        // );
    }
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading lg:text-lg md:text-base font-semibold mb-2 uppercase">
                C??? gi??y
            </h3>
            <div className="mt-2 flex flex-col space-y-2">
                {!showAllSizes ? (
                    <>
                        {sizesFilter?.slice(0, 6).map((item: any) => (
                            <CheckBox
                                key={item?.id}
                                label={item?.name}
                                name={item?.name?.toLowerCase()}
                                checked={formState.includes(item?.name)}
                                value={item?.name}
                                variant="jl"
                                onChange={handleItemClick}
                            />
                        ))}
                    </>
                ) : (
                    <Scrollbar className="os-host-flexbox max-h-48">
                        <div className="h-auto">
                            {sizesFilter?.map((item: any) => (
                                <div>
                                    <CheckBox
                                        key={item?.id}
                                        label={item?.name}
                                        name={item?.name?.toLowerCase()}
                                        checked={formState.includes(item?.name)}
                                        value={item?.name}
                                        variant="jl"
                                        onChange={handleItemClick}
                                    />
                                </div>
                            ))}
                        </div>
                    </Scrollbar>
                )}
            </div>
            {!showAllSizes && (
                <button
                    className="p-0 text-secondary outline-none font-medium text-sm mt-2"
                    aria-label="Xem t???t c??? Th????ng Hi???u"
                    data-testid="filter-select-showall-button"
                    onClick={() => {
                        setShowAllSizes(true);
                    }}
                >
                    Xem t???t c???
                </button>
            )}
        </div>
    );
};

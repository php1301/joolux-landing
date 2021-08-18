import { useCategoriesQuery } from "@framework/category/get-all-categories";
import { Input } from "@components/ui/input";
import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { prepareUrlAs } from "@utils/prepare-url";

export const CategoryFilter = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { pathname, query } = router;
    const { data, isLoading } = useCategoriesQuery({
        limit: 10,
    });
    const selectedCategories = query?.category
        ? (query.category as string).split("|")
        : [];
    const [formState, setFormState] =
        React.useState<string[]>(selectedCategories);

    React.useEffect(() => {
        setFormState(selectedCategories);
    }, [query?.category]);

    if (isLoading) return <p>Loading...</p>;

    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;
        const currentFormState = formState.includes(value)
            ? formState.filter((i) => i !== value)
            : [...formState, value];
        const { category, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...(currentFormState.length
                        ? {
                              category: currentFormState.join("|"),
                          }
                        : {}),
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: false });
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
    const items = data?.categories.data;
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                {t("text-category")}
            </h3>
            <Input
                className="block relative mb-4"
                placeholderKey="Tìm Thương Hiệu"
                name="category-search"
                inputClassName="px-8"
                variant="jl"
                hasIcon
            />
            <div className="mt-2 flex flex-col space-y-2">
                {items?.map((item: any) => (
                    <CheckBox
                        key={item.id}
                        label={item.name}
                        name={item.name.toLowerCase()}
                        checked={formState.includes(item.slug)}
                        value={item.slug}
                        variant="jl"
                        onChange={handleItemClick}
                    />
                ))}
            </div>
        </div>
    );
};

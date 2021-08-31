import { CategoryFilter } from "./category-filter";
import { FilteredItem } from "./filtered-item";
import { ColorFilter } from "./color-filter";
import { PriceFilter } from "./price-filter";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";
import { useTranslation } from "next-i18next";
import { Filter } from "@framework/types";
import { BrandFilter } from "./brand-filter";
import { GenderFilter } from "./gender-filter";
import { StatusFilter } from "./status-filter";
import { ConditionFilter } from "./condition-filter";
import { MaterialFilter } from "./material-filter";
import { SizeFilter } from "./size-filter";

interface IShopFilters {
    filter: Filter;
    modalTooltip?: boolean;
    mobile?: boolean;
}
export const ShopFilters: React.FC<IShopFilters> = ({
    filter,
    modalTooltip = false,
    mobile = true,
}) => {
    const router = useRouter();
    const { pathname, query } = router;
    const { t } = useTranslation("common");
    const { page, sort, ...restQuery } = query;
    const {
        brands,
        categories,
        colors,
        conditions,
        genders,
        materials,
        prices,
        sizes,
        statuses,
    } = filter ?? {};
    return (
        <div className="pt-1">
            <div className="block border-b border-gray-300 pb-7 mb-7">
                <div className="flex items-center justify-between mb-2.5">
                    {/* <h2 className="font-semibold text-heading text-xl md:text-2xl">
                        {t("text-filters")}
                    </h2> */}
                    <h2 className="font-semibold text-heading text-xl md:text-2xl">
                        {t("Hàng mới về")}
                    </h2>
                    <button
                        className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
                        aria-label="Clear All"
                        onClick={() => {
                            router.push(pathname);
                        }}
                    >
                        {t("text-clear-all")}
                    </button>
                </div>
                <div className="flex flex-wrap -m-1.5 pt-2">
                    {!isEmpty(restQuery) &&
                        Object.values(restQuery)
                            .join("|")
                            .split("|")
                            .map((v, idx) => (
                                <FilteredItem
                                    itemKey={
                                        Object.keys(restQuery).find((k) =>
                                            restQuery[k]?.includes(v),
                                        )!
                                    }
                                    itemValue={v}
                                    key={idx}
                                />
                            ))}
                </div>
            </div>
            {categories && <CategoryFilter categoriesFilter={categories} />}
            {brands && <BrandFilter brandsFilter={brands} />}
            {genders && <GenderFilter gendersFilter={genders} />}
            {statuses && <StatusFilter statusesFilter={statuses} />}
            {conditions && (
                <ConditionFilter
                    conditionsFilter={conditions}
                    modalTooltip={modalTooltip}
                    mobile={mobile}
                />
            )}
            {materials && <MaterialFilter materialsFilter={materials} />}
            {sizes && <SizeFilter sizesFilter={sizes} />}
            {prices && <PriceFilter pricesFilter={prices} />}
            {colors && <ColorFilter colorsFilter={colors} />}
        </div>
    );
};

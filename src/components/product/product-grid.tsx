import type { FC } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ProductCard from "@components/product/product-card";
import { Button } from "@components/ui/button";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useProductsQuery } from "@framework/product/get-all-products";

interface IProductGridProps {
    className?: string;
}

export const ProductGrid: FC<IProductGridProps> = ({ className = "" }) => {
    const { query } = useRouter();

    const {
        isFetching: isLoading,
        isFetchingNextPage: loadingMore,
        fetchNextPage,
        hasNextPage,
        data,
        error,
    } = useProductsQuery({ limit: 10, ...query });
    const { t } = useTranslation("common");

    if (error) return <p>{error.message}</p>;
    return (
        <>
            <div
                className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
            >
                {isLoading && !data?.pages?.length ? (
                    <ProductFeedLoader limit={20} uniqueKey="search-product" />
                ) : (
                    data?.pages?.map((page) => {
                        return page?.data?.map((product) => (
                            <ProductCard
                                key={`product--key${product.id}`}
                                product={product}
                                variant="grid"
                            />
                        ));
                    })
                )}
            </div>
            <div className="text-center pt-8 xl:pt-14">
                {hasNextPage && (
                    <Button
                        loading={loadingMore}
                        disabled={loadingMore}
                        onClick={() => fetchNextPage()}
                        variant="slim"
                    >
                        {t("button-load-more")}
                    </Button>
                )}
            </div>
        </>
    );
};

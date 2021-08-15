import { FC, useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "@components/product/product-card";
// import { Button } from "@components/ui/button";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
// import { useProductsQuery } from "@framework/product/get-all-products";
import { useProductsPaginationQuery } from "@framework/product/get-all-products-pagination";
import Pagination from "@components/common/pagination";

interface IProductGridProps {
    className?: string;
    temp_total: number;
}

export const ProductGrid: FC<IProductGridProps> = ({
    className = "",
    temp_total,
}) => {
    const [pageNum, setPageNum] = useState(1);
    const { query } = useRouter();

    const {
        isFetching: isLoading,
        data,
        error,
    } = useProductsPaginationQuery({ page: pageNum, ...query });

    if (error) return <p>{error.message}</p>;
    return (
        <>
            <div
                className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className} transition-opacity duration-300`}
            >
                {isLoading && !data?.products?.length ? (
                    <ProductFeedLoader limit={20} uniqueKey="search-product" />
                ) : (
                    data?.products?.map((product) => {
                        return (
                            <ProductCard
                                key={`product--key${product._id}`}
                                product={product}
                                variant="jl"
                            />
                        );
                    })
                )}
            </div>
            {/* <div className="text-center pt-8 xl:pt-14">
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
            </div> */}
            <Pagination temp_total={temp_total} setPageNum={setPageNum} />
        </>
    );
};

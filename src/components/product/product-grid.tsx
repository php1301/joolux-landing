import type { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ProductCard from "@components/product/product-card";
import { Button } from "@components/ui/button";
import ReactPaginate from "react-paginate";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useProductsQuery } from "@framework/product/get-all-products";
import { useProductsPaginationQuery } from "@framework/product/get-all-products-pagination";
import Pagination from "@components/common/pagination";

interface IProductGridProps {
    className?: string;
}

export const ProductGrid: FC<IProductGridProps> = ({ className = "" }) => {
    const { query } = useRouter();

    const {
        isFetching: isLoading,
        data,
        error,
    } = useProductsPaginationQuery({ page: 1, ...query });

    const { t } = useTranslation("common");
    if (error) return <p>{error.message}</p>;
    console.log(data);

    // const [pageNum, setPageNum] = useState(1);
    const onPageChange = (i) => {
        console.log(i);
        // setPageNum(i);
    };
    // useEffect(() => {
    //     const offset = (pageNum - 1) * limit;
    //     console.log(offset);
    // }, [pageNum]);
    // const totalPages = Math.ceil(totalRecords / limit);
    // const range = (from, to, step = 1) => {
    //     let i = from;
    //     const range = [];

    //     while (i <= to) {
    //         range.push(i);
    //         i += step;
    //     }

    //     return range;
    // };
    return (
        <>
            <div
                className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
            >
                {isLoading && !data?.products?.length ? (
                    <ProductFeedLoader limit={20} uniqueKey="search-product" />
                ) : (
                    data?.products?.map((product) => {
                        return (
                            <ProductCard
                                key={`product--key${product.id}`}
                                product={product}
                                variant="grid"
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
            <div className="container flex justify-start mx-auto product-paginate">
                <ReactPaginate
                    previousLabel={"<"}
                    previousLinkClassName="inline-flex h-8 w-8 text-gray-600 bg-white border border-solid border-[#cfcfcf] leading-8 mx-1 justify-center items-center cursor-pointer text-sm"
                    nextLinkClassName="inline-flex h-8 w-8 text-gray-600 bg-white border border-solid border-[#cfcfcf] leading-8 mx-1 justify-center items-center cursor-pointer text-sm"
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={data?.totalPages?.totalPage}
                    // limit={10}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    // pageLinkClassName="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                    // activeLinkClassName="h-10 px-5 text-white bg-gray-600 border border-r-0 border-gray-600"
                    onPageChange={onPageChange}
                    breakLinkClassName="text-sm inline-flex px-[6px] h-8 w-8 text-gray-600 bg-white leading-8 mx-1 justify-center items-center"
                    containerClassName={"flex w-1/2 items-center"}
                    activeClassName={"active"}
                />
            </div>
        </>
    );
};

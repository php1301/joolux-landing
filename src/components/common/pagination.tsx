import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { useProductsTotalPages } from "@framework/product/get-product-total-pages";

interface IPagination {
    setPageNum: any;
    temp_total?: number;
}
const Pagination: FC<IPagination> = ({ setPageNum, temp_total }) => {
    const onPageChange = ({ selected }) => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        setPageNum(() => {
            return selected + 1;
        });
    };
    const { isFetching: isLoading, data, error } = useProductsTotalPages();
    if (error) return <p>{error.message}</p>;
    return (
        <div className="container flex justify-start mx-auto product-paginate mt-6">
            <ReactPaginate
                previousLabel={"<"}
                previousLinkClassName="inline-flex h-8 w-8 text-gray-600 bg-white border border-solid border-[#cfcfcf] leading-8 mx-1 justify-center items-center cursor-pointer text-sm"
                nextLinkClassName="inline-flex h-8 w-8 text-gray-600 bg-white border border-solid border-[#cfcfcf] leading-8 mx-1 justify-center items-center cursor-pointer text-sm"
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={
                    !isLoading ? data?.totalPages?.totalPage : temp_total
                }
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
    );
};

export default Pagination;

import React, { FC, useState, useEffect } from "react";

interface IPagination {
    totalPages?: number;
    limit?: number;
}
const Pagination: FC<IPagination> = ({ totalPages = 20, limit = 5 }) => {
    const [pageNum, setPageNum] = useState(1);
    const onPageChange = (i) => {
        setPageNum(i);
    };
    useEffect(() => {
        const offset = (pageNum - 1) * limit;
        console.log(offset);
    }, [pageNum]);
    // const totalPages = Math.ceil(totalRecords / limit);
    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    };
    const pagesArray = range(1, totalPages);
    console.log(pageNum, totalPages);
    return (
        <div className="container flex justify-center mx-auto">
            <ul className="flex">
                <li>
                    <button
                        onClick={() => {
                            setPageNum(1);
                        }}
                        className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                    >
                        {"<<"}
                    </button>
                    <button
                        onClick={() => {
                            setPageNum((page) => (page > 1 ? page - 1 : page));
                        }}
                        className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                    >
                        {"<"}
                    </button>
                </li>
                {pagesArray?.length > 0 &&
                    pagesArray.slice(pageNum - 1, pageNum + 3).map((i) => {
                        return (
                            <li key={i}>
                                {i !== pageNum ? (
                                    <button
                                        onClick={() => {
                                            onPageChange(i);
                                        }}
                                        className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 "
                                    >
                                        {i}
                                    </button>
                                ) : (
                                    <button className="h-10 px-5 text-white bg-gray-600 border border-r-0 border-gray-600">
                                        {i}
                                    </button>
                                )}
                            </li>
                        );
                    })}
                {pageNum + 4 < totalPages && (
                    <li>
                        <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                            {"..."}
                        </button>
                    </li>
                )}
                {/* <li>
                    <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 ">
                        1
                    </button>
                </li>
                <li>
                    <button className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                        2
                    </button>
                </li>
                <li>
                    <button className="h-10 px-5 text-white bg-gray-600 border border-r-0 border-gray-600 ">
                        3
                    </button>
                </li> */}
                <li>
                    <button
                        onClick={() => {
                            setPageNum((page) =>
                                page < totalPages ? page + 1 : page,
                            );
                        }}
                        className="h-10 px-5 text-gray-600 bg-white border border-gray-600 hover:bg-gray-100"
                    >
                        {">"}
                    </button>
                    <button
                        onClick={() => {
                            setPageNum(totalPages);
                        }}
                        className="h-10 px-5 text-gray-600 bg-white border border-gray-600 hover:bg-gray-100"
                    >
                        {">>"}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;

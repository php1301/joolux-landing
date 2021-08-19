import React, { FC } from "react";
import Link from "@components/ui/link";

const ProductNumber: FC<{
    details: {
        id: number;
        columnName: string;
        value: string;
        highlight: boolean;
    }[];
}> = ({ details }) => {
    if (details[3]?.value && details[4]?.value && details[5]?.value) {
        details[16].value = `Dài: ${details[3].value} x Rộng: ${details[4].value} x Cao: ${details[5].value}`;
    }
    console.log(details);
    return (
        <div className="py-6">
            <ul className="text-sm space-y-5 pb-1">
                {details?.length &&
                    details?.map((item) => {
                        if (
                            item?.id !== 4 &&
                            item?.id !== 5 &&
                            item?.id !== 6
                        ) {
                            return (
                                item.value && (
                                    <li key={item.id}>
                                        <span className="transition hover:underline hover:text-heading">
                                            {item?.columnName}:{" "}
                                        </span>
                                        <Link
                                            href="/"
                                            className={`font-semibold inline-block pe-2 ${
                                                item.highlight
                                                    ? "text-secondary"
                                                    : "text-heading"
                                            }`}
                                        >
                                            {item?.value}
                                        </Link>
                                    </li>
                                )
                            );
                        }
                    })}
            </ul>
        </div>
    );
};

export default ProductNumber;

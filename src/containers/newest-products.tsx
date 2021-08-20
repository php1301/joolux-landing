import ProductCard from "@components/product/product-card";
import Link from "@components/ui/link";
import { Product } from "@framework/types";

interface ProductsProps {
    className?: string;
    data: Product[];
}

const NewestProducts: React.FC<ProductsProps> = ({
    className = "mb-9 lg:mb-10 xl:mb-14",
    data,
}) => {
    // const { data, isLoading, error, isFetched } = useRelatedProductsQuery({});
    // if (error) return <p>{error}</p>;
    return (
        data && (
            <div className="max-w-[1234px] mx-auto pt-4 smJl:pb-10 pb-8 px-8">
                <div className="border-t border-[#e7e7e7] mb-8 md:mb-14"></div>
                <div className={className}>
                    <h5
                        className="font-semibold leading-[1.33] text-lg mb-7 text-center"
                        data-chext-position
                        data-chext-overflow
                    >
                        Hàng Mới Về
                    </h5>
                    <div className="grid grid-cols-2 smJl:grid-cols-4 2xl:grid-cols-4 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                        {data?.map((product: any) => (
                            <ProductCard
                                key={`product--key${product._id}`}
                                product={product}
                                variant="jl"
                                bottomBorder="border-none"
                            />
                        ))}
                    </div>
                    <div className="text-center">
                        <Link href="/hang-moi-ve" className="inline-flex">
                            <button
                                type="button"
                                className="blog-button mt-2 md:flex hidden"
                                data-chext-position
                                data-chext-overflow
                            >
                                Xem Thêm
                            </button>
                        </Link>
                        <a className="flex w-full">
                            <button
                                type="button"
                                className="blog-button-show-all md:hidden border-primary text-primary"
                                data-chext-position
                                data-chext-overflow
                                style={{}}
                            >
                                Xem Tất Cả
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    );
};

export default NewestProducts;

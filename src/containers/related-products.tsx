import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useRelatedProductsQuery } from "@framework/product/get-related-products";
import Alert from "@components/ui/alert";

interface ProductsProps {
    sectionHeading: string;
    className?: string;
    brand?: string;
    category?: string;
    id?: string;
}

const RelatedProducts: React.FC<ProductsProps> = ({
    sectionHeading,
    className = "mb-9 lg:mb-10 xl:mb-14",
    brand,
    category,
    id,
}) => {
    const { data, isLoading, error, isFetched } = useRelatedProductsQuery({
        brand,
        category,
        id,
    });

    return (
        isFetched &&
        data.length !== 0 && (
            <div className={className}>
                <SectionHeader
                    sectionHeading={sectionHeading}
                    justify={"justify-center"}
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                    {error ? (
                        <div className="col-span-full">
                            <Alert message={error?.message} />
                        </div>
                    ) : isLoading ? (
                        <ProductFeedLoader
                            limit={4}
                            uniqueKey="related-product"
                        />
                    ) : (
                        data?.map((product: any) => (
                            <ProductCard
                                key={`product--key${product.id}`}
                                product={product}
                                imgWidth={340}
                                variant="jl"
                                imgHeight={440}
                            />
                        ))
                    )}
                </div>
                <div className="text-center">
                    <a className="inline-flex">
                        <button
                            type="button"
                            className="blog-button mt-2 md:flex hidden"
                            data-chext-position
                            data-chext-overflow
                            style={{}}
                        >
                            Xem Thêm
                        </button>
                    </a>
                </div>
            </div>
        )
    );
};

export default RelatedProducts;

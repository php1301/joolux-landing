import { Collapse } from "@components/common/accordion";
import ReviewForm from "@components/common/form/review-form";

interface Props {
    data: any;
}

const ProductMetaReview: React.FC<Props> = ({ data }) => {
    return (
        <>
            {data?.meta.map((item: any, index: any) => (
                <Collapse
                    i={index}
                    key={item.title}
                    title={item.title}
                    translatorNS="review"
                    content={
                        data?.meta.length === item.id ? (
                            <>
                                {item.content}
                                <ReviewForm />
                            </>
                        ) : (
                            item.content
                        )
                    }
                    variant="transparent"
                />
            ))}
        </>
    );
};

export default ProductMetaReview;

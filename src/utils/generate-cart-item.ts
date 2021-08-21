// import isEmpty from "lodash/isEmpty";

interface Item {
    _id: string | number;
    name: string;
    urlKey: string;
    // image: {
    //     thumbnail: string;
    //     [key: string]: unknown;
    // };
    image: string;
    price: number;
    sale_price?: number;
    [key: string]: unknown;
}
export function generateCartItem(item: Item, attributes: object) {
    const { _id, name, urlKey, image, price, sale_price } = item;
    return {
        id: _id,
        name,
        slug: urlKey,
        image: image,
        price: sale_price ? sale_price : price,
        attributes,
    };
}

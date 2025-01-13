import { RProduct, IProduct } from "@/types";
import { RCartItem, ICartItem } from "@/types";
import { RCart, ICart } from "@/types";

export const convertRProductToIProduct = (rProduct: RProduct): IProduct => {
    return {
        id:	rProduct.id,
        title:	rProduct.title,
        description:    rProduct.description || "",
        category:   rProduct.category || "",
        brand:  rProduct.brand || "",
        price:  rProduct.price,
        discountPercentage: rProduct.discountPercentage,
        rating: rProduct.rating,
        stock:  rProduct.stock,
        thumbnail:  rProduct.thumbnail || "/default-image.webp",
    };
};

export const convertRCartItemToICartItem = (rCartItem: RCartItem): ICartItem => {
    return {
        id:rCartItem.id,
        cartId:Number(rCartItem.username || 0),
        productId:rCartItem.productId,
        product: convertRProductToIProduct(rCartItem.product),
        quantity:rCartItem.quantity,
    };
};

export const convertRCartToICart = (rCart: RCart): ICart => {
    const items:ICartItem[] = rCart.items?.map(convertRCartItemToICartItem) || []; // Map items to ICartItems
    return {
        id: Number(rCart.items?.at(0)?.username) || 0, // Convert username to a number as ID
        items: items,
    };
};



import { RProduct, IProduct } from "@/types";
import { RCartItem, ICartItem } from "@/types";
import { RCart, ICart } from "@/types";

export const convertRProductToIProduct = (rProduct: RProduct): IProduct => {
    return {
        id:	rProduct.id,
        title:	rProduct.title,
        description:    rProduct.description,
        category:   rProduct.category,
        brand:  rProduct.brand,
        price:  rProduct.price,
        discountPercentage: rProduct.discountPercentage,
        rating: rProduct.rating,
        stock:  rProduct.stock,
        thumbnail:  rProduct.thumbnail || "/default-image.webp",
    };
};

export const convertRCartItemToICartItem = (rCartItem: RCartItem): ICartItem => {
    return {
        cartId: Number(rCartItem.username),
        product: convertRProductToIProduct(rCartItem.product),
        quantity: rCartItem.quantity,
    };
};

export const convertRCartToICart = (rCart: RCart): ICart => {
    const items:ICartItem[] = rCart.items?.map(convertRCartItemToICartItem) || []; // Map items to ICartItems
    const { totalPrice, totalDiscount, total } = calculateCart(items);
    return {
        id: Number(rCart.items?.at(0)?.username) || 0, // Convert username to a number as ID
        items: items,
        totalPrice: totalPrice,
        totalDiscount: totalDiscount,
        total: total,
    };
};

export const calculateCart = (items: ICartItem[]): { totalPrice: number, totalDiscount: number, total: number } => {
    const totalPrice = items?.reduce((sum, item) => sum + (item.product.price * item.quantity || 0), 0) || 0; // Sum of item prices
    const totalDiscount = items?.reduce((sum, item) => sum + ((item.product.price * (item.product.discountPercentage / 100) * item.quantity) || 0), 0) || 0; // Sum of discounts
    const total = totalPrice - totalDiscount; // Final total after discount

    return { totalPrice, totalDiscount, total };
};

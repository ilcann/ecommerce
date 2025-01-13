import { ICartItem } from "@/types";

export const calculateCart = (items: ICartItem[]): { subTotal: number, totalDiscount: number, total: number } => {
    const subTotal = items?.reduce((sum, item) => sum + (item.product.price * item.quantity || 0), 0) || 0; // Sum of item prices
    const totalDiscount = items?.reduce((sum, item) => sum + ((item.product.price * (item.product.discountPercentage / 100) * item.quantity) || 0), 0) || 0; // Sum of discounts
    const total = subTotal - totalDiscount; // Final total after discount

    return { subTotal, totalDiscount, total };
};

export const calculateDiscountedPrice = (price: number, discountPercentage: number): number => {
    const discountedPrice = price * (100 - discountPercentage) / 100;
    return discountedPrice;
};
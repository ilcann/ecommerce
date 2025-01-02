import { IProduct } from "@/types";

export interface ICartItem {
    cartId: number;
    product: IProduct;
    quantity: number;
};
import { IProduct } from "./IProduct"

export type ICartItem = {
    cartId: number;
    product: IProduct;
    quantity: number;
};
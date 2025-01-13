import { IProduct } from "./IProduct"

export type ICartItem = {
    id: number,
    cartId: number,
    productId: number,
    product: IProduct,
    quantity: number,
};
import { ICart } from "./ICart";
import { IProduct } from "./IProduct";

export interface ICartUpdate {
    cart: ICart;
    product: IProduct;
    quantity: number;
}
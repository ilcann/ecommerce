import { ICartItem } from "./ICartItem";

export interface ICartUpdate {
    cartItem: ICartItem;
    newQuantity: number;
}
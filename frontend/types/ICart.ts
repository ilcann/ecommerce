import { ICartItem } from "./ICartItem"

export type ICart = {
    id: number,
    items: ICartItem[],
    totalPrice: number,
    totalDiscount: number,
    total: number,
}
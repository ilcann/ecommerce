import { RProduct } from "./RProduct"

export type RCartItem = {
    id: number; // integer($int32)
    productId: number; // integer($int32)
    quantity: number; // integer($int32)
    username?: string; // nullable: true
    product: RProduct; // Embedded Product type
};
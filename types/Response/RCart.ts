import { RCartItem } from "./RCartItem";

export type RCart = {
    totalAmount: number; // number($double)
    items?: RCartItem[] | null; // nullable: true, array of CartItem or null
};
'use server'

import { updateCart } from "@/services/cartService";
import { ICartItem, RCartUpdate } from "@/types";


export const increaseQuantity = async (cartItem: ICartItem) => {
    const res:RCartUpdate = {
        username: String(cartItem.cartId),
        productId: cartItem.product.id,
        quantity: cartItem.quantity + 1,
    }
    updateCart(res);
};

export const decreaseQuantity = async (cartItem: ICartItem) => {
    const res:RCartUpdate = {
        username: String(cartItem.cartId),
        productId: cartItem.product.id,
        quantity: cartItem.quantity - 1,
    }
    updateCart(res);
};
"use server"

import { ICartItem } from "@/types";
import { ICartUpdate } from "@/types";
import { fetchCartById, updateCart } from "@/services/cartService";

export const increaseQuantity = async (item: ICartItem) => {
    "use server";
    
    // Fetch the current cart
    const currentCart = await fetchCartById(item.cartId);
    
    // Check if the item exists in the cart
    const cartItem = currentCart.items.find(c => c.product.id === item.product.id);
    
    if (cartItem) {
        // If the item exists, increase its quantity
        const updatedQuantity = cartItem.quantity + 1;
        const res: ICartUpdate = {
            cartItem: { ...cartItem, quantity: updatedQuantity },
            newQuantity: updatedQuantity,
        };
        await updateCart(res);
    } else {
        // If the item does not exist, add it with the specified quantity
        const res: ICartUpdate = {
            cartItem: { ...item, quantity: 1 },
            newQuantity: 1,
        };
        await updateCart(res);
    }
};

// Decrease quantity of a cart item
export const decreaseQuantity = async (item: ICartItem, newQuantity: number) => {
    "use server"
    if (item.quantity > 1) {
        const res:ICartUpdate = {
            cartItem: item,
            newQuantity: newQuantity,
        }
        await updateCart(res);
    }
};

// Remove item from cart
export const removeItem = async (item: ICartItem, newQuantity: number) => {
    "use server"
    const res:ICartUpdate = {
        cartItem: item,
        newQuantity: newQuantity,
    }
    await updateCart(res);
};
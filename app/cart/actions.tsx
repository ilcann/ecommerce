'use server';

import { fetchCart, updateCart } from "@/lib/db/cartService";
import { RCartUpdate } from "@/types";
import { revalidatePath } from "next/cache";

// Single function to handle update actions: increase, decrease, or remove
export async function updateCartQuantity(productId: number, action: 'increase' | 'decrease' | 'remove') {
    const cart = await fetchCart();
    
    const articleInCart = cart.items.find(item => item.productId === productId);
    
    let quantity: number;
    console.log("123");
    // Determine the quantity based on the action
    if (action === 'increase') {
        quantity = articleInCart ? articleInCart.quantity + 1 : 1;
    } else if (action === 'decrease') {
        quantity = articleInCart && articleInCart.quantity > 0 ? articleInCart.quantity - 1 : 0;
    } else if (action === 'remove') {
        quantity = 0;
    } else {
        throw new Error('Invalid action');
    }

    const res: RCartUpdate = {
        username: String(articleInCart ? articleInCart.cartId : cart.id),
        productId: productId,
        quantity: quantity,
    };

    await updateCart(res);
    
    revalidatePath('/cart');
}
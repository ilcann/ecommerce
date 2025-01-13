'use server';

import { fetchCart, updateCart } from "@/lib/db/cartService";
import { RCartUpdate } from "@/types";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId:number) {
    const cart = await fetchCart();
    
    const articleInCart = cart.items.find(item => item.productId === productId);
    
    if (articleInCart) {
        const res:RCartUpdate = {
            username: String(articleInCart.cartId),
            productId: articleInCart.productId,
            quantity: articleInCart.quantity + 1,
        }
        await updateCart(res);
    } else {
        const res:RCartUpdate = {
            username: String(cart.id),
            productId: productId,
            quantity: 1,
        }
        await updateCart(res);
    }
    revalidatePath('../app/cart/page.tsx')
}
'use client'

import { Container, Grid2 as Grid } from "@mui/material";
import { CartItems, CartSummary } from "@/components/Cart";
import { ICart, ICartItem } from "@/types";
import { useState } from "react";
import { calculateCart } from "@/services/typeConverter";
import { increaseQuantity, decreaseQuantity } from "@/app/cart/actions";

interface CartProps {
    initialCart: ICart;
}

const CartC = ({ initialCart }: CartProps) => {
    const [cart, setCart] = useState<ICart>(initialCart);

    const handleQuantityChange = (cartItem: ICartItem, action: 'increase' | 'decrease') => {
        setCart(prevCart => {
            const updatedItems = prevCart.items.map(item => 
                item.product.id === cartItem.product.id
                    ? { 
                        ...item, 
                        quantity: action === 'increase' ? item.quantity + 1 : Math.max(0, item.quantity - 1) 
                    }
                    : item
            ).filter(item => item.quantity > 0);  // quantity 0 olanları temizle

            const { total, totalDiscount, totalPrice } = calculateCart(updatedItems);

            // Uzak servisi güncelle
            if (action === 'increase') {
                increaseQuantity(cartItem);
            } else {
                decreaseQuantity(cartItem);
            }

            return { ...prevCart, items: updatedItems, totalPrice, totalDiscount, total };
        });
    };

    return (
        <Container disableGutters>
            <Grid container p={2} spacing={2}>
                <Grid size={{xs:12, sm:12, md:8}}>
                    <CartItems cart={cart} onQuantityChange={handleQuantityChange}/>
                </Grid>
                <Grid size={{xs:12, sm:12, md:4}}>
                    <CartSummary cart={cart}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CartC;
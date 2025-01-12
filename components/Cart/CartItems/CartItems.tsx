'use client'

import { Grid2 as Grid } from "@mui/material"
import { CartItemCard } from "./CartItemCard"
import { useCart } from "@/context/CartContext";

const CartItems = () => {
    const {cart} = useCart();
    console.log(cart);

    return (
        <Grid container sx={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
            {cart.items.map((item) => (
                <Grid size={12} key={item.product.id}>
                    <CartItemCard item={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default CartItems;
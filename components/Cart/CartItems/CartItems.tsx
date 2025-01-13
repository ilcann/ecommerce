'use client'

import { Grid2 as Grid } from "@mui/material"
import { CartItemCard } from "./CartItemCard"
import { ICart, ICartItem } from "@/types"

interface CartItemsProps {
    cart: ICart;
    onQuantityChange: (cartItem: ICartItem, action: 'increase' | 'decrease') => void;
}
  
const CartItems = ({ cart, onQuantityChange }: CartItemsProps) => {

    return (
        <Grid container sx={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
            {cart.items.map((item) => (
                <Grid size={12} key={item.product.id}>
                    <CartItemCard item={item} onQuantityChange={onQuantityChange}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default CartItems;
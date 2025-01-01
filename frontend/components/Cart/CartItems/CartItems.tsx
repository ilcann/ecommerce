import React from "react";
import { Grid2 as Grid, Typography } from '@mui/material';
import CartItem from "./CartItem/CartItem";
import { ICart } from "@/types";

export default function CartItems({ cart }: { cart: ICart }) {
    return (
        <Grid container spacing={1}>
            {cart.items.length === 0 ? ( // Check if cart is empty
                <Grid size= {{ xs: 12, sm: 12, md: 12, lg: 12}}>
                    <Typography variant="h6" pl={2}>
                        Sepetiniz Boş
                    </Typography>
                </Grid>
            ) : (
                cart.items.map((item) => (
                    <Grid key={item.product.id} size={{ xs: 12, sm: 12, md: 12, lg: 12}}>
                        <CartItem cart={cart} item={item}/>
                    </Grid>
                ))
            )}
        </Grid>
    )
}

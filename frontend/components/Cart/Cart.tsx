import React from 'react';
import { Grid2 as Grid } from "@mui/material"
import {CartInfo, CartItems, CartSummary} from './'
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useCart();

    return(
        <Grid container direction={'column'} spacing={2}>
            <Grid size = {12} pl={2} pr={2}>
                <CartInfo cart={cart}/>
            </Grid>
            <Grid container size = {12} direction={'row'} spacing={3}>
                <Grid size= {{xs: 12, sm: 12, md: 8}}>
                    <CartItems cart={cart}/>
                </Grid>
                <Grid size= {{xs: 12, sm: 12, md: 4}}>
                    <CartSummary cart={cart}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Cart;
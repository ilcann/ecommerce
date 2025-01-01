import React from 'react';
import { ICart } from '@/types';
import { CartItems, CartSummary } from '.'
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { fetchCartById } from "@/services/cartService";


export default async function Cart() {    
    const cart:ICart = await fetchCartById(123);

    return (
        <Box>
            <Box display="flex" flexDirection="row" alignItems="end" gap={1.5}>
                <Typography variant="h4" fontWeight={600}>
                    Sepetim
                </Typography>
                <Typography variant="h6">
                    {cart.items.length} Ürün
                </Typography>
            </Box>
            <Grid container spacing={2} pt={2} pb={2}>
                <Grid size= {{xs: 12, sm: 12, md: 8}}>
                    <CartItems cart={cart}></CartItems>
                </Grid>
                <Grid size= {{xs: 12, sm: 12, md: 4}}>
                    <CartSummary cart={cart}></CartSummary>
                </Grid>
            </Grid>
        </Box>
    );
}

import React from 'react';
import { Cart } from '../../types/types';
import { Grid2 as Grid, Typography } from '@mui/material';
import { CartItemCard } from './CartItemCard';

const CartItems : React.FC<{cart: Cart}> = ({ cart }) => {

    return (
        <Grid container spacing={1}>
            {cart.items.length === 0 ? (
                <Grid size= {{ xs: 12, sm: 12, md: 12, lg: 12}} width={'100%'}>
                    <Typography variant="h6" pl={2}>
                        Sepetiniz Boş
                    </Typography>
                </Grid>
            ) : (
                cart.items.map((item) => (
                    <Grid key={item.product.id} size={{ xs: 12, sm: 12, md: 12, lg: 12}}>
                        <CartItemCard item={item} />
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default CartItems;
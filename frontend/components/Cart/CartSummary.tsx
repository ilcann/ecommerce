import React from 'react';
import { Cart } from '../../types/types';
import { Box, Grid2 as Grid, Typography, Divider} from '@mui/material';

const CartSummary : React.FC<{cart: Cart}> = ({ cart }) => {
    const totalPrice = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const finalPrice = cart.items.reduce((sum, item) => sum + item.product.discountedPrice * item.quantity, 0);
    const totalDiscount = totalPrice - finalPrice;

    return (
        <Grid 
            container 
            spacing={2}
            padding={3} 
            boxShadow= {'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }
        >
            <Grid size={12} pb={2}>
                <Typography variant='h5' fontWeight={600}>
                    Sipariş Özeti
                </Typography>
            </Grid>
            <Grid container size={12} spacing={1} direction={'column'}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant='h6'>
                        Sepet Tutarı:
                    </Typography>
                    <Typography variant='h6'>
                        {totalPrice.toFixed(2)} TL
                    </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant='h6'>
                        İndirim Tutarı:
                    </Typography>
                    <Typography variant='h6'>
                        {totalDiscount.toFixed(2)} TL
                    </Typography>
                </Box>
                <Divider></Divider>
            </Grid>
            <Grid size={12}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Toplam:
                    </Typography>
                    <Typography variant='h5' fontWeight={600}>
                        {finalPrice.toFixed(2)} TL
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CartSummary;
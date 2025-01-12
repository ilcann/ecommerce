'use client'

import { Box, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { CustomButton } from "@/components";
import { useCart } from "@/context/CartContext";
import { formatPrice,currency } from "@/utils/price";

const CartSummary = () => {
    const { cart } = useCart();
    const totalPrice = cart.items?.reduce((sum, item) => sum + (item.product.price * item.quantity || 0), 0) || 0; // Sum of item prices
    const totalDiscount = cart.items?.reduce((sum, item) => sum + ((item.product.price * (item.product.discountPercentage / 100) * item.quantity) || 0), 0) || 0; // Sum of discounts
    const total = totalPrice - totalDiscount; // Final total after discount

    return(
        <Grid container direction={"column"} spacing={2} p={2} sx={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
            <Grid>
                <Typography variant="h5" fontWeight={'bold'}>Sipariş Özeti</Typography>
            </Grid>
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography>Ara Toplam</Typography>
                    <Typography>{formatPrice(totalPrice)} {currency}</Typography>
                </Box>
            </Grid>
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography color="success">İndirimler</Typography>
                    <Typography color="success">{formatPrice(totalDiscount)} {currency}</Typography>
                </Box>
            </Grid>
            <Divider />
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant="h6">Toplam</Typography>
                    <Typography variant="h6" fontWeight={'bold'}>{formatPrice(total)} {currency}</Typography>    
                </Box>
            </Grid>
            <Grid size={12}>
                <CustomButton variant="contained" text="Sepeti Onayla" />
            </Grid>
        </Grid>
    );
}

export default CartSummary;
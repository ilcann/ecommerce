import { ICart } from "@/types";
import { Box, Grid2 as Grid, Divider, Typography } from "@mui/material";
export default function CartSummary({ cart }: { cart: ICart }) {
    // TODO: cart prop olarak alınabilir
    const totalPrice = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const totalDiscount = cart.items.reduce((sum, item) => sum + (item.product.discountPercentage/100) * item.product.price * item.quantity, 0);
    const finalPrice = totalPrice - totalDiscount;
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
};
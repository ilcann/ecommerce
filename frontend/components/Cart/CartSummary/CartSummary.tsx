import { Box, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { CustomButton } from "@/components";

const CartSummary = ({ totalDiscount, totalPrice, total }: { totalDiscount:number, totalPrice:number, total:number }) => {
    return(
        <Grid container direction={"column"} spacing={2} p={2} sx={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
            <Grid>
                <Typography variant="h5" fontWeight={'bold'}>Sipariş Özeti</Typography>
            </Grid>
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography>Ara Toplam</Typography>
                    <Typography>{totalPrice.toFixed(2)}</Typography>
                </Box>
            </Grid>
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography color="success">İndirimler</Typography>
                    <Typography color="success">{totalDiscount.toFixed(2)}</Typography>
                </Box>
            </Grid>
            <Divider />
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant="h6">Toplam</Typography>
                    <Typography variant="h6" fontWeight={'bold'}>{total.toFixed(2)}</Typography>    
                </Box>
            </Grid>
            <Grid size={12}>
                <CustomButton variant="contained" text="Sepeti Onayla" />
            </Grid>
        </Grid>
    );
}

export default CartSummary;
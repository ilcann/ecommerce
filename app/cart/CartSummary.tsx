'use client'
import { Box, Button, Divider, Grid2 as Grid, Typography } from "@mui/material"
import { formatPrice } from "@/lib/format"

interface CartSummaryProps {
    subTotal: number,
    totalDiscount: number,
    total: number,
}

export default function CartSummary({ subTotal, totalDiscount, total }: CartSummaryProps) {
    return (
        <Grid container direction={"column"} spacing={2} p={2} sx={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
            <Grid>
                <Typography variant="h5" fontWeight={'bold'}>Sipariş Özeti</Typography>
            </Grid>
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography>Ara Toplam</Typography>
                    <Typography>{formatPrice(subTotal)}</Typography>
                </Box>
            </Grid>
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography color="success">İndirimler</Typography>
                    <Typography color="success">{formatPrice(totalDiscount)}</Typography>
                </Box>
            </Grid>
            <Divider />
            <Grid>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant="h6">Toplam</Typography>
                    <Typography variant="h6" fontWeight={'bold'}>{formatPrice(total)}</Typography>    
                </Box>
            </Grid>
            <Grid size={12}>
                <Button fullWidth variant={'contained'}
                 sx={{
                    color: 'white',
                    bgcolor: 'black',
                    fontWeight: 'bold',
                    '&:hover': {
                        color: 'grey'
                    }
                 }}
                 >Sepeti Onayla</Button>
            </Grid>
        </Grid>
    )
}
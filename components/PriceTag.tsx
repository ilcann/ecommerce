import { formatPrice } from "@/lib/format";
import { calculateDiscountedPrice } from "@/lib/calculate";
import { Box, Typography } from "@mui/material";
import { KeyboardArrowDown } from '@mui/icons-material';
interface PriceTagProps {
    price: number,
    discountPercentage: number,
    quantity: number,
}

export default function PriceTag({ price, discountPercentage, quantity}: PriceTagProps) {

    
    if (discountPercentage > 0) {
        const discountedPrice = calculateDiscountedPrice(price, discountPercentage);
        const subTotal = price * quantity;
        const total = discountedPrice * quantity;
        return (
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2" color="textSecondary"  sx={{ textDecoration: "line-through"}} >
                        {formatPrice(subTotal)}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold"}} >
                        {formatPrice(total)}
                    </Typography>
                </Box>
                <Typography variant="body2" color="error" sx={{display:"flex", alignItems:"center"}} >
                    <KeyboardArrowDown/>{discountPercentage}%
                </Typography>
            </Box>
        )
    } else {
        const total = price * quantity;
        return (
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" sx={{ fontWeight: "bold"}} >
                    {formatPrice(total)}
                </Typography>
            </Box>
        )
    }

}
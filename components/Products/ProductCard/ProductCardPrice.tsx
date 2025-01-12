import { IProduct } from "@/types";
import { CardContent, Typography, Box} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { formatPrice, currency } from "@/utils/price";

const ProductCardPrice: React.FC<{ product: IProduct }> = ({ product }) => {
    const { price, discountPercentage } = product;

    // If there is no discount or discountPercentage is less than 0
    if (discountPercentage <= 0) {
        return (
            <CardContent>
                <Typography variant="body1">{price} TL</Typography>
            </CardContent>
        );
    } else {
        // If there is a valid discount
        const discountedPrice = (price - (price * discountPercentage) / 100);

        return (
            <Box display="flex" alignItems="center" justifyContent="space-between" pb={2}>
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2" color="textSecondary"  sx={{ textDecoration: "line-through"}} >
                        {formatPrice(price)} {currency}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold"}} >
                        {formatPrice(discountedPrice)} {currency}
                    </Typography>
                </Box>
                <Typography variant="body2" color="error" sx={{display:"flex", alignItems:"center"}} >
                    <KeyboardArrowDownIcon/>{discountPercentage}%
                </Typography>
            </Box>
        );
    }
};

export default ProductCardPrice;
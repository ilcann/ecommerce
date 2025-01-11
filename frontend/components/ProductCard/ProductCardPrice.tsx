import { IProduct } from "@/types";
import { CardContent, Typography, Box} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const ProductCardPrice: React.FC<{ product: IProduct }> = ({ product }) => {
    const { price, discountPercentage } = product;

    const formatPrice = (amount: number) => amount.toFixed(2);
    
    // If there is no discount or discountPercentage is less than 0
    if (discountPercentage < 0) {
        return (
            <CardContent>
                <Typography variant="body1">{price} TL</Typography>
            </CardContent>
        );
    } else {
        // If there is a valid discount
        const discountedPrice = (price - (price * discountPercentage) / 100);

        return (
            <Box display="flex" alignItems="center" pb={2}>
                {/* Discount Percentage */}
                {discountPercentage >= 0 && (
                    <Typography variant="body2" color="error" sx={{display:"flex", alignItems:"center", pr:1}} >
                        <KeyboardArrowDownIcon/>{discountPercentage}%
                    </Typography>
                )}

                {/* Price and Discounted Price */}
                <Box display="flex" alignItems="center">
                    {discountPercentage >= 0 && (
                        <Typography variant="body2" color="textSecondary"  sx={{ textDecoration: "line-through", pr: 2}} >
                            {formatPrice(price)} TL
                        </Typography>
                    )}
                    <Typography variant="h6" sx={{ fontWeight: "bold"}} >
                        {formatPrice(discountedPrice)} TL
                    </Typography>
                </Box>
            </Box>
        );
    }
};

export default ProductCardPrice;
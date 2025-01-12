import { ICartItem } from "@/types";
import { Typography, Box} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { formatPrice, currency} from '@/utils/price';

const CartItemCardPrice: React.FC<{ cartItem:ICartItem}> = ({ cartItem }) => {
    const { product, quantity } = cartItem;
    const { price, discountPercentage } = product;
    const totalPrice = price * quantity;

    // If there is no discount or discountPercentage is less than 0
    if (discountPercentage <= 0) {
        return (
            <Box>
                <Typography variant="body1">{totalPrice} TL</Typography>
            </Box>
        );
    } else {
        // If there is a valid discount
        const discountedPrice = (price - (price * discountPercentage) / 100);
        const totalDiscountedPrice = discountedPrice * quantity;
        return (
            <Box display={'flex'} flexDirection={{sm:'row', md:'column'}} alignItems={'center'} gap={{xs:1, sm:1, md:0}}>
                <Typography variant="body2" color="error" sx={{display:"flex", alignItems:"center", justifyContent: 'center'}}>
                    <KeyboardArrowDownIcon/>{discountPercentage}%
                </Typography>
                <Typography variant="body2" color="textSecondary"  sx={{ textDecoration: "line-through"}} >
                    {formatPrice(totalPrice)} {currency}
                </Typography>                
                <Typography variant="h6" sx={{ fontWeight: "bold"}} >
                    {formatPrice(totalDiscountedPrice)} {currency}
                </Typography>
            </Box>
        );
    }
};

export default CartItemCardPrice;
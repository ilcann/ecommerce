import { Box, IconButton, Typography} from "@mui/material";
import { Add, Remove } from '@mui/icons-material';
import { CartItem } from "../../../types/types";
import { useCart } from "../../../context/CartContext";

const CartItemQuantity : React.FC<{item: CartItem}> = ({item}) => {
    const {addToCart, reduce} = useCart();
    return(
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <IconButton onClick={() => reduce(item.product)}>
                <Remove />
            </IconButton>
            <Typography variant="body1" sx={{ marginX: 2 }}>
            {item.quantity}
            </Typography>
            <IconButton onClick={() => addToCart(item.product)}>
                <Add />
            </IconButton>
        </Box>
    )
}

export default CartItemQuantity;
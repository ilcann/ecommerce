'use client'

import { IconButton, Typography, Box } from '@mui/material';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { ICartItem } from '@/types';
import { useCart } from '@/context/CartContext';

const CartItemCardQuantity: React.FC<{ cartItem:ICartItem}> = ({ cartItem }) => {
    const { quantity } = cartItem;
    const { increaseQuantity, decreaseQuantity } = useCart();
    
    return (
        <Box display={'flex'} flexDirection={{sm:'row', md:"column"}} alignItems={'center'}>
            <Typography pr={{xs:1, sm:1, md:0}}>Adet</Typography>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                <IconButton onClick={() => decreaseQuantity(cartItem)}>
                    <Remove />
                </IconButton>
                <Typography variant="body1">{quantity}</Typography>
                <IconButton onClick={() => increaseQuantity(cartItem)}>
                    <Add />
                </IconButton>
            </Box>
        </Box>
    );
};

export default CartItemCardQuantity;

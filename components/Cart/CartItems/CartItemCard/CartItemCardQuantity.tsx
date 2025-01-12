import { IconButton, Typography, Box } from '@mui/material';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { ICartItem } from '@/types';

const CartItemCardQuantity: React.FC<{ cartItem:ICartItem}> = ({ cartItem }) => {
    const { quantity } = cartItem;
    return (
        <Box display={'flex'} flexDirection={{sm:'row', md:"column"}} alignItems={'center'}>
            <Typography pr={{xs:1, sm:1, md:0}}>Adet</Typography>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                <IconButton>
                    <Remove />
                </IconButton>
                <Typography variant="body1">{quantity}</Typography>
                <IconButton>
                    <Add />
                </IconButton>
            </Box>
        </Box>
    );
};

export default CartItemCardQuantity;

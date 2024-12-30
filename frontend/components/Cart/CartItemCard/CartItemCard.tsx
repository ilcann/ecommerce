import { Grid2 as Grid, Card, IconButton} from "@mui/material";
import { CartItem } from "../../../types/types";
import { Delete } from '@mui/icons-material';
import {CartItemQuantity, CartItemPrice, CartItemInfo, CartItemImg} from ".";
import { useCart } from "../../../context/CartContext";

const CartItemCard: React.FC<{item: CartItem}> = ({item}) => {
    const {removeCart} = useCart();
    return ( 
        <Card sx={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <Grid container direction={'row'} sx={{padding:2}} spacing={4} alignItems={'center'}>
                <Grid size = {{xs:5, sm:4, md:3}}>
                    <CartItemImg item={item}/>
                </Grid>
                <Grid container size = {{xs:5, sm:7, md:8}} direction={{ sm: 'column', md: 'row' }} spacing={2}>
                    <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                        <CartItemInfo item={item}/>
                    </Grid>
                    <Grid container size={{xs:12, sm:12, md:4, lg:4}} justifyContent={{sm: 'flex-start', md:'center'}}>
                        <CartItemQuantity item={item}/>
                    </Grid>
                    <Grid container size={{xs:12, sm:12, md:4, lg:4}} justifyContent={{sm: 'flex-start', md:'flex-end'}}>
                        <CartItemPrice item={item}/>
                    </Grid>
                </Grid>
                <Grid container size={{xs:2, sm:1, md:1}} justifyContent={'flex-end'}   alignItems='flex-end' sx={{height:'100%'}}>
                    <IconButton onClick={() => removeCart(item.product)}>
                        <Delete />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    )
};

export default CartItemCard;
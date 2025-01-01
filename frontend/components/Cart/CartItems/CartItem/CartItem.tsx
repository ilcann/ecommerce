import { CartItemPrice, CartItemRemove, CartItemQuantity} from ".";
import { ICart, ICartItem } from "@/types";
import { Grid2 as Grid, Card, CardMedia, Typography} from "@mui/material";

interface ICartItemProps {
    item: ICartItem;
    cart: ICart;
}

const CartItem: React.FC<ICartItemProps> = ({ item, cart }) => {
    return ( 
        <Card sx={{ boxShadow: 'rgba(15, 15, 22, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <Grid container direction={'row'} sx={{padding:2}} spacing={4} alignItems={'center'}>
                <Grid size = {{xs:5, sm:4, md:3}}>
                    <CardMedia component="img" image={item.product.thumbnail} />
                </Grid>
                <Grid container size = {{xs:5, sm:7, md:8}} direction={{ sm: 'column', md: 'row' }} spacing={2}>
                    <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                        <Typography variant="h6">{item.product.brand}</Typography>
                        <Typography variant="h6">{item.product.name}</Typography>
                    </Grid>
                    <Grid container size={{xs:12, sm:12, md:4, lg:4}} justifyContent={{sm: 'flex-start', md:'center'}}>
                        <CartItemQuantity cart={cart} item={item}/>
                    </Grid>
                    <Grid container size={{xs:12, sm:12, md:4, lg:4}} justifyContent={{sm: 'flex-start', md:'flex-end'}}>
                        <CartItemPrice item={item}/>
                    </Grid>
                </Grid>
                <Grid container size={{xs:2, sm:1, md:1}} justifyContent={'flex-end'}   alignItems='flex-end' sx={{height:'100%'}}>
                    <CartItemRemove cart={cart} item={item}/>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CartItem;
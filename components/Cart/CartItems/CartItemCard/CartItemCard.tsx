import { Card, CardMedia, Grid2 as Grid, Typography } from "@mui/material";
import { ICartItem } from "@/types";
import { CartItemCardPrice, CartItemCardQuantity } from ".";

interface CartItemsProps {
    item:ICartItem
    onQuantityChange: (cartItem: ICartItem, action: 'increase' | 'decrease') => void;
}

const CartItemCard = ({ item, onQuantityChange }: CartItemsProps) => {
    return (
        <Card key={item.product.id} sx={{ boxShadow: 'none', borderRadius: 0 }}>
            <Grid container sx={{alignItems:'center'}}>
                <Grid size={3}>
                    <CardMedia component="img" src={item.product.thumbnail}/>
                </Grid>
                <Grid size={3} p={2}>
                    <Typography variant="h6" fontWeight={"bold"}>{item.product.brand}</Typography>
                    <Typography variant="body1">{item.product.title}</Typography>
                </Grid>
                <Grid size={{xs: 12, sm:12, md:5}} p={2}>
                    <Grid container direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={{md:1}}>
                        <CartItemCardQuantity cartItem={item} onQuantityChange={onQuantityChange}/>
                        <CartItemCardPrice cartItem={item}/>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

export default CartItemCard;
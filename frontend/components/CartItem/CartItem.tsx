"use client"
import { ICartItem } from "@/types/ICartItem"
import { Box, Card, CardMedia, Grid2 as Grid, IconButton, Typography} from "@mui/material"
import CartItemPrice from "./CartItemPrice"
import { Add, Delete, Remove } from "@mui/icons-material";
import { useState } from "react";
import { increaseQuantity, decreaseQuantity, removeItem } from "@/utils/cartActions";

const CartItem: React.FC<{ cartItem: ICartItem }> = ({ cartItem }) => {
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const handleDecrease = async () => {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        decreaseQuantity(cartItem, newQuantity);
    }
    const handleAdd = async () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        increaseQuantity(cartItem);
    }
    const handleRemove = async () => {
        const newQuantity = 0;
        setQuantity(newQuantity)
        removeItem(cartItem, newQuantity);
    }

    return ( 
        <Card sx={{ boxShadow: 'rgba(15, 15, 22, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
            <Grid container direction={'row'} sx={{padding:2}} spacing={4} alignItems={'center'}>
                <Grid size = {{xs:5, sm:4, md:3}}>
                    <CardMedia component="img" image={cartItem.product.thumbnail} />
                </Grid>
                <Grid container size = {{xs:5, sm:7, md:8}} direction={{ sm: 'column', md: 'row' }} spacing={2}>
                    <Grid size={{xs:12, sm:12, md:4, lg:4}}>
                        <Typography variant="h6">{cartItem.product.brand}</Typography>
                        <Typography variant="h6">{cartItem.product.name}</Typography>
                    </Grid>
                    <Grid container size={{xs:12, sm:12, md:4, lg:4}} justifyContent={{sm: 'flex-start', md:'center'}}>
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <IconButton onClick={handleDecrease}>
                                <Remove />
                            </IconButton>
                            <Typography variant="body1" sx={{ marginX: 2 }}>
                            {quantity}
                            </Typography>
                            <IconButton onClick={handleAdd}>
                                <Add />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid container size={{xs:12, sm:12, md:4, lg:4}} justifyContent={{sm: 'flex-start', md:'flex-end'}}>
                        <CartItemPrice product={cartItem.product} quantity={quantity}/>
                    </Grid>
                </Grid>
                <Grid container size={{xs:2, sm:1, md:1}} justifyContent={'flex-end'}   alignItems='flex-end' sx={{height:'100%'}}>
                    <IconButton onClick={handleRemove}>
                        <Delete />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CartItem;
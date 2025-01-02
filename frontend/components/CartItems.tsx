import { fetchCartById } from "@/services/cartService";
import { Grid2 as Grid, Typography } from "@mui/material";
import CartItem from "./CartItem/CartItem";

const CartItems = async () => {
    const cart = await fetchCartById(123);
    
    if (cart.items.length === 0) { // Check if cart is empty
        return (
            <Grid container spacing={1}>
                <Grid size= {{ xs: 12, sm: 12, md: 12, lg: 12}}>
                    <Typography variant="h6" pl={2}>
                        Sepetiniz Boş
                    </Typography>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container spacing={1}>
                {cart.items.map((item) => (
                    <Grid key={item.product.id} size={{ xs: 12, sm: 12, md: 12, lg: 12}}>
                        <CartItem cartItem={item}/>
                    </Grid>   
                ))}
            </Grid>
        )
    }
}

export default CartItems;
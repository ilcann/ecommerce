import { fetchCart } from "@/lib/db/cartService";
import { Container, Grid2 as Grid, Typography } from "@mui/material";
import CartEntry from "./CartEntry";
import CartSummary from "./CartSummary";
import { increaseQuantity, descreaseQuantity } from "./actions";
import { calculateCart } from "@/lib/calculate";

export default async function CartPage() {
    const cart = await fetchCart();

    const { subTotal, totalDiscount, total } = calculateCart(cart.items);

    return (
        <Container disableGutters  maxWidth='xl' sx={{p:2}} >
            <Typography variant="h5" fontWeight='bold'>Sepet</Typography>
            <Grid container spacing={2} pt={2}>
                <Grid size={{xs:12, sm:12, md:8}}>
                    <Grid container>
                        {cart.items.map((cartItem) => (
                            <Grid size={12} key={cartItem.id}>
                                <CartEntry 
                                 cartItem={cartItem} 
                                 increaseQuantity={increaseQuantity}
                                 decreaseQuantity={descreaseQuantity}
                                />
                            </Grid>
                        ))}
                    </Grid> 
                </Grid>
                <Grid size={{xs:12, sm:12, md:4}}>
                    <CartSummary subTotal={subTotal} totalDiscount={totalDiscount} total={total}/>
                </Grid>
            </Grid>
        </Container>
    )
}
'use client'

import { Container, Grid2 as Grid } from "@mui/material";
import { CartItems, CartSummary } from "@/components/Cart";
import { useUI } from "@/context";

const Cart = () => {
    const { setShowCart } = useUI();
    setShowCart(true);
    return (
        <Container disableGutters>
            <Grid container p={2} spacing={2}>
                <Grid size={{xs:12, sm:12, md:8}}>
                    <CartItems/>
                </Grid>
                <Grid size={{xs:12, sm:12, md:4}}>
                    <CartSummary/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart;
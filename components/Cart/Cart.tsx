import { ICart } from "@/types";
import { CartItems, CartSummary } from "@/components/Cart";
import { Container, Grid2 as Grid } from "@mui/material";

const Cart = ({ cart }: { cart: ICart }) => {
    const { total, totalDiscount, totalPrice } = cart;

    return (
        <Container disableGutters>
            <Grid container p={2} spacing={2}>
                <Grid size={{xs:12, sm:12, md:8}}>
                    <CartItems cart={cart}/>
                </Grid>
                <Grid size={{xs:12, sm:12, md:4}}>
                    <CartSummary totalPrice={totalPrice} totalDiscount={totalDiscount} total={total}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart;
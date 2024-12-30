import { CartItem } from "../../../types/types";
import { Typography } from "@mui/material";

const CartItemPrice: React.FC<{item: CartItem}> = ({item}) => {
    const hasDiscount = item.product.discount > 0;

    return (
        <div>
            {hasDiscount ? (
            <>
                <Typography variant="h6" style={{ textDecoration: 'line-through' }}>
                {(item.product.price * item.quantity).toFixed(2)} ₺
                </Typography>
                <Typography variant="h6" color="error">
                {(item.product.discountedPrice * item.quantity).toFixed(2)} ₺
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                İndirim: %{item.product.discount}
                </Typography>
            </>
            ) : (
            <Typography variant="h5">{(item.product.price * item.quantity).toFixed(2)} ₺</Typography>
            )}
        </div>
    );
}

export default CartItemPrice;
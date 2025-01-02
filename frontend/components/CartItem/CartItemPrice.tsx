import React from "react";
import { IProduct } from "@/types";
import { Box, Typography } from "@mui/material";


const CartItemPrice: React.FC<{ product: IProduct; quantity: number }> = ({ product, quantity }) => {
    const { price, discountPercentage} = product;
    const discountedPrice = price * (1 - discountPercentage / 100);

    if (discountPercentage > 0) {
        return (
            <Box>
                <Typography variant="h6" style={{ textDecoration: 'line-through' }}>
                    {(price * quantity).toFixed(2)} ₺
                </Typography>
                <Typography variant="h6" color="error">
                    {(discountedPrice * quantity).toFixed(2)} ₺
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    İndirim: %{discountPercentage}
                </Typography>
            </Box>
        )
    } else {
        return (
            <Box>
                <Typography variant="h5">{(price * quantity).toFixed(2)} ₺</Typography>
            </Box>
        );
    }
}

export default CartItemPrice;
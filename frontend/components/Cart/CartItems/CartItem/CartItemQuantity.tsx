'use client';
import React from "react";
import { ICartItem, ICart } from "@/types";
import { Box, IconButton, Typography } from "@mui/material";
import { Remove, Add } from "@mui/icons-material";
import { handleDecreaseQuantity, handleIncreaseQuantity } from "@/utils/cartActions";

interface ICartItemQuantityProps {
    item: ICartItem;
    cart: ICart;
}

const CartItemQuantity: React.FC<ICartItemQuantityProps> = ({item, cart}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <IconButton onClick={() => handleDecreaseQuantity(cart, item)}>
                <Remove />
            </IconButton>
            <Typography variant="body1" sx={{ marginX: 2 }}>
            {item.quantity}
            </Typography>
            <IconButton onClick={() => handleIncreaseQuantity(cart, item)}>
                <Add />
            </IconButton>
        </Box>
    )
}

export default CartItemQuantity;
'use client';
import { ICart, ICartItem } from "@/types";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { handleRemoveItem } from "@/utils/cartActions";

interface ICartItemRemoveProps {
    item: ICartItem;
    cart: ICart;
}

const CartItemRemove: React.FC<ICartItemRemoveProps> = ({ item, cart }) => {
    return (
        <IconButton onClick={() => handleRemoveItem(cart, item)}>
            <Delete />
        </IconButton>
    );
}

export default CartItemRemove;
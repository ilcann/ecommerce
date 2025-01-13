import { IconButton } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

interface ShoppingCartButtonProps {
    isCartPage: boolean;
}

export default function ShoppingCartButton({ isCartPage }: ShoppingCartButtonProps) {
    return (
        <IconButton 
            size="medium"
            sx={{ color: isCartPage ? 'black' : 'lightgray' }}>
            <ShoppingCartOutlined fontSize="medium" />
        </IconButton>
    )
}
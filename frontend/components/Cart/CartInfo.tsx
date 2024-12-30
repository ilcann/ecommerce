import React from 'react';
import { Cart } from '../../types/types';
import { Box, Typography } from '@mui/material';

const CartInfo : React.FC<{cart: Cart}> = ({ cart }) => {
    return (
        <Box 
            display="flex" 
            flexDirection="row" 
            alignItems="end" 
            gap={1.5}
        >
            <Typography variant="h4" fontWeight={600}>
                Sepetim
            </Typography>
            <Typography variant="h6">
                {cart.items.length} Ürün
            </Typography>
        </Box>
    );
};

export default CartInfo;
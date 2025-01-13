'use client';

import { Box, Button, CircularProgress } from "@mui/material";
import { useState, useTransition } from "react";

interface AddToCartButtonProps {
    productId: number;
    incrementProductQuantity: (productId: number) => Promise<void>;
}

const buttonStyle = {
    width: '100%',
    color: 'black',
    borderColor: 'black',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
};

export default function AddToCartButton({ productId, incrementProductQuantity }: AddToCartButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Button
                variant="outlined"
                color="primary"
                sx={buttonStyle}
                onClick={() => {
                    setSuccess(false);
                    startTransition(async () => {
                        await incrementProductQuantity(productId);
                        setSuccess(true);
                    });
                }}
                disabled={isPending} // Disable button while loading
            >
                {isPending ? (
                    <CircularProgress size={20} sx={{ color: 'inherit' }} />
                ) : success ? (
                    'Sepete Ekle'
                ) : (
                    'Sepete Ekle'
                )}
            </Button>
        </Box>
    );
}

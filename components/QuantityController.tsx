'use client'

import { Box, CircularProgress, IconButton, Typography } from "@mui/material"
import { Remove, Add } from "@mui/icons-material"
import { useState, useTransition } from "react"

interface QuantityControllerProps {
    productId: number,
    quantity: number,
    increaseQuantity: (productId: number) => Promise<void>,
    decreaseQuantity: (productId: number) => Promise<void>,
}

export default function QuantityController({ quantity, productId, increaseQuantity, decreaseQuantity }: QuantityControllerProps) {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    return (
        <Box display={'flex'} flexDirection={{sm:'row', md:"column"}} alignItems={'center'}>
            <Typography pr={{xs:1, sm:1, md:0}}>Adet</Typography>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                <IconButton 
                    onClick={() => {
                    setSuccess(false);
                    startTransition(async () => {
                        await decreaseQuantity(productId);
                        setSuccess(true);
                    })}
                    }
                >
                    {isPending ? (
                        <CircularProgress size={20} sx={{ color: 'inherit' }} />
                    ) : success ? (
                        <Remove/>
                    ) : (
                        <Remove/>
                    )}
                </IconButton>
                <Typography variant="body1">{quantity}</Typography>
                <IconButton
                    onClick={() => {
                        setSuccess(false);
                        startTransition(async () => {
                            await increaseQuantity(productId);
                            setSuccess(true);
                        })
                    }}
                >                
                    {isPending ? (
                        <CircularProgress size={20} sx={{ color: 'inherit' }} />
                    ) : success ? (
                        <Add/>
                    ) : (
                        <Add/>
                    )}
                </IconButton>
            </Box>
        </Box>
    );
}
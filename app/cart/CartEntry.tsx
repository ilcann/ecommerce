'use client';

import { PriceTag, QuantityController } from "@/components";
import { ICartItem } from "@/types";
import { Card, CardMedia, IconButton, Grid2 as Grid, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

interface CartEntryProps {
    cartItem: ICartItem,
    updateCartQuantity: (productId: number, action: 'increase' | 'decrease' | 'remove') => Promise<void>,
}

export default function CartEntry({ cartItem, updateCartQuantity }: CartEntryProps) {
    const { product, quantity } = cartItem;

    return (
        <Card>
            <Grid container>
                <Grid size={11}>
                    <Grid container>
                        <Grid size={3} alignContent={'center'}>
                            <CardMedia component="img" src={product.thumbnail} />
                        </Grid>
                        <Grid size={3} p={2} alignContent={'center'}>
                            <Typography variant="h6" fontWeight={"bold"}>{product.brand}</Typography>
                            <Typography variant="body1">{product.title}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6 }} p={2} alignContent={'center'}>
                            <Grid container direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={{ md: 1 }}>
                                <QuantityController 
                                    productId={product.id} 
                                    quantity={quantity} 
                                    increaseQuantity={() => updateCartQuantity(product.id, 'increase')} 
                                    decreaseQuantity={() => updateCartQuantity(product.id, 'decrease')} 
                                />
                                <PriceTag price={product.price} discountPercentage={product.discountPercentage} quantity={quantity} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={1} alignContent={'center'}>
                    <IconButton onClick={() => updateCartQuantity(product.id, 'remove')}><ClearIcon /></IconButton>
                </Grid>
            </Grid>
        </Card>
    )
}
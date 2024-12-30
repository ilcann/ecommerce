import React from 'react';
import { Card, Grid2 as Grid, Button, Rating } from '@mui/material';
import { Product } from '../../../types/types';
import {ProductImg, ProductPrice, ProductInfo} from '.';
import { useCart } from '../../../context/CartContext';



const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
      <Grid container direction={'column'} sx={{ padding: 2 }} spacing={1.5}>
        <Grid size={12}>
          <ProductImg product={product} />
        </Grid>
        <Grid size={12}>
          <ProductInfo product={product} />
        </Grid>
        <Grid>
          <Rating name="read-only" value={product.rating || 0} readOnly />
        </Grid>
        <Grid size={12}>
          <ProductPrice product={product} />
        </Grid>
        <Grid size={12}>
          <Button variant="outlined" color="inherit" onClick={() => addToCart(product)}>Sepete Ekle</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCard;

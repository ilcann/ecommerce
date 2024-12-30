import React from 'react';
import { Typography } from '@mui/material';
import { Product } from '../../../types/types';

const ProductPrice: React.FC<{ product: Product }> = ({ product }) => {
  const hasDiscount = product.discount > 0;

  return (
    <div>
      {hasDiscount ? (
        <>
          <Typography variant="h6" style={{ textDecoration: 'line-through' }}>
            {product.price} ₺
          </Typography>
          <Typography variant="h6" color="error">
            {product.discountedPrice} ₺
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            İndirim: %{product.discount}
          </Typography>
        </>
      ) : (
        <Typography variant="h5">{product.price} ₺</Typography>
      )}
    </div>
  );
};

export default ProductPrice;

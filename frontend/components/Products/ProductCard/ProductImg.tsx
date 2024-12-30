import React from 'react';
import { CardMedia } from '@mui/material';
import { Product } from '../../../types/types';

const ProductImg: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <CardMedia
      component="img"
      image={product.imageUrl}
      alt={`${product.brand} ${product.name}`}
    />
  );
};

export default ProductImg;

import React from 'react';
import { Typography } from '@mui/material';
import { Product } from '../../../types/types';

const ProductInfo: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <Typography variant="h5">{product.brand}</Typography>
      <Typography variant="h6">{product.name}</Typography>
    </>
  );
};

export default ProductInfo;
'use client'

import React, { createContext, useContext, ReactNode } from 'react';
import { Product } from '../types/types';
import products from '../pages/api/products';

interface ProductContextType {
  products: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const allProducts = products;

  return (
    <ProductContext.Provider value={{ products: allProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
'use client'

import React, { createContext, useContext } from "react";
import { IProduct } from "@/types";

// Context Tipi
interface ProductsContextType {
    products: IProduct[] | [];
}

// Context ve Başlangıç Değeri
const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

// Sağlayıcı (Provider) Bileşeni
export const ProductsProvider: React.FC<{ children: React.ReactNode; products: IProduct[] }> = ({ children, products,}) => {
    return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

// Kullanım için Hook
export const useProducts = (): ProductsContextType => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context;
};
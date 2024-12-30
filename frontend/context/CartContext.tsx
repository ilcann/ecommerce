'use client'

import React, { createContext, useState, useContext, useEffect } from 'react';
import carts from '../pages/api/carts';
import { Cart, Product } from '../types/types';

type CartContextType = {
    cart: Cart;
    addToCart: (product: Product) => void;
    removeCart: (product: Product) => void;
    reduce: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Cart>(carts[0]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
        setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
        const existingProduct = prevCart.items.find(item => item.product.id === product.id);

        if (existingProduct) {
            return {
            ...prevCart,
            items: prevCart.items.map(item =>
                item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            };
        } else {
            return {
            ...prevCart,
            items: [...prevCart.items, { product, quantity: 1 }],
            };
        }
        });
    };
    const removeCart = (product: Product) => {
        setCart((prevCart) => {
            return {
                ...prevCart,
                items: prevCart.items.filter(item => item.product.id !== product.id),
            };
        });
    };
    const reduce = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.items.find(item => item.product.id === product.id);
    
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    return {
                        ...prevCart,
                        items: prevCart.items.map(item =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        ),
                    };
                } else {
                    return {
                        ...prevCart,
                        items: prevCart.items.filter(item => item.product.id !== product.id),
                    };
                }
            }
            return prevCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeCart, reduce }}>
          {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
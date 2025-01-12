'use client'

import React, { createContext, useContext, useState } from 'react';
import { ICart, ICartItem } from '@/types';

interface CartContextType {
  cart: ICart;
  increaseQuantity: (cartItem: ICartItem) => void;
  decreaseQuantity: (cartItem: ICartItem) => void;
}

interface CartProviderProps {
  initialCart: ICart;  // Accept initial cart as a prop
  children: React.ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ initialCart, children }) => {
    const [cart, setCart] = useState<ICart>(initialCart); // Set initial cart state from the prop

    const increaseQuantity = (cartItem: ICartItem) => {
        setCart(prevCart => {
            const updatedItems = prevCart.items.map(item =>
                item.product.id === cartItem.product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            
            // Recalculate totals after removing the item or decreasing quantity
            const totalPrice = updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity || 0), 0);
            const totalDiscount = updatedItems.reduce((sum, item) => sum + ((item.product.price * (item.product.discountPercentage / 100) * item.quantity) || 0), 0);
            const total = totalPrice - totalDiscount; // Final total after discount
            // update remote

            return { ...prevCart, items: updatedItems, totalPrice, totalDiscount, total }; // Set new cart state with updated totals
        });
    };
    const decreaseQuantity = (cartItem: ICartItem) => {
        setCart(prevCart => {
            const updatedItems = prevCart.items.map(item =>
                item.product.id === cartItem.product.id
                    ? item.quantity > 0 
                        ? { ...item, quantity: item.quantity - 1 } 
                        : { ...item, quantity: 0 }
                    : item
            ).filter(item => item.quantity !== 0);

            // Recalculate totals after removing the item or decreasing quantity
            const totalPrice = updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity || 0), 0);
            const totalDiscount = updatedItems.reduce((sum, item) => sum + ((item.product.price * (item.product.discountPercentage / 100) * item.quantity) || 0), 0);
            const total = totalPrice - totalDiscount; // Final total after discount

            return { ...prevCart, items: updatedItems, totalPrice, totalDiscount, total }; // Set new cart state with updated totals
        });
    };

    return (
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

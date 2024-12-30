'use client'

import React, { createContext, useState, useContext } from 'react';

interface UIContextType {
    showCart: boolean;
    toggleShowCart: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = () => {
    setShowCart(prevState => !prevState);
  };

  return (
    <UIContext.Provider value={{ showCart, toggleShowCart }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
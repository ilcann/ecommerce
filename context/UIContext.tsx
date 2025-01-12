'use client'

import React, { createContext, useState, useContext, ReactNode } from "react";

interface UIContextType {
  showCart: boolean;
  toggleShowCart: () => void;
  setShowCart: (value: boolean) => void;  // Accepts a boolean value to set the state
}

const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [showCart, setShowCartState] = useState<boolean>(false);

  const toggleShowCart = () => {
    setShowCartState((prev) => !prev);  // Toggle the cart visibility
  };

  // setShowCart is now updated to directly set the value of showCart
  const setShowCart = (value: boolean) => {
    setShowCartState(value);
  };

  return (
    <UIContext.Provider value={{ showCart, toggleShowCart, setShowCart }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};

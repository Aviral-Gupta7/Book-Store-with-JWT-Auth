 
import React, { createContext, useContext, useReducer, useMemo } from 'react';

const CartContext = createContext();
 
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

 
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        const newState = [...state];
        newState[existingIndex] = {
          ...newState[existingIndex],
          quantity: newState[existingIndex].quantity + 1
        };
        return newState;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (book) => {
    dispatch({ type: ADD_TO_CART, payload: book });
  };

  const removeFromCart = (bookId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: bookId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const cartItemsCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    cartItemsCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
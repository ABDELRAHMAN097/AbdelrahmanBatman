// CartContext.js
import React, { createContext, useContext, useState } from "react";

// 1. إنشاء الكونتكست
const CartContext = createContext();

// 2. إنشاء البروفايدر (اللي هيلف حوالين أجزاء المشروع)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. هنعمل هوك نستخدمه عشان نسهّل الوصول للداتا
export const useCart = () => useContext(CartContext);
export default CartProvider;

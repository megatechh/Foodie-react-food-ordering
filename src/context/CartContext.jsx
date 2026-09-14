import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("foodie-cart") || "[]"));

  useEffect(() => localStorage.setItem("foodie-cart", JSON.stringify(cart)), [cart]);

  const addToCart = (food, quantity = 1) => {
    setCart(prev => {
      const found = prev.find(item => item.id === food.id);
      if (found) return prev.map(item => item.id === food.id ? { ...item, quantity: item.quantity + quantity } : item);
      return [...prev, { ...food, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return removeFromCart(id);
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeFromCart = id => setCart(prev => prev.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const delivery = subtotal === 0 ? 0 : subtotal >= 499 ? 0 : 39;
  const total = subtotal + delivery;

  return <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, itemCount, subtotal, delivery, total }}>
    {children}
  </CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
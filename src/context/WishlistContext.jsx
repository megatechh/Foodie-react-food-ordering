import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("foodie-wishlist") || "[]"));
  useEffect(() => localStorage.setItem("foodie-wishlist", JSON.stringify(wishlist)), [wishlist]);

  const toggleWishlist = food => setWishlist(prev => prev.some(x => x.id === food.id) ? prev.filter(x => x.id !== food.id) : [...prev, food]);
  const isWishlisted = id => wishlist.some(x => x.id === id);

  return <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
    {children}
  </WishlistContext.Provider>;
}
export const useWishlist = () => useContext(WishlistContext);
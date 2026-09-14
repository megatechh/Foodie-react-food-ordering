import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, Heart, Sun, Moon, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  const links = [
    ["Home", "/"],
    ["Menu", "/menu"],
    ["Offers", "/offers"],
    ["About", "/about"]
  ];

  return <header className="navbar">
    <div className="container nav-inner">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">F</span>
        <span>foodie<span className="dot">.</span></span>
      </Link>

      <nav className={`nav-links ${open ? "show" : ""}`}>
        {links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({isActive}) => isActive ? "active" : ""}>{label}</NavLink>)}
      </nav>

      <div className="nav-actions">
        <Link to="/menu" className="icon-btn search-btn" aria-label="Search"><Search size={19}/></Link>
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>
        <Link to="/wishlist" className="icon-btn badge-wrap" aria-label="Wishlist"><Heart size={19}/>{wishlist.length > 0 && <span className="count">{wishlist.length}</span>}</Link>
        <Link to="/cart" className="cart-btn"><ShoppingBag size={19}/><span>Cart</span>{itemCount > 0 && <b>{itemCount}</b>}</Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>;
}
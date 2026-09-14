import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

export default function App(){
 const [dark,setDark]=useState(()=>localStorage.getItem("foodie-theme")==="dark");
 useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light";localStorage.setItem("foodie-theme",dark?"dark":"light")},[dark]);
 return <div className="app"><Navbar dark={dark} setDark={setDark}/><Routes><Route path="/" element={<Home/>}/><Route path="/menu" element={<Menu/>}/><Route path="/food/:id" element={<FoodDetails/>}/><Route path="/cart" element={<Cart/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="/wishlist" element={<Wishlist/>}/><Route path="/offers" element={<Offers/>}/><Route path="/about" element={<About/>}/><Route path="/orders" element={<Orders/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></div>;
}
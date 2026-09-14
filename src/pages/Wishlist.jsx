import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import FoodCard from "../components/FoodCard";

export default function Wishlist(){
 const {wishlist}=useWishlist();
 return <main className="page"><div className="container"><div className="page-heading compact"><span className="eyebrow">SAVED FOR LATER</span><h1>Your <em>wishlist.</em></h1><p>Keep your favourites close.</p></div>{wishlist.length?<div className="food-grid">{wishlist.map(f=><FoodCard key={f.id} food={f}/>)}</div>:<div className="empty-state"><span>♡</span><h2>Nothing saved yet</h2><p>Tap the heart on anything you love and it'll appear here.</p><Link to="/menu" className="primary-btn">Discover dishes <ArrowRight/></Link></div>}</div></main>;
}
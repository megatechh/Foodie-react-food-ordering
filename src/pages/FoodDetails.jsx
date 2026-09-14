import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Heart, Minus, Plus, Star, ShoppingBag } from "lucide-react";
import { foods } from "../data/foods";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import FoodCard from "../components/FoodCard";

export default function FoodDetails() {
  const { id } = useParams();
  const food = foods.find(f => f.id === Number(id));
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  if (!food) return <main className="page"><div className="empty-state"><h2>Food not found</h2><Link className="primary-btn" to="/menu">Back to menu</Link></div></main>;
  const related = foods.filter(f=>f.category===food.category && f.id!==food.id).slice(0,3);

  return <main className="page">
    <div className="container">
      <Link to="/menu" className="back-link"><ArrowLeft size={17}/> Back to menu</Link>
      <div className="detail-grid">
        <div className="detail-image"><img src={food.image} alt={food.name}/><button className={`wish-large ${isWishlisted(food.id)?"liked":""}`} onClick={()=>toggleWishlist(food)}><Heart fill={isWishlisted(food.id)?"currentColor":"none"}/></button></div>
        <div className="detail-copy"><div className="food-meta"><span className={food.veg?"veg":"nonveg"}>{food.veg?"VEGETARIAN":"NON-VEGETARIAN"}</span><span><Star size={15} fill="currentColor"/> {food.rating} ({food.reviews} reviews)</span></div>
          <h1>{food.name}</h1><p className="detail-description">{food.description}</p>
          <div className="detail-price"><strong>₹{food.price}</strong><del>₹{food.oldPrice}</del><span>20% OFF</span></div>
          <div className="detail-info"><span><Clock/> {food.time}</span><span>🔥 Popular choice</span></div>
          <div className="qty-row"><div className="qty"><button onClick={()=>setQty(Math.max(1,qty-1))}><Minus/></button><b>{qty}</b><button onClick={()=>setQty(qty+1)}><Plus/></button></div><button className="primary-btn add-wide" onClick={()=>addToCart(food,qty)}><ShoppingBag size={18}/> Add {qty} to cart</button></div>
          <div className="ingredients"><h3>What's inside</h3><div><span>🌿 Fresh herbs</span><span>🧀 Premium cheese</span><span>🥬 Farm greens</span><span>✨ Chef's special</span></div></div>
        </div>
      </div>
      <section className="section related"><div className="section-title"><div><span className="eyebrow">YOU MAY ALSO LIKE</span><h2>More delicious picks</h2></div></div><div className="food-grid">{related.map(f=><FoodCard key={f.id} food={f}/>)}</div></section>
    </div>
  </main>;
}
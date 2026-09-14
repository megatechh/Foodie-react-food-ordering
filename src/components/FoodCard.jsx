import { Link } from "react-router-dom";
import { Heart, Plus, Star, Clock } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  return <article className="food-card">
    <div className="food-img-wrap">
      <Link to={`/food/${food.id}`}><img src={food.image} alt={food.name}/></Link>
      <div className="food-tags">{food.tags.slice(0,1).map(t => <span key={t}>{t}</span>)}</div>
      <button className={`wish-btn ${isWishlisted(food.id) ? "liked" : ""}`} onClick={() => toggleWishlist(food)} aria-label="Wishlist"><Heart size={18} fill={isWishlisted(food.id) ? "currentColor" : "none"}/></button>
    </div>
    <div className="food-info">
      <div className="food-meta"><span className={food.veg ? "veg" : "nonveg"}>{food.veg ? "VEG" : "NON-VEG"}</span><span><Star size={14} fill="currentColor"/> {food.rating}</span><span><Clock size={14}/> {food.time}</span></div>
      <Link to={`/food/${food.id}`} className="food-title">{food.name}</Link>
      <p>{food.description}</p>
      <div className="food-bottom"><div><strong>₹{food.price}</strong><del>₹{food.oldPrice}</del></div><button className="add-btn" onClick={() => addToCart(food)}><Plus size={18}/> Add</button></div>
    </div>
  </article>;
}
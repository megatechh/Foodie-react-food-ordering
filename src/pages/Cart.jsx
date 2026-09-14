import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, Trash2, ShoppingBag, Tag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal, delivery, total } = useCart();
  if (!cart.length) return <main className="page"><div className="container"><div className="empty-state cart-empty"><span>🛍️</span><h1>Your cart is waiting.</h1><p>Add something delicious and we'll take it from there.</p><Link to="/menu" className="primary-btn">Explore menu <ArrowRight/></Link></div></div></main>;
  return <main className="page"><div className="container"><div className="page-heading compact"><span className="eyebrow">YOUR ORDER</span><h1>Your <em>cart.</em></h1></div>
    <div className="cart-layout"><div className="cart-items">{cart.map(item=><div className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-item-main"><div><span className={item.veg?"veg":"nonveg"}>{item.veg?"VEG":"NON-VEG"}</span><h3>{item.name}</h3><p>₹{item.price} each</p></div><button className="remove-btn" onClick={()=>removeFromCart(item.id)}><Trash2/></button><div className="cart-item-bottom"><div className="qty"><button onClick={()=>updateQuantity(item.id,item.quantity-1)}><Minus/></button><b>{item.quantity}</b><button onClick={()=>updateQuantity(item.id,item.quantity+1)}><Plus/></button></div><strong>₹{item.price*item.quantity}</strong></div></div></div>)}</div>
      <aside className="summary"><h2>Order summary</h2><div className="coupon"><Tag/><input placeholder="Coupon code"/><button>Apply</button></div><div className="sum-lines"><span>Subtotal <b>₹{subtotal}</b></span><span>Delivery <b>{delivery===0?"FREE":`₹${delivery}`}</b></span><span>Taxes <b>Included</b></span></div><div className="sum-total"><span>Total</span><strong>₹{total}</strong></div><Link to="/checkout" className="primary-btn checkout-btn">Proceed to checkout <ArrowRight/></Link><small className="free-note">{subtotal>=499?"🎉 You unlocked free delivery!":"Add ₹"+(499-subtotal)+" more for free delivery."}</small></aside>
    </div></div></main>;
}
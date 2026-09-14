import { Link } from "react-router-dom";
import { ArrowRight, Search, Star, Clock, ShieldCheck, Truck, ChefHat } from "lucide-react";
import { categories, foods } from "../data/foods";
import FoodCard from "../components/FoodCard";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  const popular = foods.filter(f => f.popular).slice(0, 6);
  return <>
    <main>
      <section className="hero">
        <div className="hero-shape"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">DELIVERED WITH LOVE <span>✦</span></span>
            <h1>Cravings,<br/><em>sorted.</em></h1>
            <p>From comforting classics to bold new bites, discover food that makes your day a little better.</p>
            <div className="hero-search"><Search size={20}/><input placeholder="Search for pizza, burger, biryani..." /><Link to="/menu">Search</Link></div>
            <div className="hero-stats"><span><strong>4.9/5</strong><small><Star size={13} fill="currentColor"/> customer rating</small></span><i></i><span><strong>30 min</strong><small><Clock size={13}/> average delivery</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-orb"></div>
            <div className="hero-card-main"><img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=90" alt="Fresh pizza"/></div>
            <div className="floating-card rating-card"><span className="avatar">★</span><div><b>4.9</b><small>Top rated</small></div></div>
            <div className="floating-card delivery-card"><span>⚡</span><div><b>Fast delivery</b><small>Hot & fresh at your door</small></div></div>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionTitle eyebrow="WHAT'S ON YOUR MIND?" title="Explore categories" text="Pick a mood, we'll handle the food." />
        <div className="category-grid">{categories.slice(1).map(c => <Link className="category-card" key={c.id} to={`/menu?category=${c.id}`}><span>{c.emoji}</span><b>{c.name}</b><small>Explore →</small></Link>)}</div>
      </section>

      <section className="container section">
        <SectionTitle eyebrow="FAN FAVOURITES" title="Popular right now" text="The dishes everyone is talking about." action={<Link className="text-link" to="/menu">View full menu <ArrowRight size={16}/></Link>}/>
        <div className="food-grid">{popular.map(food => <FoodCard key={food.id} food={food}/>)}</div>
      </section>

      <section className="container offer-banner">
        <div><span className="eyebrow">LIMITED TIME</span><h2>Get 50% off your<br/><em>first order.</em></h2><p>Use code <b>FIRSTBITE</b> at checkout. Minimum order ₹399.</p><Link to="/menu" className="primary-btn">Order now <ArrowRight size={18}/></Link></div>
        <div className="offer-art"><div>50<span>%</span></div><small>OFF</small></div>
      </section>

      <section className="section why-section">
        <div className="container">
          <SectionTitle eyebrow="WHY FOODIE?" title="More than just a meal." text="We obsess over the little things so your food arrives just right."/>
          <div className="perks"><div><span><Truck/></span><h3>Lightning fast</h3><p>Real-time delivery updates and a 30-minute average.</p></div><div><span><ChefHat/></span><h3>Made with care</h3><p>Curated dishes from kitchens we trust.</p></div><div><span><ShieldCheck/></span><h3>Safe & reliable</h3><p>Secure checkout and quality you can count on.</p></div></div>
        </div>
      </section>
    </main>
  </>;
}
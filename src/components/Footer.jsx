import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div>
        <Link to="/" className="brand footer-brand"><span className="brand-mark">F</span><span>foodie<span className="dot">.</span></span></Link>
        <p>Good food. Good mood. We bring your cravings to your doorstep, fresh and fast.</p>
        <div className="socials"><a href="#"><Instagram/></a><a href="#"><Facebook/></a><a href="#"><Twitter/></a></div>
      </div>
      <div><h4>Explore</h4><Link to="/menu">Our Menu</Link><Link to="/offers">Offers</Link><Link to="/wishlist">Wishlist</Link><Link to="/orders">Order History</Link></div>
      <div><h4>Company</h4><Link to="/about">About Us</Link><a href="#faq">FAQ</a><a href="#contact">Contact</a><a href="#careers">Careers</a></div>
      <div><h4>Get in touch</h4><span><MapPin/> Mumbai, India</span><span><Phone/> +91 98765 43210</span><span><Mail/> hello@foodie.demo</span></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 Foodie. All rights reserved.</span><span>Made for food lovers.</span></div>
  </footer>;
}
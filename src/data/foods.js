export const categories = [
  { id: "all", name: "All", emoji: "🍽️" },
  { id: "pizza", name: "Pizza", emoji: "🍕" },
  { id: "burger", name: "Burgers", emoji: "🍔" },
  { id: "indian", name: "Indian", emoji: "🍛" },
  { id: "asian", name: "Asian", emoji: "🍜" },
  { id: "dessert", name: "Desserts", emoji: "🍰" },
  { id: "drinks", name: "Drinks", emoji: "🥤" }
];

export const foods = [
  {
    id: 1, name: "Truffle Mushroom Pizza", category: "pizza", price: 349, oldPrice: 429,
    rating: 4.9, reviews: 128, time: "25-30 min", veg: true, popular: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
    description: "Creamy truffle sauce, roasted mushrooms, mozzarella and fresh herbs on a crisp artisan crust.",
    tags: ["Bestseller", "Chef's pick"]
  },
  {
    id: 2, name: "Smoky BBQ Chicken Burger", category: "burger", price: 289, oldPrice: 349,
    rating: 4.8, reviews: 214, time: "20-25 min", veg: false, popular: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    description: "Juicy grilled chicken, smoky BBQ glaze, cheddar, lettuce and crispy onions in a toasted brioche bun.",
    tags: ["Bestseller"]
  },
  {
    id: 3, name: "Paneer Tikka Bowl", category: "indian", price: 259, oldPrice: 299,
    rating: 4.7, reviews: 96, time: "20-25 min", veg: true, popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    description: "Tandoori paneer, fragrant rice, crunchy salad, mint chutney and a creamy yogurt dressing.",
    tags: ["High protein"]
  },
  {
    id: 4, name: "Creamy Butter Chicken", category: "indian", price: 329, oldPrice: 389,
    rating: 4.9, reviews: 173, time: "30-35 min", veg: false, popular: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
    description: "Tender chicken simmered in a rich tomato, butter and aromatic spice gravy.",
    tags: ["Bestseller", "Spicy"]
  },
  {
    id: 5, name: "Spicy Ramen", category: "asian", price: 299, oldPrice: 349,
    rating: 4.6, reviews: 87, time: "20-25 min", veg: true, popular: false,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
    description: "Silky noodles in a bold chili broth with corn, mushrooms, spring onion and sesame.",
    tags: ["Spicy"]
  },
  {
    id: 6, name: "Crispy Chicken Momos", category: "asian", price: 199, oldPrice: 239,
    rating: 4.8, reviews: 154, time: "15-20 min", veg: false, popular: true,
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=900&q=85",
    description: "Golden crispy dumplings filled with seasoned chicken, served with fiery red chutney.",
    tags: ["Bestseller"]
  },
  {
    id: 7, name: "Classic Margherita", category: "pizza", price: 249, oldPrice: 299,
    rating: 4.7, reviews: 111, time: "20-25 min", veg: true, popular: false,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
    description: "San Marzano tomato, fresh mozzarella, basil and extra virgin olive oil.",
    tags: ["Classic"]
  },
  {
    id: 8, name: "Chocolate Lava Cake", category: "dessert", price: 179, oldPrice: 219,
    rating: 4.9, reviews: 201, time: "15-20 min", veg: true, popular: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    description: "Warm chocolate cake with a molten dark-chocolate center and vanilla ice cream.",
    tags: ["Sweet", "Bestseller"]
  },
  {
    id: 9, name: "Mango Cheesecake", category: "dessert", price: 219, oldPrice: 259,
    rating: 4.8, reviews: 79, time: "10-15 min", veg: true, popular: false,
    image: "https://images.unsplash.com/photo-1547414368-ac947d00b91d?auto=format&fit=crop&w=900&q=85",
    description: "Silky mango cheesecake on a buttery biscuit base with fresh mango topping.",
    tags: ["Seasonal"]
  },
  {
    id: 10, name: "Cold Coffee", category: "drinks", price: 139, oldPrice: 169,
    rating: 4.6, reviews: 145, time: "10-15 min", veg: true, popular: false,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    description: "Chilled creamy coffee blended with milk and a hint of vanilla.",
    tags: ["Chilled"]
  },
  {
    id: 11, name: "Berry Smoothie", category: "drinks", price: 169, oldPrice: 199,
    rating: 4.7, reviews: 61, time: "10-15 min", veg: true, popular: false,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",
    description: "A refreshing blend of strawberries, blueberries, yogurt and honey.",
    tags: ["Fresh"]
  },
  {
    id: 12, name: "Double Cheese Burger", category: "burger", price: 319, oldPrice: 379,
    rating: 4.8, reviews: 189, time: "20-25 min", veg: true, popular: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    description: "Two smashed veg patties, double cheddar, pickles, lettuce and signature house sauce.",
    tags: ["Bestseller", "Cheesy"]
  }
];
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { categories, foods } from "../data/foods";
import FoodCard from "../components/FoodCard";

export default function Menu() {
  const [params] = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.get("category") || "all");
  const [veg, setVeg] = useState("all");
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let list = foods.filter(f => {
      const matchCat = category === "all" || f.category === category;
      const matchVeg = veg === "all" || (veg === "veg" ? f.veg : !f.veg);
      const matchQuery = `${f.name} ${f.description}`.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchVeg && matchQuery;
    });
    if (sort === "low") list.sort((a,b)=>a.price-b.price);
    if (sort === "high") list.sort((a,b)=>b.price-a.price);
    if (sort === "rating") list.sort((a,b)=>b.rating-a.rating);
    return list;
  }, [category, veg, sort, query]);

  return <main className="page">
    <div className="container">
      <div className="page-heading"><div><span className="eyebrow">THE MENU</span><h1>Find your next <em>favourite.</em></h1><p>Fresh flavours, honest ingredients and a little something for every mood.</p></div></div>
      <div className="menu-tools">
        <div className="big-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search dishes..."/>{query && <button onClick={()=>setQuery("")}><X/></button>}</div>
        <div className="select-wrap"><SlidersHorizontal size={17}/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="popular">Most popular</option><option value="rating">Top rated</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div>
      </div>
      <div className="filter-row">
        {categories.map(c=><button className={category===c.id?"selected":""} key={c.id} onClick={()=>setCategory(c.id)}>{c.emoji} {c.name}</button>)}
        <span className="filter-spacer"></span>
        <button className={veg==="veg"?"selected":""} onClick={()=>setVeg(veg==="veg"?"all":"veg")}>● Vegetarian</button>
        <button className={veg==="nonveg"?"selected":""} onClick={()=>setVeg(veg==="nonveg"?"all":"nonveg")}>● Non-veg</button>
      </div>
      <div className="results-row"><span>{filtered.length} delicious choices</span></div>
      {filtered.length ? <div className="food-grid menu-grid">{filtered.map(food=><FoodCard key={food.id} food={food}/>)}</div> : <div className="empty-state"><span>🍽️</span><h2>No dishes found</h2><p>Try another search or clear your filters.</p><button className="primary-btn" onClick={()=>{setQuery("");setCategory("all");setVeg("all")}}>Show all dishes</button></div>}
    </div>
  </main>;
}
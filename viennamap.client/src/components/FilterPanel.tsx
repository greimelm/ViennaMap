import type { Category } from "../App";

type Props = {
    category: Category;
    setCategory: (cat: Category) => void;
};

export default function FilterPanel({ category, setCategory }: Props) {
    return (
        <div>
            <button
                onClick={() => setCategory("all")}
                style={{ fontWeight: category === "all" ? "bold" : "normal" }}
            >All</button>
            <button 
                onClick={() => setCategory("cafe")}
                style={{ fontWeight: category === "cafe" ? "bold" : "normal" }}
            >Cafes</button>
            <button 
                onClick={() => setCategory("bar")}
                style={{ fontWeight: category === "bar" ? "bold" : "normal" }}
            >Bars</button>
            <button
                onClick={() => setCategory("restaurant")}
                style={{ fontWeight: category === "restaurant" ? "bold" : "normal" }}
            >Restaurants</button>
        </div>
    );
}

import type { Category } from "../App";
import places from "../data/places.json";

type Props = {
    category: Category;
    setCategory: (cat: Category) => void;
    onSelectedLocation: (coords: { lat: number; lng: number }) => void;
};

export default function FilterPanel({ category, setCategory, onSelectedLocation }: Props) {
    const filtered = category === "all" ? places : places.filter(p => p.category === category);
    // button => component
    return (
        <div className="sidebar">
            <h2>Ciy Explorer</h2>
            <h3>Filter</h3>
            <div className="categories">
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
            <ul>
                {filtered.map(place => (
                    <li
                        key={place.id}
                        onClick={() => onSelectedLocation({ lat: place.lat, lng: place.lng })}
                        style={{ cursor: "pointer", marginBottom: "8px" }}
                    >
                        {place.name}
                    </li>
                )) }
            </ul>
        </div>
    );
}

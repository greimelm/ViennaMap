import type { FeatureCollection } from '../types/types.ts';

type Props = {
    category: string;
    setCategory: (cat: string) => void;
    onSelectedLocation: (coords: { lat: number; lng: number }) => void;
    selectedPlaceId: number;
    onSelectPlace: (id: number) => void;
    places: FeatureCollection;
};

export default function FilterPanel({ category, setCategory, onSelectedLocation, selectedPlaceId, onSelectPlace, places }: Props) {
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
            <button
                onClick={() => setCategory("store")}
                style={{ fontWeight: category === "store" ? "bold" : "normal" }}
            >Stores</button>
            </div>
            <ul>
                {places.map(place => ( //for each?
                    <li
                        key={place.id}
                        onClick={() => {
                            onSelectedLocation({ lat: place.lat, lng: place.lng });
                            onSelectPlace(place.id);
                        }}
                        style={{
                            cursor: "pointer",
                            marginBottom: "8px",
                            background: selectedPlaceId === place.id ? "#ddd" : "transparent" 
                        }}
                    >
                        {place.name}
                    </li>
                )) }
            </ul>
        </div>
    );
}

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
    // console.log(places.features);
    if (!places || places.features.length === 0) {
        return <div className="sidebar">Keine Daten gefunden. Laden...</div>
    }

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
                {places.features.map((feature, index) => { // FeatureCollection = object, features is array in this object
                    const lat = feature.geometry.coordinates[1];
                    const lng = feature.geometry.coordinates[0];

                    return (
                        <li
                            key={index}
                            onClick={() => {
                                onSelectedLocation({ lat, lng });
                                onSelectPlace(index);
                            }}
                            style={{
                                cursor: "pointer",
                                marginBottom: "8px",
                                background: selectedPlaceId === index ? "#ddd" : "transparent"
                            }}
                        >
                            {feature.properties.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

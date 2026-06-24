import { useEffect, useState } from "react";
import { Marker, Popup, GeoJSON } from "react-leaflet";

export default function MarkerLayer({ category, onSelectPlace }) {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        fetch(`http://localhost:5137/api/places?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
            })
            .catch(err => console.error(err));
    }, []);

    const filtered = category === "all" ? places : places.filter(p => p.category === category);

    return (
        <>
            {filtered.map((place) => (
                <Marker
                    key={place.id}
                    position={[place.lat, place.lng]}
                    eventHandlers={{
                        click: () => onSelectPlace(place.id)
                    }}
                >
                    <Popup>
                        <strong>{place.name}</strong>
                        <p>{place.description}</p>
                    </Popup>
                </Marker>
            ))}
        </>
    );
}

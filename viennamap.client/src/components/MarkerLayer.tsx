import { Marker, Popup } from "react-leaflet";

export default function MarkerLayer({ category, onSelectPlace, places }) {

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

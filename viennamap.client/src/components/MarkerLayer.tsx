import { Marker, Popup } from "react-leaflet";
import places from "../data/places.json";

export default function MarkerLayer() {
    return (
        <>
            {places.map((place) => (
                <Marker key={place.id} position={[place.lat, place.lng]}>
                    <Popup>
                        <strong>{place.name}</strong>
                        <p>{place.description}</p>
                    </Popup>
                </Marker>
            ))}
        </>
    );
}

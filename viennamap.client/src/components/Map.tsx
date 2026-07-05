import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerLayer from "./MarkerLayer";
import MapController from "./MapController";

export default function Map({ category, selectedLocation, placeData, setPlaceData, onSelectPlace }) {
    return (
        <>
            <MapContainer center={[48.2082, 16.3738]} zoom={13} style={{ height: "100vh", width: "100vw" }}>
            <TileLayer
                attribution='&copy; OpenStreetMap'
                //{s} = subdomain, {x}{y} = coordinates, {z} = zoom
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <MarkerLayer
                    category={category}
                    placeData={placeData}
                    setPlaceData={setPlaceData}
                    onSelectPlace={onSelectPlace}
                />
                <MapController selectedLocation={selectedLocation} />
            </MapContainer>
        </>
    );
}

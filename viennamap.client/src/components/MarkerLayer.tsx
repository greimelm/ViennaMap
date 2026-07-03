import { useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import L from "leaflet";


export default function MarkerLayer({ category, placeData, setPlaceData }) {
    
    useEffect(() => {
        const url =
            category === "all" ?
                "http://localhost:5137/api/places" :
                `http://localhost:5137/api/places?category=${category}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPlaceData(data)
            })
            .catch(err => console.error(err));
    }, [category]);

    if (!placeData) return null;

    return (
        <GeoJSON
            data={placeData}
            filter={(feature) => {
                if (category === "all") return true;
                return feature.properties.category === category;
            }}
            onEachFeature={(feature, layer) => {
                const props = feature.properties;

                layer.bindPopup(
                    `<b>${props.name}</b><br/>
                    Kategorie: ${props.category}`
                )
            }}
            style={(feature) => {
                const cat = feature.properties.category;
                return {
                    color:
                        cat === "cafe" ? "blue" :
                            cat === "bar" ? "red" :
                                "green"
                };
            }}
            pointToLayer={(feature, latlng) => {
                return L.marker(latlng);
            } }
       />
    );
}

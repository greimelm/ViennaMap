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
    }, [category, setPlaceData]);

    if (!placeData) return null;
    console.log(placeData); // kommt hier 4-mal hin?
    return (
        <GeoJSON
            key={placeData?.features[0]?.properties?.category || placeData?.features?.length}
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
                const cat = feature.properties.category;

                const color =
                    cat === "cafe" ? "brown" :
                        cat === "bar" ? "red" :
                            cat === "restaurant" ? "orange" :
                                cat === "store" ? "green" :
                                    "blue";
                return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: color,
                    color: "#000",
                    weight: 1,
                    fillOpacity: 0.8
                });
            } }
       />
    );
}

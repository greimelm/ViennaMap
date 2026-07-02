import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import L from "leaflet";
import type { FeatureCollection } from '../types/types.ts';

export default function MarkerLayer({ category }) {
    const [data, setData] = useState<FeatureCollection | null>(null);
    useEffect(() => {
        fetch(`http://localhost:5137/api/places?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => console.error(err));
    }, []);

    if (!data) return null;

    return (
        <GeoJSON
            data={data}
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

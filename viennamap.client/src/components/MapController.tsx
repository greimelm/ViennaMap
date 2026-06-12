import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function MapController({ selectedLocation }) {
    const map = useMap();

    useEffect(() => {
        if (selectedLocation && selectedLocation.lat && selectedLocation.lng) {
            map.flyTo([selectedLocation.lat, selectedLocation.lng], 15);
        }
    }, [selectedLocation, map]);

    return null;
}

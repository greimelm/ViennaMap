import { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import type { Place } from './types/Place';

export type Category = "all" | "cafe" | "bar" | "restaurant";

type Coordinates = {
    lat: number;
    lng: number;
} | null;

function App() {
    const [category, setCategory] = useState<Category>("all");
    const [selectedLocation, setSelectedLocation] = useState<Coordinates>(null);
    const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);
    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5137/api/places?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
                setLoading(false)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Sidebar
                category={category}
                setCategory={setCategory}
                onSelectedLocation={setSelectedLocation}
                selectedPlaceId={selectedPlaceId}
            />
            <Map
                category={category}
                selectedLocation={selectedLocation}
                onSelectPlace={setSelectedPlaceId}
                places={places}
            />
        </>
    );

}

export default App;

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
    // const [places, setPlaces] = useState<Place[]>([]);
    // const [loading, setLoading] = useState(false);


    return (
        <>
            <Sidebar
                category={category}
                setCategory={setCategory}
                onSelectedLocation={setSelectedLocation}
                selectedPlaceId={selectedPlaceId}
                onSelectPlace={setSelectedPlaceId}
            />
            <Map
                category={category}
                selectedLocation={selectedLocation}
                onSelectPlace={setSelectedPlaceId}
                // places={places}
            />
        </>
    );

}

export default App;

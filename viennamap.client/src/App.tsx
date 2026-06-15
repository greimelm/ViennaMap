import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

export type Category = "all" | "cafe" | "bar" | "restaurant";

type Coordinates = {
    lat: number;
    lng: number;
} | null;

function App() {
    const [category, setCategory] = useState<Category>("all");
    const [selectedLocation, setSelectedLocation] = useState<Coordinates>(null);
    const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

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
            />
        </>
    );

}

export default App;

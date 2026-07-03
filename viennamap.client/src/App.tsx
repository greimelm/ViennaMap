import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import type { FeatureCollection } from './types/types.ts';

// TO DO: gather types?

type Coordinates = {
    lat: number;
    lng: number;
} | null;

function App() {
    const [category, setCategory] = useState<string>("all");
    const [selectedLocation, setSelectedLocation] = useState<Coordinates>(null);
    const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);
    const [data, setData] = useState<FeatureCollection | null>(null);

    // TO DO: Sidebar an backend anbinden (und types gathern) 
    return (
        <>
            <Sidebar
                category={category}
                setCategory={setCategory}
                onSelectedLocation={setSelectedLocation}
                selectedPlaceId={selectedPlaceId}
                onSelectPlace={setSelectedPlaceId}
                places={data}
            />
            <Map
                category={category}
                selectedLocation={selectedLocation}
                placeData={data}
                setPlaceData={setData}
            />
        </>
    );

}

export default App;

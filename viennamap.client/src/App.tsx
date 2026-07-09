import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import type { FeatureCollection, Coordinates } from './types/types.ts';

function App() {
    const [category, setCategory] = useState<string>("all");
    const [selectedLocation, setSelectedLocation] = useState<Coordinates | null>(null);
    const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);
    const [data, setData] = useState<FeatureCollection | null>(null);

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
                onSelectPlace={setSelectedPlaceId}
            />
        </>
    );

}

export default App;

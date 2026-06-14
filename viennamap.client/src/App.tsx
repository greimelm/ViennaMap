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

    return (
        <>
            <Sidebar category={category} setCategory={setCategory} onSelectedLocation={setSelectedLocation} />
            <Map category={category} selectedLocation={selectedLocation} />
        </>
    );

}

export default App;

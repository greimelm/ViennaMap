import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import FilterPanel from './components/FilterPanel';

export type Category = "all" | "cafe" | "bar" | "restaurant";

function App() {
    const [category, setCategory] = useState<Category>("all");

    return (
        <>
            <FilterPanel category={category} setCategory={setCategory} />
            <Map category={category} />
        </>
    );

}

export default App;

import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

export type Category = "all" | "cafe" | "bar" | "restaurant";

function App() {
    const [category, setCategory] = useState<Category>("all");

    return (
        <>
            <Sidebar category={category} setCategory={setCategory} />
            <Map category={category} />
        </>
    );

}

export default App;

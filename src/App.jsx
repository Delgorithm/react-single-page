import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';
import Pricing from './components/Pricing/Pricing';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Map />
            <Pricing />
        </div>
    );
}

export default App
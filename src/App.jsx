import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonial/Testimonials';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Map />
            <Pricing />
            <Testimonials />
        </div>
    );
}

export default App
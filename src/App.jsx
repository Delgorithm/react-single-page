import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonial/Testimonials';
import Faq from './components/Faq/Faq';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Map />
            <Pricing />
            <Testimonials />
            <Faq />
        </div>
    );
}

export default App
import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Map from './components/Map/Map';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonial/Testimonials';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Map />
            <Pricing />
            <Testimonials />
            <Faq />
            <Footer />
        </div>
    );
}

export default App
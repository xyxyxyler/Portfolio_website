import React from 'react';
import Hero from './Hero';
import LogoTicker from './LogoTicker';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <LogoTicker />
            <Experience />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;

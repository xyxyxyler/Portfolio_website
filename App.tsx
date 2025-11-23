import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ParticleField from './components/ParticleField';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-fintech-900 text-gray-100 selection:bg-fintech-accent selection:text-black relative">
        {/* Global Particle Effect */}
        <ParticleField />
        <CustomCursor />
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

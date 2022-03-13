import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Resume from './Resume';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
  );
}

export default App;

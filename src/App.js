import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Videos from './Videos';
import Posters from './Posters';
import Comms from './Comms';
import About from './About';
import DesignForMusic from './DesignForMusic';
import WebDesign from './WebDesign';
import Misc from './Misc';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* FIRST ROW */}
        <Route path="/videos" element={<Videos />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/commissions" element={<Comms />} />
        <Route path="/about" element={<About />} />
        {/* SECOND ROW */}
        <Route path="/designformusic" element={<DesignForMusic />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/miscwork" element={<Misc />} />
        {/* THE EIGHTH SQUARE */}
      </Routes>
  );
}

export default App;

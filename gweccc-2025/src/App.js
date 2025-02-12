import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import Speker from './Components/Speker/Spekerpage';
import Schedule from './Components/Schedule/SchedulePage';
import Contact from './Components/Contact/ContactPage';

import MainUtiles from './util/mainUtiles';


const App = () => {
  return (
    <Router>
            <MainUtiles>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/speakers" element={<Speker />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      </MainUtiles>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import MainUtiles from './util/mainUtiles';


const App = () => {
  return (
    <Router>
            <MainUtiles>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
       
      </Routes>
      </MainUtiles>
    </Router>
  );
};

export default App;

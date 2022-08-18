import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Home from './components/Home/Home';
library.add(fab);
function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

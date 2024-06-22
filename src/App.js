import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import SoftwareEngineering from './components/SoftwareEngineering';
import GraphicDesign from './components/GraphicDesign';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-engineering" element={<SoftwareEngineering />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

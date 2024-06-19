import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import GraphicDesign from './components/GraphicDesign';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';    
import Navbar from './components/Navbar/Navbar'; // folder‑level import (= components/Navbar/index.jsx)
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;

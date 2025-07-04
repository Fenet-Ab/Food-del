import React from 'react';    
import Navbar from './components/Navbar/Navbar'; // folder‑level import (= components/Navbar/index.jsx)
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './index.css'
function App() {
  return (
    <>
    <div className="app">
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      <Footer />
    
    </div>
    </>
  );
}

export default App;

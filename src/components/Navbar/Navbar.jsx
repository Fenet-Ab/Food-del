import React, { useState } from 'react';          // ① bring useState into scope
import { assets } from '../../assets/frontend_assets/assets';
import './Navbar.css'; 
import { Link } from 'react-router-dom';                            // keep if you still want custom CSS

const Navbar = () => {
  const [menu, setMenu] = useState('home');        // initial active tab

  return (
    <div className="navbar">
      {/* logo */}
      <img src={assets.logo} alt="Logo" className="logo" />

      {/* links */}
      <ul className="navbar-menu">
        <Link to='/'
          className={menu === 'home' ? 'active' : ''}
          onClick={() => setMenu('home')}
        >
          Home
        </Link>
        <a
        href='#explore-menu'
          className={menu === 'menu' ? 'active' : ''}
          onClick={() => setMenu('menu')}
        >
          Menu
        </a>
        <a
        href='#app-download'
          className={menu === 'mobile-app' ? 'active' : ''}
          onClick={() => setMenu('mobile-app')}
        >
          Mobile‑app
        </a>
        <a
        href='#footer'
          className={menu === 'contact-us' ? 'active' : ''}
          onClick={() => setMenu('contact-us')}
        >
          Contact&nbsp;us
        </a>
      </ul>

      {/* right side */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div  className="dot"></div>
          
        </div>

        <button>Sign&nbsp;in</button>
      </div>
    </div>
  );
};

export default Navbar;

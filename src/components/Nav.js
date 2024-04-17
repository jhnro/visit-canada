import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/caflag.v2.png';

function Nav() {

    
    return (
        
        
        <nav className="nav">
            
            <div id="topnav">
    <div id="heronav">
    <div id="navbar2">
        <div className="navbar-right">
            <a href="#history">History</a>
            <a href="#administration">Administration</a>
            <a href="#contact">Contact</a>
        </div>
    </div>  
</div>
  <header className="header">
    <div id="logo1"><a href="index.html" id="logoLink"><img src={logo} id="logo" alt="toplogo"/></a></div>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
    <ul className="menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="index.html">Provinces</a></li>
      <li><a href="index.html">Weather</a></li>
      <li><a href="food.html">Food</a></li>
      <li><a href="fishing.html">Fishing</a></li>
      <li><a href="index.html">Sport</a></li>
    </ul>
  </header>
</div>

        </nav>
       
      
    );
}

export default Nav;
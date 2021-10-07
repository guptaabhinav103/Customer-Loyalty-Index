import React from 'react'
import { Link } from "react-router-dom";
function Header() {
    return (
        
            <header class="header">
  <Link to="/contact" class="logo">Loyalty generator</Link>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
  <li><Link to="/work">Our Work</Link></li>
    {/* <li><a href="#about">About</a></li> */}
    <li><Link to="/customers">Customers</Link></li>
    <li><Link to="/login">Login</Link></li>
    {/* <li><a href="#contact">Login</a></li> */}
    {/* <li><Link to="/about"><a href="">About</a></Link></li>
    <li><Link to="/customers"><a href="">Customers</a></Link></li>
    <li><Link to="/work"><a href="#contact">Login</a></Link></li> */}
  </ul>
</header>
        
    )
}

export default Header

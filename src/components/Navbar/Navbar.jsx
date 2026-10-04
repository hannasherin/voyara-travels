import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
  <div className="logo"><Link to="/" style={{textDecoration:"none"}}>Voyara</Link></div>
  <ul className="nav-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/destination">Destinations</Link></li>
    <li><Link to="/package">Packages</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
  <div className="auth-buttons">
    <a href="" className="login"><Link to="/login" style={{textDecoration:"none"}}>Login</Link></a>
    <a href="" className="signup"><Link to="/register" style={{textDecoration:"none",color:"white"}}>Sign Up</Link></a>
  </div>
</nav>

    </div>
  )
}

export default Navbar

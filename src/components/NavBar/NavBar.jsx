import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav class="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookpage">Book Page</Link></li>
        <li><Link to="/userpage">User Page</Link></li>
        <li><Link to="/bookdetailse">Book Details</Link></li>
        <li><Link to="/userdetailse">User Details</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
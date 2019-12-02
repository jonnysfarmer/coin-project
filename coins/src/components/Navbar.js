import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

// https://negomi.github.io/react-burger-menu/


const Navbar = () => (
  // <Menu >
  <div className="navbar1">
    <Menu>
    <ul>
    <li><Link to="/" className="link">HOME</Link></li>
    <li><Link to="/coins" className="link">COINS</Link></li>
  </ul>
  </Menu>
  </div>
  // </Menu>
)

export default Navbar
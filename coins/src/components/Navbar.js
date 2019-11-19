import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => (
  <div className="navbar1">
    <ul>
    <li><Link to="/" className="link">HOME</Link></li>
    <li><Link to="/coins" className="link">COINS</Link></li>
  </ul>
  </div>

)

export default Navbar
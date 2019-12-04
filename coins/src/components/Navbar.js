import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

// https://negomi.github.io/react-burger-menu/


const Navbar = () => {
  const [menuOpen, setOpen] = useState(false)

  return (
    <Menu width={240}
      disableAutoFocus
      isOpen={menuOpen}
      onStateChange={(state) => setOpen(state.menuOpen)}
    >
      {/* <div id='nav1'> */}
      <Link to="/" className="link" onClick={() => setOpen(false)}>HOME</Link>
      <Link to="/coins" className="link" onClick={() => setOpen(false)}>COINS</Link>
      <Link to="/coins" className="link" onClick={() => setOpen(false)}>PORTFOLIO</Link>

      <Link to="/coins" className="link" onClick={() => setOpen(false)}>LOGIN</Link>
      <Link to="/register" className="link" onClick={() => setOpen(false)}>RESGISTER</Link>
      <Link to="/coins" className="link" onClick={() => setOpen(false)}>LOGOUT</Link>
      {/* </div> */}
    </Menu>
  )

}

export default Navbar
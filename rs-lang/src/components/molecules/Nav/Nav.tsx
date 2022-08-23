import React from 'react'
// import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <span className='nav__link'>Why Us</span>
      <span className='nav__link'>Games</span>
      <span className='nav__link'>Team</span>
      <span className='nav__link'>Why Us</span>
      {/* <Link className='nav__link' to='#'>Why Us</Link> */}
      {/* <Link className='nav__link' to='#'>Games</Link> */}
      {/* <Link className='nav__link' to='#'>Team</Link> */}
      {/* <Link className='nav__link' to='#'>Textbook</Link> */}
    </div>
  )
}

export default Nav

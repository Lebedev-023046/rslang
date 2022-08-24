import React from 'react'
// import { Link } from 'react-router-dom'
import './Nav.css'

interface INavProps {
  children: React.ReactNode
}

const Nav = ({ children }: INavProps) => {
  return (
    <div className='nav'>
      { children }
      {/* <Link className='nav__link' to='#'>Why Us</Link> */}
      {/* <Link className='nav__link' to='#'>Games</Link> */}
      {/* <Link className='nav__link' to='#'>Team</Link> */}
      {/* <Link className='nav__link' to='#'>Textbook</Link> */}
    </div>
  )
}

export default Nav

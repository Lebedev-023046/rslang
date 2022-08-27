import React from 'react'
import './Nav.css'

interface INavProps {
  children: React.ReactNode
}

const Nav = ({ children }: INavProps) => {
  return (
    <div className='nav'>
      { children }
    </div>
  )
}

export default Nav

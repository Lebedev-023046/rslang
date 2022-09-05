import React from 'react'
import './Nav.css'

interface INavProps {
  children: React.ReactNode
}

const Nav = ({ children }: INavProps) => {
  const [active, setActive] = React.useState(false)

  return (
    <div className='nav'>
      <div
        className={`nav__links ${active ? 'nav__links_active' : ''}`}
        onClick={() => setActive(false)}
      >
        { children }
      </div>
      <div
        className={`menu__icon ${active ? 'menu__icon_active' : ''}`}
        onClick={() => setActive(!active)}>
          <span></span>
        </div>
    </div>
  )
}

export default Nav

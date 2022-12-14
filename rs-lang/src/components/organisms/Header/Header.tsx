import React from 'react'
import './Header.css'

interface IHeaderProps {
  children: React.ReactNode
}

const Header = ({ children }: IHeaderProps) => {
  return (
    <header className='header'>
      <div className='container header__container'>
        { children }
      </div>
    </header>
  )
}

export default Header

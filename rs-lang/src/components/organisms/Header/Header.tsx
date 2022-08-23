import React from 'react'
import Button from '../../atoms/Button/Button'
import Nav from '../../molecules/Nav/Nav'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='conteiner header__conteiner'>
        <h2>RS Lang</h2>
        <Nav />
        <Button
          text='Get Started'
          type='secondary'
          onClick={() => {}}
        />
      </div>
    </header>
  )
}

export default Header

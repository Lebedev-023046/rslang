import React from 'react'
import './MainPage.css'
import Button from '../../atoms/Button/Button'
import Nav from '../../molecules/Nav/Nav'
import Header from '../../organisms/Header/Header'

const MainPage = () => {
  return (
    <div className='wrapper'>
      <Header>
        <h2>RS Lang</h2>
        <Nav>
          <span className='nav__link'>Why Us</span>
          <span className='nav__link'>Games</span>
          <span className='nav__link'>Team</span>
          <span className='nav__link'>Why Us</span>
        </Nav>
        <Button
          text='Get Started'
          type='secondary'
          onClick={() => {}}
        />
        <Button
          text=''
          type='rounded'
          iconType='stroke-right'
          iconWidth='13'
          iconHeight='22'
          iconColor='#FFFFFF'
          onClick={() => {}}
        />
      </Header>
    </div>
  )
}

export default MainPage

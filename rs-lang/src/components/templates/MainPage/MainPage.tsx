import React from 'react'
import './MainPage.css'
// import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import Nav from '../../molecules/Nav/Nav'
import Header from '../../organisms/Header/Header'
import Hero from '../../organisms/Hero/Hero'
import WhyUs from '../../organisms/WhyUs/WhyUs'
import Games from '../../organisms/Games/Games'
import Team from '../../organisms/Team/Team'
import Video from '../../organisms/Video/Video'
import Try from '../../organisms/Try/Try'
import Footer from '../../organisms/Footer/Footer'

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
          {/* <Link className='nav__link' to='#'>Why Us</Link> */}
          {/* <Link className='nav__link' to='#'>Games</Link> */}
          {/* <Link className='nav__link' to='#'>Team</Link> */}
          {/* <Link className='nav__link' to='#'>Textbook</Link> */}
        </Nav>
        <Button
          text='Get Started'
          type='secondary'
          onClick={() => {}}
        />
      </Header>
      <Hero
        title='Learn English'
        text='Visiting the New York, getting a new job, or making a personal connection - no matter why you want to learn, we have the right app for you'
        buttonText='Get Started'
      />
      <WhyUs />
      <Games />
      <Team />
      <Video />
      <Try />
      <Footer />
    </div>
  )
}

export default MainPage

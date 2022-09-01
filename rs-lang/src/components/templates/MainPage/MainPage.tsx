import React, { useContext } from 'react'
import './MainPage.css'
import { Link } from 'react-router-dom'
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
import { signInUpContext } from '../../../context/ModalContext/ModalContext'
import { Modal } from '../../organisms/Modal/Modal'
import { SignUpInForm } from '../../organisms/signUpInForm/signUpInForm'
import { authContext } from '../../../context/AuthContext/AuthContext'
import { NameBlock } from '../../atoms/NameBlock/NameBlock'

const MainPage = () => {
  const { signInUpModal, openSIU, closeSIU } = useContext(signInUpContext)
  const { isAuth } = useContext(authContext)

  return (
    <div className='wrapper'>
      { signInUpModal && <Modal onClose={closeSIU}><SignUpInForm /></Modal> }
      <Header>
        <h2>RS Lang</h2>
        <Nav>
          <span className='nav__link'>Why Us</span>
          <span className='nav__link'>Games</span>
          <span className='nav__link'>Team</span>
          <span className='nav__link'>Why Us</span>
          {/* <Link className='nav__link' to='#'>Why Us</Link> */}
          <Link className='nav__link' to='/AudioChallenge'>Audio Challenge</Link>
          {/* <Link className='nav__link' to='#'>Team</Link> */}
          {/* <Link className='nav__link' to='#'>Textbook</Link> */}
        </Nav>
        { isAuth
          ? <NameBlock/>
          : <Button
            text='Get Started'
            type='secondary'
            onClick={openSIU}
          />}
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

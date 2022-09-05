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
          <a className='nav__link' href='#why-us'>Why Us</a>
          {/* <span className='nav__link'>Games</span> */}
          <Link className='nav__link' to='/AudioChallenge'>Audio Challenge</Link>
          <Link className='nav__link' to='/Sprint'>Sprint</Link>
          <a className='nav__link' href='#team'>Team</a>
          <Link className='nav__link' to='/TextBook'>TextBook</Link>
          {isAuth &&
            <Link className='nav__link' to='/Statistics'>
              Statistics
            </Link>
          }
          {isAuth
            ? <NameBlock />
            : <Button
                text='Get Started'
                type='secondary'
                onClick={openSIU}
              />
          }
        </Nav>
      </Header>
      <Hero />
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

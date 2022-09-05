import React from 'react'
import Button from '../../atoms/Button/Button'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section className='hero' id='hero'>
      <div className='container hero__container'>
        <div className='hero__content'>
          <div className='hero__text'>
            <h1 className='hero__heading'>Learn English</h1>
            <p className='hero__paragraph'>Visiting the New York, getting a new job, or making a personal connection - no matter why you want to learn, we have the right app for you</p>
          </div>
          <Button
            text='Get Started'
            type='primary'
            onClick={() => {}}
          />
        </div>
        <div className='hero__image'>
          <img
            src={require('./images/hero-girl.png')}
            alt="hero-girl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

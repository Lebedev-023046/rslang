import React from 'react'
import Button from '../../atoms/Button/Button'
import './Hero.css'

interface HeroProps {
  title: string
  text: string
  buttonText: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  text,
  buttonText
}) => {
  return (
    <section className='hero'>
      <div className='container hero__container'>
        <div className='hero__content'>
          <div className='hero__text'>
            <h1>{title}</h1>
            <p className='hero__paragraph'>{text}</p>
          </div>
          <Button
            text={buttonText}
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

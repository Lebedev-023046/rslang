import React from 'react'
import Button from '../../atoms/Button/Button'
import './Try.css'

const Try: React.FC = () => {
  return (
    <section className='try'>
      <div className='container try__container'>
        <div className='try__content'>
          <h2>Try for free</h2>
          <p>Sign up and get access to statistics, word saving and other features that will make learning more effective</p>
          <Button
            text='Get Started'
            type='primary'
            onClick={() => {}}
          />
        </div>
        <div className='try__image'>
          <img
            src={require('./images/girl-with-book.png')}
            alt="girl-with-book"
          />
        </div>
      </div>
    </section>
  )
}

export default Try

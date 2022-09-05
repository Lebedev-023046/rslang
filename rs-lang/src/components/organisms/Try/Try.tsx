import React from 'react'
import { authContext } from '../../../context/AuthContext/AuthContext'
import Button from '../../atoms/Button/Button'
import './Try.css'

interface TryProps {
  onGetStarted: () => void
}

const Try: React.FC<TryProps> = ({ onGetStarted }) => {
  const { isAuth } = React.useContext(authContext)

  return (
    <section className='try' id='try'>
      <div className='container try__container'>
        <div className='try__content'>
          <h2>Try for free</h2>
          <p>Sign up and get access to statistics, word saving and other features that will make learning more effective</p>
          {!isAuth &&
            <Button
              text='Get Started'
              type='primary'
              onClick={onGetStarted}
            />
          }
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

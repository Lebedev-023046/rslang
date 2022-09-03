/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Icon from '../../../atoms/Icon/Icon'
import './SprintQuestion.css'

const SprintQuestion = () => {
  const [dot, setDot] = React.useState(3)
  const [points, setPoints] = React.useState(0)

  const handleVariant = () => {
    setDot(dot + 1)
  }

  return (
    <div className="sprint__question">
      <div className="sprint__score">240</div>
      <div className="sprint__card">
        <div className="sprint__bonus-point">
          <div className="sprint__dots">
            <Icon
              type="dot"
              width="18"
              height="18"
              color={dot > 0 ? '#FF6822' : '#DCE0E7'}
            />
            <Icon
              type="dot"
              width="18"
              height="18"
              color={dot > 1 ? '#FF6822' : '#DCE0E7'}
            />
            <Icon
              type="dot"
              width="18"
              height="18"
              color={dot > 2 ? '#FF6822' : '#DCE0E7'}
            />
          </div>
          <div className="sprint__points">
            <span className="points">+{points}</span> points per word
          </div>
        </div>
        <div className="question__words">
          <div className="question__eng">Alcohol</div>
          <div className="question__ru">Алкоголь</div>
        </div>
        <div
          className="sprint__checkbox"
          style={{ backgroundColor: '#DCE0E7' }}
        ></div>
        <div className="sprint__btns">
          <button className='wrong btn'>Wrong</button>
          <button className='right btn'>Right</button>
        </div>
      </div>
      <div className="sprint__timer">38</div>
    </div>
  )
}

export default SprintQuestion

import React from 'react'
import './Team.css'
import Icon from '../../atoms/Icon/Icon'
import TeamCard from '../../molecules/TeamCard/TeamCard'
import strokeLeft from '../../../assets/icons/stroke-left.svg'
import strokeRight from '../../../assets/icons/stroke-right.svg'

const Team: React.FC = () => {
  const [card, setCard] = React.useState(0)

  const handleStrokeLeft = () => {
    if (card === 0) {
      setCard(2)
    } else {
      setCard(prev => prev - 1)
    }
  }

  const handleStrokeRight = () => {
    if (card === 2) {
      setCard(0)
    } else {
      setCard(prev => prev + 1)
    }
  }

  return (
    <section className='team' id='team'>
      <div className='container team__container'>
        <h2>Our team</h2>
        <div className='team__slider'>
          <button
            className='stroke-left'
            onClick={handleStrokeLeft}
          >
            <img src={strokeLeft} alt="stroke-left" />
          </button>
          <div className='team__cards'>
            {card === 0 && <TeamCard type='dmitry' />}
            {card === 1 && <TeamCard type='aldar' />}
            {card === 2 && <TeamCard type='viktor' />}
          </div>
          <button
            className='stroke-right'
            onClick={handleStrokeRight}
          >
            <img src={strokeRight} alt="stroke-right" />
          </button>
        </div>
        <div className='team__pagination'>
          <button onClick={() => setCard(0)}>
            <Icon
              type='dot'
              width='18px'
              height='18px'
              color={card === 0 ? '#FF6822' : '#FFB391'}
            />
          </button>
          <button onClick={() => setCard(1)}>
            <Icon
              type='dot'
              width='18px'
              height='18px'
              color={card === 1 ? '#FF6822' : '#FFB391'}
            />
          </button>
          <button onClick={() => setCard(2)}>
            <Icon
              type='dot'
              width='18px'
              height='18px'
              color={card === 2 ? '#FF6822' : '#FFB391'}
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team

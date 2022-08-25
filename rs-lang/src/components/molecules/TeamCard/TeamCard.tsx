import React from 'react'
import Icon from '../../atoms/Icon/Icon'
import './TeamCard.css'

const TeamCard = () => {
  return (
    <div className='team__card team-card'>
      <div className='team-card__info'>
        <div className='team-card__image'>
          <img
            src={require('./images/dima.png')}
            alt="dima"
          />
        </div>
        <div className='team-card__content'>
          <div className='team-card__titles'>
                <h2>Dmitry Lebedev</h2>
                <p>Team Lead, Frontend Developer</p>
            </div>
            <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Icon
              type='github'
              height='48px'
              width='48px'
              color='#151618'
            />
        </div>
      </div>
      <div className='team-card__pagination'>
        <Icon
          type='dot'
          width='18px'
          height='18px'
          color='#FF6822'
        />
        <Icon
          type='dot'
          width='18px'
          height='18px'
          color='#FFB391'
        />
        <Icon
          type='dot'
          width='18px'
          height='18px'
          color='#FFB391'
        />
      </div>
    </div>
  )
}

export default TeamCard

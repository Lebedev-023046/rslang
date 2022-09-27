import React from 'react'
import Icon from '../../atoms/Icon/Icon'
import './TeamCard.css'
import dimaPNG from './images/dima.png'
import aldarPNG from './images/aldar.png'
import viktorPNG from './images/viktor.jpg'

interface TeamCardProps {
  type: 'dmitry' | 'aldar' | 'viktor'
}

const TeamCard: React.FC<TeamCardProps> = ({ type }) => {
  switch (type) {
    case 'dmitry':
      return (
        <div className='team__card team-card'>
          <div className='team-card__info'>
            <div className='team-card__image'>
              <img
                src={dimaPNG}
                alt="dmitry"
              />
            </div>
            <div className='team-card__content'>
              <div className='team-card__titles'>
                    <h2>Dmitry Lebedev</h2>
                    <p>Team Lead, Frontend Developer</p>
                </div>
                <p>During the implementation of this project, I was engaged in the following: I set up a backend, made word cards, built a modal window and a form for registration, and also worked on a textbook and a dictionary</p>
                <a
                  className='footer__github'
                  href="https://github.com/Lebedev-023046"
                  target='blank'
                >
                  <Icon
                    type='github'
                    height='48px'
                    width='48px'
                    color='#151618'
                  />
                </a>
            </div>
          </div>
        </div>
      )

    case 'aldar':
      return (
        <div className='team__card team-card'>
          <div className='team-card__info'>
            <div className='team-card__image'>
              <img
                src={aldarPNG}
                alt="aldar"
              />
            </div>
            <div className='team-card__content'>
              <div className='team-card__titles'>
                    <h2>Aldar Okonov</h2>
                    <p>Frontend Developer</p>
                </div>
                <p>In this project, I created the main page and the statistics page, implemented the Audio Challenge game and dealt with the structure of the project, created most of the basic components</p>
                <a
                  className='footer__github'
                  href="https://github.com/Aldar0K"
                  target='blank'
                >
                  <Icon
                    type='github'
                    height='48px'
                    width='48px'
                    color='#151618'
                  />
                </a>
            </div>
          </div>
        </div>
      )

    case 'viktor':
      return (
        <div className='team__card team-card'>
          <div className='team-card__info'>
            <div className='team-card__image'>
              <img
                src={viktorPNG}
                alt="viktor"
              />
            </div>
            <div className='team-card__content'>
              <div className='team-card__titles'>
                    <h2>Viktor Stoianov</h2>
                    <p>Frontend Developer</p>
                </div>
                <p>During the execution of this project, I implemented APIs and interfaces, made a Sprint game and a couple of additional functions</p>
                <a
                  className='footer__github'
                  href="https://github.com/ViktorVitsk"
                  target='blank'
                >
                  <Icon
                    type='github'
                    height='48px'
                    width='48px'
                    color='#151618'
                  />
                </a>
            </div>
          </div>
        </div>
      )
  }
}

export default TeamCard

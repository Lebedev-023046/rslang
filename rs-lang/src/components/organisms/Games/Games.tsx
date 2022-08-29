import React from 'react'
import GamesCard from '../../molecules/GamesCard/GamesCard'
import './Games.css'

const Games: React.FC = () => {
  return (
    <section className='games'>
      <div className='container games__container'>
        <h2>Enhance your learning experience with games</h2>
        <div className='games__cards'>
          <GamesCard type='audio' />
          <GamesCard type='sprint' />
        </div>
      </div>
    </section>
  )
}

export default Games

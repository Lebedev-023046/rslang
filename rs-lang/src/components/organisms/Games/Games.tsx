import React from 'react'
import GamesCard from '../../molecules/GamesCard/GamesCard'
import './Games.css'

const Games = () => {
  return (
    <section className='games'>
      <div className='conteiner games__conteiner'>
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

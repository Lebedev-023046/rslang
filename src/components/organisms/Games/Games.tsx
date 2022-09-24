import React from 'react'
import GamesCard from '../../molecules/GamesCard/GamesCard'
import './Games.css'

interface GamesProps {
  fromTextBook: boolean
}

const Games: React.FC<GamesProps> = ({ fromTextBook }) => {
  return (
    <section className='games'>
      <div className='container games__container'>
        <h2 className='games__heading'>Enhance your learning experience with games</h2>
        <div className='games__cards'>
          <GamesCard type='audio' fromTextBook={fromTextBook} />
          <GamesCard type='sprint' fromTextBook={fromTextBook} />
        </div>
      </div>
    </section>
  )
}

export default Games

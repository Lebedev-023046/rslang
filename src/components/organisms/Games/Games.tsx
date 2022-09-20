import React from 'react'
import GamesCard from '../../molecules/GamesCard/GamesCard'
import './Games.css'

interface GamesProps {
  group: number
}

const Games: React.FC<GamesProps> = ({ group }) => {
  return (
    <section className='games'>
      <div className='container games__container'>
        <h2 className='games__heading'>Enhance your learning experience with games</h2>
        <div className='games__cards'>
          <GamesCard type='audio' group={group} />
          <GamesCard type='sprint' group={group} />
        </div>
      </div>
    </section>
  )
}

export default Games

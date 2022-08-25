import React from 'react'
// import Button from '../../atoms/Button/Button'
import TeamCard from '../../molecules/TeamCard/TeamCard'
import './Team.css'

const Team = () => {
  return (
    <section className='team'>
      <div className='conteiner team__conteiner'>
        <h2>Our team</h2>
        <div className='team__slider'>
          {/* <Button
            text=''
            type='rounded'
            iconType='stroke-left'
            onClick={() => {}}
          /> */}
          <div className='team__cards'>
            <TeamCard />
          </div>
          {/* <Button
            text=''
            type='rounded'
            iconType='stroke-right'
            onClick={() => {}}
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Team

import React from 'react'
import TeamCard from '../../molecules/TeamCard/TeamCard'
import './Team.css'

const Team: React.FC = () => {
  return (
    <section className='team'>
      <div className='container team__container'>
        <h2>Our team</h2>
        <div className='team__slider'>
          {/* TODO добавить кнопки для слайдера */}
          {/* <Button
            text=''
            type='rounded'
            iconType='stroke-left'
            onClick={() => {}}
          /> */}
          <div className='team__cards'>
            <TeamCard type='dmitry' />
          </div>
          {/* <Button
            text=''
            type='rounded'
            iconType='stroke-right'
            onClick={() => {}}
          /> */}
          {/* TODO добавить пагинацию */}
        </div>
      </div>
    </section>
  )
}

export default Team

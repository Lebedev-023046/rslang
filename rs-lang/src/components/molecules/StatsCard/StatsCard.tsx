import React from 'react'
import './StatsCard.css'

interface StatsCardProps {
  type: 'audio' | 'sprint'
  newWords: number
  accuracy: number
  row: number
}

const StatsCard: React.FC<StatsCardProps> = ({ type, newWords, accuracy, row }) => {
  switch (type) {
    case 'audio':
      return (
        <div className='stats-card stats-card_audio'>
          <h3 className='stats-card__heading'>Audio challenge</h3>
          <div className='stats-card__info'>
            <div className='stats-card__new'>
              <div className='stats-card__amount'>{newWords}</div>
              <span className='stats-card__explanation'>
                number of new words
              </span>
            </div>
            <div className='stats-card__accuracy'>
              <div className='stats-card__amount'>{accuracy}</div>
              <span className='stats-card__explanation'>
                accuracy, %
              </span>
            </div>
            <div className='stats-card__row'>
              <div className='stats-card__amount'>{row}</div>
              <span className='stats-card__explanation'>
                in a row
              </span>
            </div>
          </div>
        </div>
      )
    case 'sprint':
      return (
        <div className='stats-card stats-card_sprint'>
          <h3 className='stats-card__heading'>Sprint</h3>
          <div className='stats-card__info'>
            <div className='stats-card__new'>
              <div className='stats-card__amount'>{newWords}</div>
              <span className='stats-card__explanation'>
                number of new Words
              </span>
            </div>
            <div className='stats-card__accuracy'>
              <div className='stats-card__amount'>{accuracy}</div>
              <span className='stats-card__explanation'>
                accuracy, %
              </span>
            </div>
            <div className='stats-card__row'>
              <div className='stats-card__amount'>{row}</div>
              <span className='stats-card__explanation'>
                in a row
              </span>
            </div>
          </div>
        </div>
      )
  }
}

export default StatsCard

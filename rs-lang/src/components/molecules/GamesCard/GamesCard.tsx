import React from 'react'
import Button from '../../atoms/Button/Button'
import './GamesCard.css'

interface GamesCardProps {
  type: 'audio' | 'sprint'
}

const GamesCard: React.FC<GamesCardProps> = ({ type }) => {
  switch (type) {
    case 'audio':
      return (
        <div className='games__card games__card_audio'>
          <h3>Audio challenge</h3>
          <p>Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess.</p>
          <Button
            type='primary'
            text='Play now'
            onClick={() => {}}
          />
        </div>
      )
    case 'sprint':
      return (
        <div className='games__card games__card_sprint'>
          <h3>Sprint</h3>
          <p>Check how much points you can get in one minute, making educated guesses about what is right and what is wrong.</p>
          <Button
            type='primary'
            text='Play now'
            onClick={() => {}}
          />
        </div>
      )
  }
}

export default GamesCard

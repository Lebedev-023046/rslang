import React from 'react'
import Icon from '../../atoms/Icon/Icon'
import './Sticker.css'

interface IStickerProps {
  iconType: string
  tittle: string
  text: string
}

const Sticker: React.FC<IStickerProps> = ({ iconType, tittle, text }) => {
  return (
    <div className='sticker'>
      <div className='sticker__icon'>
        <Icon
          type={iconType}
          width='50'
          height='50'
        />
      </div>
      <div className='sticker__content'>
        <h4 className='sticker__title'>{tittle}</h4>
        <p className='sticker__text'>{text}</p>
      </div>
    </div>
  )
}

export default Sticker

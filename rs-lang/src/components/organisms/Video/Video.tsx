import React from 'react'
import Icon from '../../atoms/Icon/Icon'
import './Video.css'

const Video: React.FC = () => {
  return (
    <section className='video'>
      <div className='container video__container'>
        <h2>Learn more about the app</h2>
        <div className='video__player'>
          <Icon
            type='youtube'
            height='71px'
            width='100px'
          />
        </div>
      </div>
    </section>
  )
}

export default Video

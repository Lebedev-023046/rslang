import React from 'react'
import Button from '../../atoms/Button/Button'
import Sticker from '../../molecules/Sticker/Sticker'
import './WhyUs.css'

const WhyUs: React.FC = () => {
  return (
    <section className='why-us' id='why-us'>
      <div className='container why-us__container'>
        <div className='why-us__stickers'>
          <Sticker
            iconType='textbook'
            tittle='Textbook'
            text='The e-textbook consists of six sections with different levels of difficulty. Each card consists of a word translation, a thematic picture, and the pronunciation of both the word alone and as part of a phrase.'
          />
          <Sticker
            iconType='dictionary'
            tittle='Dictionary'
            text='The dictionary contains lists of words that have been studied and those that are in progress. The dictionary shows the statistics for each section.'
          />
          <Sticker
            iconType='game'
            tittle='Games'
            text='There are two mini-games for better word memorization: Audio Challenge and Sprint. They help you memorize difficult words in a playful way and give you a chance to expand your vocabulary.'
          />
          <Sticker
            iconType='statistics'
            tittle='Statistics'
            text='You can view your personal training progress in the "statistics" section.  The information is presented in the form of tables and graphs.'
          />
        </div>
        <div className='why-us__content'>
          <h2 className='why-us__heading'>Why choose us?</h2>
          <p className='why-us__text'>RS Lang is a free service for learning English. You can study words from our Textbook, which contains about 4000 of the most popular and used English words, as well as add the words you need to your personal Dictionary to learn them accurately. Also, to consolidate the material, 2 games are available to you - Audio Challenge and Sprint. To view the statistics and dynamics of your learning, there is a Statistics page with detailed statistics for each day and for the current one</p>
          <a className='nav__link' href='#video'>
            <Button
              type='bordered'
              text='Watch video about us'
              onClick={() => {}}
              iconType='play'
              iconWidth='30'
              iconHeight='30'
              iconColor='#FF6822'
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyUs

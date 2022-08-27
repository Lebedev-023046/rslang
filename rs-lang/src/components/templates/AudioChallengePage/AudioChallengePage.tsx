import React from 'react'
import Button from '../../atoms/Button/Button'
import DifficultyButton from '../../atoms/DifficultyButton/DifficultyButton'
import Icon from '../../atoms/Icon/Icon'
import './AudioChallengePage.css'

// const questions = [
//   {
//     word: 'Alcohol',
//     variants: ['Ливень', 'Падение', 'Скала', 'Алкоголь', 'Жизнь'],
//     correct: 3
//   },
//   {
//     word: 'Rock',
//     variants: ['Падение', 'Скала', 'Жизнь', 'Алкоголь', 'Ливень'],
//     correct: 1
//   },
//   {
//     word: 'Life',
//     variants: ['Алкоголь', 'Скала', 'Ливень', 'Жизнь', 'Падение'],
//     correct: 3
//   }
// ]

const AudioChallengePage = () => {
  const [game, setGame] = React.useState(false)
  // const [step, setStep] = React.useState(0)
  // const question = questions[step]
  const [difficulty, setDifficulty] = React.useState('A2')

  const handleDifficulty = (e: React.MouseEvent) => {
    setDifficulty((e.target as HTMLButtonElement).id)
    console.log(difficulty)
  }

  return (
    <div className='wrapper'>
      <section className='audio-challenge'>
        <div className='conteiner audio-challenge__conteiner'>
          <div className='burger'>
            <Icon
              type='burger'
              height='39'
              width='54'
              color='#FF6822'
            />
          </div>
          <a className='cross' href=''>
            <Icon
              type='cross'
              height='24'
              width='24'
            />
          </a>
          {!game &&
            <div className='audio-challenge__start-screen'>
              <div className='audio-challenge__info'>
                <h2>Audio Challenge</h2>
                <p className='audio-challenge__text'>Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess.</p>
              </div>
              <div className='audio-challenge__difficulty'>
                <p className='audio-challenge__text'>Choose difficulty:</p>
                <div className='audio-challenge__buttons'>
                  <DifficultyButton
                    text='A1'
                    active={difficulty === 'A1'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='A2'
                    active={difficulty === 'A2'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='B1'
                    active={difficulty === 'B1'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='B2'
                    active={difficulty === 'B2'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='C1'
                    active={difficulty === 'C1'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='C2'
                    active={difficulty === 'C2'}
                    onClick={handleDifficulty}
                  />
                </div>
              </div>
              <Button
                text='Play'
                type='primary'
                onClick={() => { setGame(true) }}
              />
            </div>
          }
        </div>/
      </section>
    </div>
  )
}

export default AudioChallengePage

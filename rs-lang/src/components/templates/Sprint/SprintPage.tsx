import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import DifficultyButton from '../../atoms/DifficultyButton/DifficultyButton'
import Icon from '../../atoms/Icon/Icon'
import './SprintPage.css'

const SprintPage = () => {
  const [game, setGame] = React.useState(false)
  const [difficulty, setDifficulty] = React.useState('A2')

  const handleDifficulty = (e: React.MouseEvent) => {
    setDifficulty((e.target as HTMLButtonElement).id)
    console.log(difficulty)
  }

  return (
    <div className='wrapper'>
      <section className='audio-challenge'>
        <div className='container audio-challenge__container'>
          <div className='burger'>
            <Icon
              type='burger'
              height='39'
              width='54'
              color='#FF6822'
            />
          </div>
          <Link className='cross' to='/'>
            <Icon
              type='cross'
              height='24'
              width='24'
            />
          </Link>
          {!game &&
            <div className='audio-challenge__start-screen'>
              <div className='audio-challenge__info'>
                <h2>Sprint</h2>
                <p className='audio-challenge__text'>Check how much points you can get in one minute, making educated guesses about what is right and what is wrong.</p>
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
        </div>
      </section>
    </div>
  )
}

export default SprintPage

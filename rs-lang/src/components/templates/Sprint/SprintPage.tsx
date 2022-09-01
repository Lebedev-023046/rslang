import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import DifficultyButton from '../../atoms/DifficultyButton/DifficultyButton'
import Icon from '../../atoms/Icon/Icon'
import './SprintPage.css'
import reloadSVG from '../../../assets/icons/reload.svg'

const SprintPage = () => {
  const [difficulty, setDifficulty] = React.useState(0)
  const [game, setGame] = React.useState(false)

  const handleDifficulty = (id: number) => {
    setDifficulty(id)
  }

  const startGame = () => {
    setGame(true)
    // void generateQuestions(difficulty, getRandomPage())
  }

  return (
    <div className="wrapper">
      <section className="audio-challenge">
        <div className="container audio-challenge__container">
          <button
            className="reload"
            onClick={() => {
              window.location.reload()
            }}
          >
            <img src={reloadSVG} alt="reload-icon" width={32} height={32} />
          </button>
          <Link className="cross" to="/">
            <Icon type="cross" height="24" width="24" />
          </Link>
          {!game && (
            <div className="audio-challenge__start-screen">
              <div className="audio-challenge__info">
                <h2>Sprint</h2>
                <p className="audio-challenge__text">
                  Check how much points you can get in one minute, making
                  educated guesses about what is right and what is wrong.
                </p>
              </div>
              <div className="audio-challenge__difficulty">
                <p className="audio-challenge__text">Choose difficulty:</p>
                <div className="audio-challenge__buttons">
                  <DifficultyButton
                    text="A1"
                    id={0}
                    active={difficulty === 0}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text="A2"
                    id={1}
                    active={difficulty === 1}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text="B1"
                    id={2}
                    active={difficulty === 2}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text="B2"
                    id={3}
                    active={difficulty === 3}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text="C1"
                    id={4}
                    active={difficulty === 4}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text="C2"
                    id={5}
                    active={difficulty === 5}
                    onClick={handleDifficulty}
                  />
                </div>
              </div>
              <Button
                text="Play"
                type="primary"
                onClick={startGame}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default SprintPage

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../atoms/Button/Button'
import DifficultyButton from '../../../atoms/DifficultyButton/DifficultyButton'
import '../../AudioChallengePage/AudioChallengePage.css'
import reloadSVG from '../../../../assets/icons/reload.svg'
import crossSVG from '../../../../assets/icons/cross.svg'
import SprintQuestion from '../SprintQuestion/SprintQuestion'
import Api from '../../../../api/Api'
import {
  IData,
  IQuestion
} from '../../../../interfaces/IData'
import GameResult from '../../../molecules/GameResult/GameResult'
const SprintPage = () => {
  const [difficulty, setDifficulty] = React.useState(0)
  const [game, setGame] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [wordsArray, setWordsArray] = React.useState<IData[]>([])
  const [result, setResult] = React.useState(false)
  const [questions, setQuestions] = React.useState<IQuestion[]>([])
  const [userAnswers, setUserAnswers] = React.useState<Array<IData | null>>([])

  const handleDifficulty = (id: number) => {
    setDifficulty(id)
  }

  const generateQuestions = async (diff: number) => {
    setLoading(true)
    const maxPages = 29
    const getRandomPage = () => Math.floor(Math.random() * maxPages)
    let page = getRandomPage()
    let result = await Api.getWords(String(diff), String(page))
    const numbersOfArrays = 6
    for (let i = 0; i < numbersOfArrays; i++) {
      if (page === 0) page = maxPages
      page--
      const words = await Api.getWords(String(diff), String(page))
      result = result.concat(words)
    }
    setWordsArray(result)
    setLoading(false)
  }

  const startGame = () => {
    void generateQuestions(difficulty)
    setGame(true)
  }

  const handleGameOver = (answerWords: IData[], questionsWords: IQuestion[]) => {
    setUserAnswers(answerWords)
    setQuestions(questionsWords)
    console.log(answerWords)
    console.log(questionsWords)
    setResult(true)
  }

  return (
    <div className="wrapper">
      <section className="audiocall">
        <div className="container audiocall__container">
          <button
            className="reload"
            onClick={() => {
              window.location.reload()
            }}
          >
            <img src={reloadSVG} alt="reload-icon" width={32} height={32} />
          </button>
          <Link className="cross" to="/">
            <img src={crossSVG} alt="cross-icon" width={24} height={24} />
          </Link>
          {!game && !loading && (
            <div className="audiocall__start-screen">
              <div className="audiocall__info">
                <h2>Sprint</h2>
                <p className="audiocall__text">
                  Check how much points you can get in one minute, making
                  educated guesses about what is right and what is wrong.
                </p>
              </div>
              <div className="audiocall__difficulty">
                <p className="audiocall__text">Choose difficulty:</p>
                <div className="question__buttons">
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
              <Button text="Play" type="primary" onClick={startGame} />
            </div>
          )}
          {loading && (
            <div className="audiocall__loading-screen">
              <h2>Loading...</h2>
            </div>
          )}
          {game && !loading && !result && (
            <div className="sprint__game-screen">
              <SprintQuestion words={wordsArray} gameOver={handleGameOver} />
            </div>
          )}
          {game && !loading && result && (
            <div className="audiocall__result-screen">
              <GameResult
                game='sprint'
                answers={userAnswers}
                questions={questions}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default SprintPage

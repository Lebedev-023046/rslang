/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { IData } from '../../../../interfaces/IData'
import Icon from '../../../atoms/Icon/Icon'
import './SprintQuestion.css'
import {
  CountdownCircleTimer,
  useCountdown
} from 'react-countdown-circle-timer'

interface SprintQuestionProps {
  words: IData[]
}

const SprintQuestion: any = (words: any) => {
  const NEUTRAL = '#DCE0E7'
  const WRONG = '#FFAFAF'
  const RIGHT = '#B1FFAF'
  const BONUS = '#FF6822'
  const [dot, setDot] = React.useState(3)
  const wordsArray: IData[] = words.words
  const [iterEng, setIterEng] = React.useState(0)
  const randomIter = () => Math.floor(Math.random() * wordsArray.length)
  const iterForRu = () => (randomIter() % 2 === 0 ? iterEng : randomIter())
  const [iterRu, setIterRu] = React.useState(iterForRu())
  const [currentPoint, setCurrentPoint] = React.useState(0)
  const [upPoint, setUpPoint] = React.useState(10)
  const [seriesOfCorrectAnswers, setSeriesOfCorrectAnswers] = React.useState(0)
  const [colorCheck, setColorCheck] = React.useState(NEUTRAL)
  const [timer, setTimer] = React.useState(30)

  const { remainingTime } = useCountdown({
    isPlaying: true,
    duration: 30,
    colors: '#abc'
  })

  React.useEffect(() => {
    if (remainingTime === 0) console.log('STOP')
  })

  const setWord = () => {
    const i = iterEng + 1
    setIterEng(i)
    if (randomIter() % 2 === 0) {
      setIterRu(i)
    } else {
      setIterRu(randomIter())
    }
  }
  const checkAnswer = (answer: boolean) => {
    const color = answer ? RIGHT : WRONG
    setColorCheck(color)
    if (answer) {
      setCurrentPoint(currentPoint + upPoint)
      setSeriesOfCorrectAnswers(seriesOfCorrectAnswers + 1)
      if (seriesOfCorrectAnswers === 3) {
        setUpPoint(upPoint * 2)
        setSeriesOfCorrectAnswers(0)
      }
      setWord()
    } else {
      setSeriesOfCorrectAnswers(0)
      setUpPoint(10)
      setWord()
    }
  }
  const handleRight = () => {
    const answer = wordsArray[iterEng].word === wordsArray[iterRu].word
    checkAnswer(answer)
  }
  const handleWrong = () => {
    const answer = wordsArray[iterEng].word !== wordsArray[iterRu].word
    checkAnswer(answer)
  }

  return (
    <div className="sprint__question">
      <div className="sprint__score">{currentPoint}</div>
      <div className="sprint__card">
        <div className="sprint__bonus-point">
          <div className="sprint__dots">
            <Icon
              type="dot"
              width="18"
              height="18"
              color={seriesOfCorrectAnswers > 0 ? BONUS : NEUTRAL}
            />
            <Icon
              type="dot"
              width="18"
              height="18"
              color={seriesOfCorrectAnswers > 1 ? BONUS : NEUTRAL}
            />
            <Icon
              type="dot"
              width="18"
              height="18"
              color={seriesOfCorrectAnswers > 2 ? BONUS : NEUTRAL}
            />
          </div>
          <div className="sprint__points">
            <span className="points">+{upPoint}</span> points per word
          </div>
        </div>
        <div className="question__words">
          <div className="question__eng">{wordsArray[iterEng].word}</div>
          <div className="question__ru">{wordsArray[iterRu].wordTranslate}</div>
        </div>
        <div
          className="sprint__checkbox"
          style={{ backgroundColor: colorCheck }}
        ></div>
        <div className="sprint__btns">
          <button className="wrong btn" onClick={handleWrong}>
            Wrong
          </button>
          <button className="right btn" onClick={handleRight}>
            Right
          </button>
        </div>
      </div>
      <div className='sprint__timer'>
        <CountdownCircleTimer
          size={100}
          isPlaying
          duration={30}
          colors={['#6CA0FA', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default SprintQuestion

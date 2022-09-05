import React from 'react'
import { IData, IQuestion } from '../../../../interfaces/IData'
import Icon from '../../../atoms/Icon/Icon'
import './SprintQuestion.css'
import {
  CountdownCircleTimer,
  useCountdown
} from 'react-countdown-circle-timer'
import { handleUserAnswer } from '../../../../utils/Utils'
import playRight from '../../../../assets/sound/right.mp3'
import playWrong from '../../../../assets/sound/wrong.mp3'
interface SprintQuestionProps {
  words: IData[]
  gameOver: (answerWords: IData[], questionsWords: IQuestion[]) => void
}

const SprintQuestion: React.FC<SprintQuestionProps> = ({ words, gameOver }) => {
  const NEUTRAL = '#DCE0E7'
  const WRONG = '#FFAFAF'
  const RIGHT = '#B1FFAF'
  const BONUS = '#FF6822'
  const wordsArray: IData[] = words
  const [iterEng, setIterEng] = React.useState(0)
  const randomIter = () => Math.floor(Math.random() * wordsArray.length)
  const iterForRu = () => (randomIter() % 2 === 0 ? iterEng : randomIter())
  const [iterRu, setIterRu] = React.useState(iterForRu())
  const [currentPoint, setCurrentPoint] = React.useState(0)
  const [upPoint, setUpPoint] = React.useState(10)
  const [seriesOfCorrectAnswers, setSeriesOfCorrectAnswers] = React.useState(0)
  const [colorCheck, setColorCheck] = React.useState(NEUTRAL)
  const [answerWords, setAnswerWords] = React.useState<IData[]>([])
  const [questions, setQuestions] = React.useState<IQuestion[]>([])

  const { remainingTime } = useCountdown({
    isPlaying: true,
    duration: 30,
    colors: '#abc'
  })

  React.useEffect(() => {
    if (remainingTime === 0) gameOver(answerWords, questions)
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

  const audioAnswer = (answer: boolean) => {
    const play = answer ? playRight : playWrong
    const audio = new Audio(play)

    audio.volume = 0.1
    void audio.play()
  }

  const addAnswer = (
    answer: boolean,
    userAnswer: IData,
    correctAnswer: IData
  ) => {
    setAnswerWords(answerWords.concat(userAnswer))
    checkAnswer(answer)
    const questionsObj: IQuestion = {
      answer: correctAnswer,
      variants: [userAnswer],
      correct: 0
    }
    setQuestions(questions.concat([questionsObj]))
  }

  const checkAnswer = (answer: boolean) => {
    const color = answer ? RIGHT : WRONG
    setColorCheck(color)
    const currentWord = wordsArray[iterEng].id
    const answerStr = answer ? 'right' : 'wrong'
    audioAnswer(answer)
    void handleUserAnswer(currentWord as string, 'sprint', answerStr)
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
    const correctAnswer = wordsArray[iterEng]
    const userAnswer = wordsArray[iterRu]
    const answer = correctAnswer.word === userAnswer.word
    addAnswer(answer, userAnswer, correctAnswer)
  }
  const handleWrong = () => {
    const correctAnswer = wordsArray[iterEng]
    let userAnswer = wordsArray[iterRu]
    const answer = correctAnswer.word !== userAnswer.word
    if (answer) {
      userAnswer = correctAnswer
    } else {
      userAnswer =
        wordsArray[iterEng + 1] !== undefined
          ? wordsArray[iterEng + 1]
          : wordsArray[iterEng - 1]
    }
    addAnswer(answer, userAnswer, correctAnswer)
  }

  React.useEffect(() => {
    const onKeypress = (e: KeyboardEvent) => {
      if (e.key === '1') handleWrong()
      if (e.key === '2') handleRight()
    }

    document.addEventListener('keypress', onKeypress)

    return () => {
      document.removeEventListener('keypress', onKeypress)
    }
  })

  return (
    <div>
      <div className='sprint__keys-description'>{'Клавиша "1" - wrong, Клавиша "2" - right'}</div>
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
            <div className="question__ru">
              {wordsArray[iterRu].wordTranslate}
            </div>
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
        <div className="sprint__timer">
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
    </div>
  )
}

export default SprintQuestion

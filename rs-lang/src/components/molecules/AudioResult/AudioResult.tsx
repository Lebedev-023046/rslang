import React from 'react'
import './AudioResult.css'
import CircularProgress from '@mui/material/CircularProgress'
import { IData, IQuestion } from '../../../interfaces/IData'
import { BASE_URL, updateUserStats } from '../../../utils/Utils'
import Icon from '../../atoms/Icon/Icon'
import { Link } from 'react-router-dom'

interface AudioResultProps {
  answers: Array<IData | null>
  questions: IQuestion[]
}

const AudioResult: React.FC<AudioResultProps> = ({
  answers,
  questions
}) => {
  React.useEffect(() => {
    void updateUserStats(questions.length)
  }, [questions])

  const [resultPage, setResultPage] = React.useState(true)

  const correct: IData[] = []
  const mistakes: IData[] = []

  answers.forEach((answer, id) => {
    const answerWord = answer?.word
    if (questions[id].answer.word === answerWord) {
      correct.push(questions[id].answer)
    } else {
      mistakes.push(questions[id].answer)
    }
  })

  const correctPercent = Math.floor(correct.length / answers.length * 100)

  const handleSound = (audioUrl: string) => {
    const audio = new Audio(`${BASE_URL}${audioUrl}`)
    audio.volume = 0.1
    void audio.play()
  }

  return (
    <div className='audiocall__result result'>
      <div className='result__pages'>
        <button
          className={`result__page ${resultPage ? 'result__page_active' : ''}`}
          onClick={() => setResultPage(true)}
        >
          Result
        </button>
        <button
          className={`result__page ${resultPage ? '' : 'result__page_active'}`}
          onClick={() => setResultPage(false)}
        >
          Watch the words
        </button>
      </div>

      {resultPage &&
        <>
          <div className='result__header'>
            <h2>
              {
                correct.length > 7
                  ? 'Excellent!'
                  : correct.length > 5
                    ? 'Good!'
                    : 'You can better!'
              }
            </h2>
            <span className='result__info'>
              {correct.length} word(s) learned, {mistakes.length} word(s) in progress
            </span>
          </div>
          <div className='result__diagram'>
            <CircularProgress
              size={180}
              thickness={7}
              color={'primary'}
              variant='determinate'
              value={correctPercent}
            />
          </div>
        </>
      }

      {!resultPage &&
        <div className='result__results'>
          <div className='result__mistakes'>
            <div className='result__mistakes-header'>
              Mistakes
              <div className='result__amount'>{mistakes.length}</div>
            </div>
            <ul className='result__mistakes-list'>
              {mistakes.map(mistake => (
                <li
                  className='result__mistakes-item'
                  key={mistake.word}
                >
                  <button
                    className='question__small-audio'
                    onClick={() => handleSound(mistake.audio)}
                  >
                    <Icon
                      type='sound'
                      height='24'
                      width='24'
                    />
                  </button>
                  {mistake.word} - {mistake.wordTranslate}
                </li>
              ))}
            </ul>
          </div>

          <div className='result__correct'>
            <div className='result__correct-header'>
              Correct Answers
              <div className='result__amount'>{correct.length}</div>
            </div>
            <ul className='result__correct-list'>
              {correct.map(correct => (
                <li
                  className='result__correct-item'
                  key={correct.word}
                >
                  <button
                    className='question__small-audio'
                    onClick={() => handleSound(correct.audio)}
                  >
                    <Icon
                      type='sound'
                      height='24'
                      width='24'
                    />
                  </button>
                  {correct.word} - {correct.wordTranslate}
                </li>
              ))}
            </ul>
          </div>
        </div>
      }

      <div className='result__buttons'>
        <button
          className='play-again-btn'
          onClick={() => { window.location.reload() }}
        >
          Play again
        </button>
        <Link to='/TextBook'>
          <button className='go-to-btn'>
            Go to TextBook
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AudioResult

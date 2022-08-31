import React from 'react'
import './AudioQuestion.css'
import { IQuestion } from '../../../interfaces/IData'
import Icon from '../../atoms/Icon/Icon'
import { BASE_URL } from '../../../utils/Utils'

interface AudioQuestionProps {
  question: IQuestion
  done: boolean
  choice: string
  onNextStep: () => void
  onClickVariant: (id: number) => void
}

const AudioQuestion: React.FC<AudioQuestionProps> = ({
  question,
  done,
  choice,
  onNextStep,
  onClickVariant
}) => {
  const { answer, variants, correct } = question

  const audio = new Audio(`${BASE_URL}${answer.audio}`)
  audio.volume = 0.1

  const handleSound = () => {
    void audio.play()
  }

  return (
    <div className='audiocall__question'>
      {!done &&
        <>
          <button
            className='audiocall__big-audio'
            onClick={handleSound}
          >
            <Icon
              type='sound2'
              height='64'
              width='64'
              color='#6CA0FA'
            />
          </button>
          <div className='audiocall__variants'>
            {variants.map((variant, id) => (
              <button
                className='audiocall__variant'
                onClick={() => onClickVariant(id)}
                key={variant.word}
                id={id.toString()}
              >
                {id + 1}. {variant.wordTranslate}
              </button>
            ))}
          </div>
          <button
            className='audiocall__button'
            onClick={() => onClickVariant(5)}
            id='5'
          >
            I don&apos;t know
          </button>
        </>
      }

      {done &&
        <>
          <div className='audiocall__correct-card'>
            <div className="audiocall__img" style={{ backgroundImage: `url(${BASE_URL}${answer.image})` }}/>
            <div className='audiocall__sound-and-name'>
              <button
                className='audiocall__small-audio'
                onClick={handleSound}
              >
                <Icon
                  type='sound'
                  height='24'
                  width='25'
                />
              </button>
              <h3>{answer.word}</h3>
            </div>
          </div>
          <div className='audiocall__variants'>
            {variants.map((variant, id) => (
              <button
                className={
                  variants[+choice] === variant
                  ? variant === variants[correct]
                    ? 'audiocall__variant audiocall__variant_correct'
                    : 'audiocall__variant audiocall__variant_incorrect'
                  : variant === variants[correct]
                    ? 'audiocall__variant audiocall__variant_correct'
                    : 'audiocall__variant'
                }
                key={variant.word}
                id={id.toString()}
              >
                {++id}. {variant.wordTranslate}
              </button>
            ))}
          </div>
          <button
            className='audiocall__button'
            onClick={onNextStep}
            id='5'
          >
            Next
          </button>
        </>
      }
    </div>
  )
}

export default AudioQuestion

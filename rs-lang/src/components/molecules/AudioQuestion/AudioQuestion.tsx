import React from 'react'
import './AudioQuestion.css'
import { IQuestion } from '../../../interfaces/IData'
import Icon from '../../atoms/Icon/Icon'
import { BASE_URL } from '../../../utils/Utils'

interface AudioQuestionProps {
  question: IQuestion
  done: boolean
  choice: string
  onClickVariant: (id: number) => void
  onNextStep: () => void
}

const AudioQuestion: React.FC<AudioQuestionProps> = ({
  question,
  done,
  choice,
  onClickVariant,
  onNextStep
}) => {
  const { answer, variants, correct } = question

  const audio = new Audio(`${BASE_URL}${answer.audio}`)
  audio.volume = 0.1
  void audio.play()

  const handleSound = () => {
    void audio.play()
  }

  React.useEffect(() => {
    // TODO type the event
    const onKeypress = (e: any) => {
      if (!done) {
        if (e.key === '1') onClickVariant(0)
        if (e.key === '2') onClickVariant(1)
        if (e.key === '3') onClickVariant(2)
        if (e.key === '4') onClickVariant(3)
        if (e.key === '5') onClickVariant(4)
        if (e.key === ' ') onClickVariant(5)
      }
      if (done) {
        if (e.key === ' ') onNextStep()
      }
    }

    document.addEventListener('keypress', onKeypress)

    return () => {
      document.removeEventListener('keypress', onKeypress)
    }
  }, [done, onClickVariant, onNextStep])

  return (
    <div className='audiocall__question question'>
      {!done &&
        <>
          <button
            className='question__big-audio'
            onClick={handleSound}
          >
            <Icon
              type='sound2'
              height='64'
              width='64'
              color='#6CA0FA'
            />
          </button>
          <div className='question__variants'>
            {variants.map((variant, id) => (
              <button
                className='question__variant'
                onClick={() => onClickVariant(id)}
                key={variant.word}
                id={id.toString()}
              >
                {id + 1}. {variant.wordTranslate}
              </button>
            ))}
          </div>
          <button
            className='question__button'
            onClick={() => onClickVariant(5)}
            id='5'
          >
            I don&apos;t know
          </button>
        </>
      }

      {done &&
        <>
          <div className='question__correct-card'>
            <div
              className="question__img"
              style={{ backgroundImage: `url(${BASE_URL}${answer.image})` }}
            />
            <div className='question__sound-and-name'>
              <button
                className='question__small-audio'
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
          <div className='question__variants'>
            {variants.map((variant, id) => (
              <button
                className={
                  variants[+choice] === variant
                  ? variant === variants[correct]
                    ? 'question__variant question__variant_correct'
                    : 'question__variant question__variant_incorrect'
                  : variant === variants[correct]
                    ? 'question__variant question__variant_correct'
                    : 'question__variant'
                }
                key={variant.word}
                id={id.toString()}
              >
                {++id}. {variant.wordTranslate}
              </button>
            ))}
          </div>
          <button
            className='question__button'
            onClick={onNextStep}
          >
            Next
          </button>
        </>
      }
    </div>
  )
}

export default AudioQuestion

import React from 'react'
import './AudioChallengePage.css'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import DifficultyButton from '../../atoms/DifficultyButton/DifficultyButton'
import Icon from '../../atoms/Icon/Icon'
import Api from '../../../api/Api'
import { IData, IQuestion } from '../../../interfaces/IData'
import { ANSWERS_LIMIT, VARIANTS_LIMIT, shuffleArr, getRandomWordsFrom, getRandomPage } from '../../../utils/Utils'
import AudioQuestion from '../../molecules/AudioQuestion/AudioQuestion'
import AudioResult from '../../molecules/AudioResult/AudioResult'

const AudioChallengePage: React.FC = () => {
  const [difficulty, setDifficulty] = React.useState('0')
  const [loading, setLoading] = React.useState(false)
  const [game, setGame] = React.useState(false)
  const [result, setResult] = React.useState(false)

  const [questions, setQuestions] = React.useState<IQuestion[]>([])
  const [step, setStep] = React.useState(0)
  const question = questions[step]

  const [done, setDone] = React.useState(false)
  const [choice, setChoice] = React.useState('')
  const [userAnswers, setUserAnswers] = React.useState<Array<IData | null>>([])

  const handleDifficulty = (e: React.MouseEvent) => {
    setDifficulty((e.target as HTMLButtonElement).id)
  }

  const generateQuestions = async (group: string, page: string) => {
    setLoading(true)

    const words: IData[] = await Api.getWords(group, page)
    const answers: IData[] = getRandomWordsFrom(ANSWERS_LIMIT, words)
    const questions: IQuestion[] = []

    answers.forEach((answer) => {
      const variants = getRandomWordsFrom(VARIANTS_LIMIT, words, answer)
      const shuffledVariants = shuffleArr([...variants, answer])
      questions.push(
        {
          answer,
          variants: shuffledVariants,
          correct: shuffledVariants.indexOf(answer)
        }
      )
    })

    setQuestions(questions)
    setLoading(false)
  }

  const startGame = () => {
    setGame(true)
    void generateQuestions(difficulty, getRandomPage().toString())
  }

  const handleVariant = (id: number) => {
    if (id < 5) {
      setUserAnswers(userAnswers.concat(question.variants[id]))
    } else {
      setUserAnswers(userAnswers.concat(null))
    }

    // TODO get user's word, update its state

    setChoice(id.toString())
    setDone(true)
  }

  const handleNextStep = () => {
    if (step < 9) {
      setStep(step + 1)
    } else {
      setResult(true)
      // TODO update user stats
    }
    setDone(false)
    setChoice('')
  }

  return (
    <div className='wrapper'>
      <section className='audiocall'>
        <div className='container audiocall__container'>
          <div className='burger' onClick={() => { window.location.reload() }}>
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
          {!game && !loading && !result &&
            <div className='audiocall__start-screen'>
              <div className='audiocall__info'>
                <h2>Audio Challenge</h2>
                <p className='audiocall__text'>Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess.</p>
              </div>
              <div className='audiocall__difficulty'>
                <p className='audiocall__text'>Choose difficulty:</p>
                <div className='audiocall__buttons'>
                  <DifficultyButton
                    text='A1'
                    id={'0'}
                    active={difficulty === '0'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='A2'
                    id={'1'}
                    active={difficulty === '1'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='B1'
                    id={'2'}
                    active={difficulty === '2'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='B2'
                    id={'3'}
                    active={difficulty === '3'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='C1'
                    id={'4'}
                    active={difficulty === '4'}
                    onClick={handleDifficulty}
                  />
                  <DifficultyButton
                    text='C2'
                    id={'5'}
                    active={difficulty === '5'}
                    onClick={handleDifficulty}
                  />
                </div>
              </div>
              <Button
                text='Play'
                type='primary'
                onClick={startGame}
              />
            </div>
          }

          {loading &&
            <div className='audiocall__loading-screen'>
              <h2>Loding...</h2>
            </div>
          }

          {game && !loading && !result &&
            <div className='audiocall__game-screen'>
              <AudioQuestion
                question={question}
                done={done}
                choice={choice}
                onNextStep={handleNextStep}
                onClickVariant={handleVariant}
              />
            </div>
          }

          {game && !loading && result &&
            <div className='audiocall__result-screen'>
              <AudioResult
                answers={userAnswers}
                questions={questions}
              />
            </div>
          }
        </div>
      </section>
    </div>
  )
}

export default AudioChallengePage

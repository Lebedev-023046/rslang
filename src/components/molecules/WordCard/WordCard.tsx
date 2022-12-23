/* eslint-disable @typescript-eslint/no-misused-promises */
import './WordCard.css'
import soundImg from '../../../assets/sound_icon.svg'
import { IData } from '../../../interfaces/IData'
import { useContext } from 'react'
import { authContext } from '../../../context/AuthContext/AuthContext'
import { addDifficult, toggleDelete } from '../../../utils/Utils'

const BASE_URL = 'https://react-rslang-words.herokuapp.com/'

interface ICardProps {
    card: IData
    active: number
    isInProgress: boolean
    isDictionary: boolean
}

const colors = [
    'beginner-bg-color',
    'elementary-bg-color',
    'intermediate-bg-color',
    'upper-bg-color',
    'advanced-bg-color',
    'proficiency-bg-color',
    'difficult-bg-color',
    'inProgress-bg-color',
    'deleted-bg-color'
]

export function WordCard (props: ICardProps) {
    const { isAuth } = useContext(authContext)
    const playWordSounds = () => {
        const audios = [props.card.audio, props.card.audioMeaning, props.card.audioExample].map((path: string) => new Audio(`${BASE_URL}${path}`))
        const playItem = async (audio: HTMLAudioElement) => await new Promise<void>((resolve) => {
            void audio.play()
            audio.addEventListener('ended', () => resolve())
        })
        const subsPlay = async () => {
            for (let i = 0; i < audios.length; i++) {
                await playItem(audios[i])
            }
        }
        void subsPlay()
    }

    const firstButtonText = () => {
        if (!props.isDictionary) {
            return 'Mark as learning'
        } else {
            if (props.isInProgress) {
               return 'delete permanently'
            } else {
                return 'add to difficult words'
            }
        }
    }

    const firstButtonHandlers = async (wordID: string) => {
        if (!props.isDictionary) {
            await addDifficult(wordID, 'medium')
        } else {
            if (props.isInProgress) {
                await toggleDelete(wordID, true)
            } else {
                await addDifficult(wordID, 'hard')
            }
        }
    }

    const secondButtonText = () => {
        if (!props.isDictionary) {
            return 'add to difficult words'
        } else {
            if (props.isInProgress) {
               return 'delete from stydying'
            } else {
                return 'remove from deleted'
            }
        }
    }

    const secondButtonHandlers = async (wordID: string) => {
        if (!props.isDictionary) {
            await addDifficult(wordID, 'hard')
        } else {
            if (props.isInProgress) {
                await addDifficult(wordID, 'easy')
            } else {
                await toggleDelete(wordID, false)
            }
        }
    }

    return (
        <div id={ props.card._id } className={ `word-card-container ${props.isDictionary && !props.isInProgress ? colors[8] : ''}  ${props.isDictionary && props.isInProgress ? colors[7] : ''} ${props.active !== 6 ? colors[props.active] : 'difficult-bg-color'}`}>
            <div className="card-img" style={{ backgroundImage: `url(${BASE_URL}${props.card.image})` }}/>
            <div className="card-info">
                <div className="card-info-block">
                    <div className="word-info">
                        <div className="word-common">
                            <div className="word">{ props.card.word }</div>
                            <div className="transc">{ props.card.transcription }</div>
                        </div>
                        <div className="word-sound" onClick={playWordSounds}>
                                <img className='sound-img' src={soundImg} alt="sound-icon" />
                        </div>
                    </div>
                    <div className="word-translate">{ props.card.wordTranslate }</div>
                    <div className="word-phrases">
                        <div className="phrase1">
                            <p className="sentense1" dangerouslySetInnerHTML={{ __html: props.card.textMeaning }}></p>
                            <p className="sentense-translate1" dangerouslySetInnerHTML={{ __html: props.card.textMeaningTranslate }}></p>
                        </div>
                        <div className="phrase2">
                            <p className="sentense2" dangerouslySetInnerHTML={{ __html: props.card.textExample }}></p>
                            <p className="sentense-translate2" dangerouslySetInnerHTML={{ __html: props.card.textExampleTranslate }}></p>
                        </div>
                    </div>
                    { isAuth && <div className="word-buttons">

                        <button className='btnWordCard' onClick={ async (e) => {
                            const wordID = e.currentTarget.parentElement?.parentElement?.parentElement?.parentElement?.id as string
                            void firstButtonHandlers(wordID)
                        }}>{ firstButtonText()}</button>

                        <button className='btnWordCard' onClick={ async (e) => {
                            e.currentTarget.parentElement?.parentElement?.parentElement?.parentElement?.classList.add(colors[6])
                            const wordID = e.currentTarget.parentElement?.parentElement?.parentElement?.parentElement?.id as string
                            void secondButtonHandlers(wordID)
                        }}>{secondButtonText()}</button>

                    </div>}
                </div>
            </div>
        </div>
    )
}

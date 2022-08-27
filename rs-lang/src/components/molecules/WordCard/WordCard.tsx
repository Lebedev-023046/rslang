import './WordCard.css'
import soundImg from '../../../assets/sound_icon.svg'
import { IData } from '../../../interfaces/IData'

const BASE_URL = 'https://react-rslang-words.herokuapp.com/'

interface ICardProps {
    card: IData
}

export function WordCard (props: ICardProps) {
    return (
        <div className="word-card-container">
            <div className="card-img" style={{ backgroundImage: `url(${BASE_URL}${props.card.image})` }}></div>
            <div className="card-info">
                <div className="card-info-block">
                    <div className="word-info">
                        <div className="word-common">
                            <div className="word">{ props.card.word }</div>
                            <div className="transc">{ props.card.transcription }</div>
                        </div>
                        <div className="word-sound">
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
                    <div className="word-buttons">
                        <button className='btnWordCard'>Mark as learned</button>
                        <button className='btnWordCard'>Add to difficult words</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

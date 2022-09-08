import { IData } from '../../../interfaces/IData'
import { WordsContainer } from '../wordsContainer/wordsContainer'
import './DictionaryBlock.css'

interface IDictionaryBlockProps {
    isInProgress: boolean
    setInProgress: (e: boolean) => void
    words: IData[]
    active: number
    isDictionary: boolean
}

export function DictionaryBlock ({ isInProgress, setInProgress, words, active, isDictionary }: IDictionaryBlockProps) {
    return (
        <div>
            <div className="buttons">
                <div style={{ textAlign: 'center' }} className={`btnLevel ${isInProgress ? 'btnLevel-active inProgress-bg-color' : ''}`} onClick={() => setInProgress(true)}>Words In Progress</div>
                <div style={{ textAlign: 'center' }} className={`btnLevel ${isInProgress ? '' : 'btnLevel-active inProgress-bg-color'}`} onClick={() => setInProgress(false)}>Deleted Words</div>
            </div>
            <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto', padding: '3rem 0 ' }}>
                <WordsContainer isDictionary={isDictionary} isInProgress={isInProgress} words={words} active={active}/>
            </div>
        </div>
    )
}

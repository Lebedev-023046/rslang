import { IData } from '../../../interfaces/IData'
import { WordCard } from '../../molecules/WordCard/WordCard'

interface WordsContainerProps {
    words: IData[]
    active: number
    isInProgress: boolean
    isDictionary: boolean
}

export function WordsContainer ({ words, active, isInProgress, isDictionary }: WordsContainerProps) {
    return (
        <div className="wordSet">
            { words.map((card) =>
                <WordCard isDictionary={isDictionary} isInProgress={isInProgress} active={active} card={card} key={card._id}/>
            )}
        </div>
    )
}

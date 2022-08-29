import { IData } from '../../../interfaces/IData'
import { WordCard } from '../../molecules/WordCard/WordCard'

interface WordsContainerProps {
    words: IData[]
}

export function WordsContainer ({ words }: WordsContainerProps) {
    return (
        <div className="wordSet">
            { words.map(card =>
                <WordCard card={card} key={card.id}/>
            )}
        </div>
    )
}

import { IData } from '../../../interfaces/IData'
import { WordCard } from '../../molecules/WordCard/WordCard'

interface WordsContainerProps {
    words: IData[]
    active: number
}

export function WordsContainer ({ words, active }: WordsContainerProps) {
    return (
        <div className="wordSet">
            { words.map((card) =>
                <WordCard active={active} card={card} key={card._id}/>
            )}
        </div>
    )
}

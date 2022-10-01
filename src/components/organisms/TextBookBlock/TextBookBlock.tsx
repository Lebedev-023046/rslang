import { Pagination } from '@mui/material'
import { IData } from '../../../interfaces/IData'
import { ButtonLevelsBlock } from '../../molecules/ButtonLevelsBlock/ButtonLevelsBlock'
import { CardSkeletonContainer } from '../../molecules/CardSkeleton/CardSkeleton'
import { WordsContainer } from '../wordsContainer/wordsContainer'

interface ITextBookBlockProps {
    page: number
    setPage: (e: number) => void
    isLoading: boolean
    active: number
    setActive: (e: number) => void
    words: IData[]
}

export function TextBookBlock ({ page, setPage, isLoading, active, setActive, words }: ITextBookBlockProps) {
    return (
        <div>
            <div className="pagination">
                <Pagination count={active !== 6 ? 30 : 1} size="large" page={page} onChange={(_, num) => {
                    setPage(num)
                    localStorage.setItem('page', num.toString())
                }}/>
            </div>
            <div className="words-container">
                { isLoading ? <CardSkeletonContainer/> : <WordsContainer isDictionary={false} isInProgress={false} active={active} words={words}/>}
                <div className="wordLevel">
                    <ButtonLevelsBlock active={active} setActive={setActive} />
                </div>
            </div>
        </div>
    )
}

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
    totalCount: number
}

export function TextBookBlock ({ page, setPage, isLoading, active, setActive, words, totalCount }: ITextBookBlockProps) {
    return (
        <div>
            <div className="pagination">
                <Pagination count={totalCount / 20} size="large" page={page} onChange={(_, num) => {
                    setPage(num)
                    localStorage.setItem('page', num.toString())
                }}/>
            </div>
            <div className="words-container">
                { isLoading ? <CardSkeletonContainer/> : <WordsContainer active={active} words={words}/>}
                <div className="wordLevel">
                    <ButtonLevelsBlock active={active} setActive={setActive} />
                </div>
            </div>
        </div>
    )
}

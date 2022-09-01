import { Pagination } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import Api from '../../../api/Api'
import { signInUpContext } from '../../../context/ModalContext/ModalContext'
import { IData } from '../../../interfaces/IData'
import Button from '../../atoms/Button/Button'
import { ButtonLevelsBlock } from '../../molecules/ButtonLevelsBlock/ButtonLevelsBlock'
import { CardSkeletonContainer } from '../../molecules/CardSkeleton/CardSkeleton'
import Nav from '../../molecules/Nav/Nav'
import Footer from '../../organisms/Footer/Footer'
import Header from '../../organisms/Header/Header'
import { Modal } from '../../organisms/Modal/Modal'
import { SignUpInForm } from '../../organisms/signUpInForm/signUpInForm'
import { WordsContainer } from '../../organisms/wordsContainer/wordsContainer'
import './TextBook.css'

export function TextBook () {
    const { signInUpModal, openSIU, closeSIU } = useContext(signInUpContext)
    const [words, setWords] = useState<IData[]>([])
    const [active, setActive] = useState(0)
    const [isLoading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const fectchWords = async (activeBtn: number, activePage: number) => {
        setWords(await Api.getWords(String(activeBtn), String(activePage - 1)))
    }
    useEffect(() => {
        void fectchWords(active, page).then(() => setLoading(false))
    }, [active, page])

    return (
        <div className="wrapper">
            { signInUpModal && <Modal onClose={closeSIU}><SignUpInForm /></Modal> }
            <Header>
                <h2>RS Lang</h2>
                <Nav>
                    <span className='nav__link'>Dictionary</span>
                    <span className='nav__link'>TextBook</span>
                    <span className='nav__link'>Audio Challenge</span>
                    <span className='nav__link'>Sprint</span>
                    <span className='nav__link'>Statistics</span>
                    {/* <Link className='nav__link' to='#'>Why Us</Link> */}
                    {/* <Link className='nav__link' to='#'>Games</Link> */}
                    {/* <Link className='nav__link' to='#'>Team</Link> */}
                    {/* <Link className='nav__link' to='#'>Textbook</Link> */}
                    </Nav>
                    <Button
                    text='Get Started'
                    type='secondary'
                    onClick={openSIU}
                />
            </Header>
            <div className='conteiner'>
                <main className="main">
                    <div className="pagination">
                        <Pagination count={30} size="large" page={page} onChange={(_, num) => setPage(num)}/>
                    </div>
                    <div className="words-container">
                        { isLoading ? <CardSkeletonContainer/> : <WordsContainer words={words}/>}
                        <div className="wordLevel">
                            <ButtonLevelsBlock active={active} setActive={setActive} />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
            </div>
    )
}

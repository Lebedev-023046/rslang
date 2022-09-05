import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../../api/Api'
import { authContext } from '../../../context/AuthContext/AuthContext'
import { signInUpContext } from '../../../context/ModalContext/ModalContext'
import { IData } from '../../../interfaces/IData'
import Button from '../../atoms/Button/Button'
import { NameBlock } from '../../atoms/NameBlock/NameBlock'
import Nav from '../../molecules/Nav/Nav'
import Footer from '../../organisms/Footer/Footer'
import Games from '../../organisms/Games/Games'
import Header from '../../organisms/Header/Header'
import { Modal } from '../../organisms/Modal/Modal'
import { SignUpInForm } from '../../organisms/signUpInForm/signUpInForm'
import { TextBookBlock } from '../../organisms/TextBookBlock/TextBookBlock'
import './TextBook.css'

export function TextBook () {
    const { isAuth } = useContext(authContext)
    const { signInUpModal, openSIU, closeSIU } = useContext(signInUpContext)
    const [words, setWords] = useState<IData[]>([])
    const [active, setActive] = useState((localStorage.getItem('active') != null) ? Number(localStorage.getItem('active')) : 0)
    const [page, setPage] = useState((localStorage.getItem('page') != null) ? Number(localStorage.getItem('page')) : 1)
    const [isLoading, setLoading] = useState(true)
    const [totalCount, setTotalCount] = useState(600)
    const fectchUserWords = async (activeBtn: number, activePage: number) => {
        activeBtn !== 6
            ? await Api.getAggregatedWords(String(activeBtn), String(activePage - 1), '20').then(data => {
                setWords(data[0].paginatedResults)
                setTotalCount(data[0].totalCount[0].count)
            })
            : await Api.getAggregatedWords(String(activeBtn), String(1 - 1), '20', 'hard').then(data => setWords(data[0].paginatedResults))
        }
    // const fectchWords = async (activeBtn: number, activePage: number) => {
    //     await Api.getWords(String(activeBtn), String(activePage))
    // }

        useEffect(() => {
            // eslint-disable-next-line no-void
            void fectchUserWords(active, page).then(() => setLoading(false))
        }, [active, isAuth, page])

    return (
        <div className="wrapper">
            { signInUpModal && <Modal onClose={closeSIU}><SignUpInForm /></Modal> }
            <Header>
                <h2>RS Lang</h2>
                <Nav>
                    <span className='nav__link'>Dictionary</span>
                    <span className='nav__link'>Audio Challenge</span>
                    <span className='nav__link'>Sprint</span>
                    <span className='nav__link'>Statistics</span>
                    {/* <Link className='nav__link' to='#'>Why Us</Link> */}
                    {/* <Link className='nav__link' to='#'>Games</Link> */}
                    {/* <Link className='nav__link' to='#'>Team</Link> */}
                    <Link className='nav__link' to='#'>Textbook</Link>
                    </Nav>
                    { isAuth
                        ? <NameBlock/>
                        : <Button
                            text='Get Started'
                            type='secondary'
                            onClick={openSIU}
                        />}
            </Header>
            <div className='conteiner'>
                <main className="main">
                    <TextBookBlock page={page} setPage={setPage} isLoading={isLoading} active={active} setActive={setActive} words={words} totalCount={totalCount} />
                    <Games/>
                </main>
            </div>
            <Footer />
            </div>
    )
}

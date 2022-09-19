import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../../api/Api'
import { authContext } from '../../../context/AuthContext/AuthContext'
import { signInUpContext } from '../../../context/ModalContext/ModalContext'
import { IData } from '../../../interfaces/IData'
import Button from '../../atoms/Button/Button'
import { NameBlock } from '../../atoms/NameBlock/NameBlock'
import Nav from '../../molecules/Nav/Nav'
import { DictionaryBlock } from '../../organisms/DictionaryBlock/DictionaryBlock'
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
    const [isDictionary, setIsDictionary] = useState(false)
    const [isInProgress, setInProgress] = useState(true)

    const fetchUserWords = async (activeBtn: number, activePage: number) => {
        activeBtn !== 6
            ? await Api.getAggregatedWords(String(activeBtn), String(activePage - 1), '20').then(data => {
                setWords(data[0].paginatedResults)
            })
            : await Api.filterDifficult().then(data => setWords(data[0].paginatedResults))
        }

    const fectchWords = async (activeBtn: number, activePage: number) => {
        await Api.getWords(String(activeBtn), String(activePage - 1)).then(data => setWords(data))
    }

    const fetchDictionaryWords = async (isInProgress: boolean) => {
        if (isInProgress) {
            await Api.filterInProgress().then(data => setWords(data[0].paginatedResults))
        } else {
            await Api.filterDeleted().then(data => setWords(data[0].paginatedResults))
        }
    }

        useEffect(() => {
                if (isAuth) {
                    if (isDictionary) {
                        void fetchDictionaryWords(isInProgress).then(() => setLoading(false))
                    } else {
                        void fetchUserWords(active, page).then(() => setLoading(false))
                    }
                } else {
                    void fectchWords(active, page).then(() => setLoading(false))
                }
            }, [active, page, isAuth, isDictionary, isInProgress])

    return (
        <div className="wrapper">
            { signInUpModal && <Modal onClose={closeSIU}><SignUpInForm /></Modal> }
            <Header>
            <h2>RS Lang</h2>
                <Nav>
                    <Link className='nav__link' to='/'>HomePage</Link>
                    <Link className='nav__link' to={
                        [0, 1, 2, 3, 4, 5].includes(active) ? '/AudioChallenge' + active.toString() : '/AudioChallenge'
                    }>Audio Challenge</Link>
                    <Link className='nav__link' to={
                        [0, 1, 2, 3, 4, 5].includes(active) ? '/Sprint' + active.toString() : '/Sprint'
                    }>Sprint</Link>
                    <Link className='nav__link' to='/Statistics'>Statistics</Link>
                    <Link className='nav__link' to='##'>Textbook</Link>
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
                { isAuth && <div className='btnLevel dictionary' style={{ textAlign: 'center', margin: '0 auto' }} onClick={() => setIsDictionary(!isDictionary)}>{ isDictionary ? 'Dictionary' : 'Textbook' }</div>}
                    { !isDictionary
                        ? <TextBookBlock page={page}
                            setPage={setPage}
                            isLoading={isLoading}
                            active={active}
                            setActive={setActive}
                            words={words} />
                        : <DictionaryBlock isDictionary={isDictionary} words={words} active={active} isInProgress={isInProgress} setInProgress={setInProgress}/>}
                    <Games group={active}/>
                </main>
            </div>
            <Footer />
            </div>
    )
}

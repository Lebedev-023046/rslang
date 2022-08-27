import { Pagination } from '@mui/material'
// import { Stack } from '@mui/system'
import { useWords } from '../../../hooks/useWords'
import Button from '../../atoms/Button/Button'
import { ButtonLevelsBlock } from '../../molecules/ButtonLevelsBlock/ButtonLevelsBlock'
import Nav from '../../molecules/Nav/Nav'
import { WordCard } from '../../molecules/WordCard/WordCard'
import Footer from '../../organisms/Footer/Footer'
import Header from '../../organisms/Header/Header'
import './TextBook.css'

export function TextBook () {
    const { words } = useWords()

    return (
        <div className="wrapper">
            <Header>
                <h2>RS Lang</h2>
                <Nav>
                    <span className='nav__link'>Why Us</span>
                    <span className='nav__link'>Games</span>
                    <span className='nav__link'>Team</span>
                    <span className='nav__link'>Why Us</span>
                    {/* <Link className='nav__link' to='#'>Why Us</Link> */}
                    {/* <Link className='nav__link' to='#'>Games</Link> */}
                    {/* <Link className='nav__link' to='#'>Team</Link> */}
                    {/* <Link className='nav__link' to='#'>Textbook</Link> */}
                    </Nav>
                    <Button
                    text='Get Started'
                    type='secondary'
                    onClick={() => {}}
                />
            </Header>
            <div className='conteiner'>
                <main className="main">
                    <div className="pagination">
                        <Pagination count={20} size="large" />
                    </div>
                    <div className="words-container">
                        <div className="wordSet">
                            { words.map(card =>
                                <WordCard card={card} key={card.id}/>
                            )}
                        </div>
                        <div className="wordLevel">
                            <ButtonLevelsBlock />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
            </div>
    )
}

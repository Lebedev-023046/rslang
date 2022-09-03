import React from 'react'
import './StatisticsPage.css'
import Header from '../../organisms/Header/Header'
import Nav from '../../molecules/Nav/Nav'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'

const StatisticsPage: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header>
        <h2>RS Lang</h2>
        <Nav>
          <Link className='nav__link' to='#'>Dictionary</Link>
          <Link className='nav__link' to='#'>Textbook</Link>
          <Link className='nav__link' to='/AudioChallenge'>Audio Challenge</Link>
          <Link className='nav__link' to='#'>Sprint</Link>
          <Link className='nav__link nav__link_active' to='/Statistics'>Statistics</Link>
        </Nav>
        <Button
          text='Exit'
          type='secondary'
          // TODO button should log out user of the account
          onClick={() => {}}
        />
      </Header>
    </div>
  )
}

export default StatisticsPage

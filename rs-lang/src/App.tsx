import React from 'react'
import MainPage from './components/templates/MainPage/MainPage'
import AudioChallengePage from './components/templates/AudioChallengePage/AudioChallengePage'
import { Route, Routes } from 'react-router-dom'
import StatisticsPage from './components/templates/StatisticsPage/StatisticsPage'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/AudioChallenge' element={ <AudioChallengePage /> } />
        <Route path='/Statistics' element={ <StatisticsPage /> } />
    </Routes>
  )
}

export default App

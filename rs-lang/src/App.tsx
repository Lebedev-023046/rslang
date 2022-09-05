import React from 'react'
import MainPage from './components/templates/MainPage/MainPage'
import AudioChallengePage from './components/templates/AudioChallengePage/AudioChallengePage'
import SprintPage from './components/templates/Sprint/SprintPage/SprintPage'
import { Route, Routes } from 'react-router-dom'
import { TextBook } from './components/templates/TextBook/TextBook'
import StatisticsPage from './components/templates/StatisticsPage/StatisticsPage'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/TextBook' element={ <TextBook /> } />
        <Route path='/AudioChallenge' element={ <AudioChallengePage /> } />
        <Route path="/Sprint" element={<SprintPage />} />
        <Route path="/Statistics" element={<StatisticsPage />} />
    </Routes>
  )
}

export default App

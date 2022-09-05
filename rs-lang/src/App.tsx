import React from 'react'
import MainPage from './components/templates/MainPage/MainPage'
import AudioChallengePage from './components/templates/AudioChallengePage/AudioChallengePage'
import { Route, Routes } from 'react-router-dom'
import { TextBook } from './components/templates/TextBook/TextBook'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/AudioChallenge' element={ <AudioChallengePage /> } />
        <Route path='/TextBook' element={ <TextBook /> } />
    </Routes>
  )
}

export default App

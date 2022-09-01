import React from 'react'
import MainPage from './components/templates/MainPage/MainPage'
import AudioChallengePage from './components/templates/AudioChallengePage/AudioChallengePage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/AudioChallenge' element={ <AudioChallengePage /> } />
    </Routes>
  )
}

export default App

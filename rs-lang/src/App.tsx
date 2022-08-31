import React from 'react'
import MainPage from './components/templates/MainPage/MainPage'
import AudioChallengePage from './components/templates/AudioChallengePage/AudioChallengePage'
import SprintPage from './components/templates/Sprint/SprintPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/AudioChallenge' element={ <AudioChallengePage /> } />
        <Route path='/Sprint' element={ <SprintPage /> } />
    </Routes>
  )
}

export default App

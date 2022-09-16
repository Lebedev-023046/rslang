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
      <Route path="/" element={<MainPage />} />
      <Route path="/TextBook" element={<TextBook />} />
      <Route path="/AudioChallenge" element={<AudioChallengePage group={1} />} />
      <Route path="/AudioChallenge0" element={<AudioChallengePage group={0} />} />
      <Route path="/AudioChallenge1" element={<AudioChallengePage group={1} />} />
      <Route path="/AudioChallenge2" element={<AudioChallengePage group={2} />} />
      <Route path="/AudioChallenge3" element={<AudioChallengePage group={3} />} />
      <Route path="/AudioChallenge4" element={<AudioChallengePage group={4} />} />
      <Route path="/AudioChallenge5" element={<AudioChallengePage group={5} />} />
      <Route path="/Sprint" element={<SprintPage />} />
      <Route path="/Statistics" element={<StatisticsPage />} />
    </Routes>
  )
}

export default App

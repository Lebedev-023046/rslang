import './styles/reset.css'
import './styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Api from './api/Api'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
void (async () => {
  const check = await Api.createUser({
    name: 'Viktor Stoyanov3',
    email: 'vistsssk@rsschool.net',
    password: 'qwerty'
  })
  console.log(check)
})()

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
  // const check = await Api.createUser({
  //   name: 'string',
  //   email: 'a@a.net',
  //   password: '12345678'
  // })

  // console.log(await Api.signIn({ email: 'a@a.net', password: '12345678' }))

  const check = await Api.deleteUser('6307edc30cc135001679a2df')
  console.log(check)
})()

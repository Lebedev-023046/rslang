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
  // const id = localStorage.getItem('id') as string
  // const check = await Api.getUser(id)
  // const date = new Date().toISOString()
  // const wordDescription = {
  //   difficulty: 'hard',
  //   optional: {
  //     dataAdd: date
  //   }
  // }
  // console.log(await Api.createUserWords('5e9f5ee35eb9e72bsc21af4a5', wordDescription))
  // console.log(localStorage.getItem('signinLang'))
  // console.log(new Date().getTime())
  // console.log(id)
  // const check = await Api.updateUserWord('5e9f5ee35eb9e72bc21af4a0', wordDescription)
  const check = await Api.deleteUserWord('5e9f5ee35eb9e72bc21af4a4')
  const check2 = await Api.getUserWords()
  // const check = await Api.deleteUser('630801e50cc135001679a2e1')
  console.log(check)
  console.log(check2)
})()

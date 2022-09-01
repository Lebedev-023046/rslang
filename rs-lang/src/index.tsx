import './styles/reset.css'
import './styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ModalState } from './context/ModalContext/ModalContext'
import { AuthState } from './context/AuthContext/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <AuthState>
      <ModalState>
          <App />
      </ModalState>
    </AuthState>
  </BrowserRouter>
)

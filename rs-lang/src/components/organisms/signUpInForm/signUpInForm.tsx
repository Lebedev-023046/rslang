import { FormBody } from '../../molecules/Registration/FormBody/FormBody'
import './signUpInForm.css'
import React, { useContext, useState } from 'react'
import { authContext } from '../../../context/AuthContext/AuthContext'
import { signInUpContext } from '../../../context/ModalContext/ModalContext'
import { SuccessfulSignUp } from '../../molecules/Registration/successSign/SuccessfulSign'

export function SignUpInForm () {
  const [isLogInPage, setLogInPage] = useState(false)

  const [showPassword, setShowPassword] = useState(true)
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailField, setEmailField] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordField, setPasswordField] = useState(false)

  const [loginMessage, setLoginMessage] = useState('')

  const [success, setSuccess] = useState(false)

  const { enter } = useContext(authContext)

  const { closeSIU } = useContext(signInUpContext)
  return (
    <div className='modal-content'>
      { !success
          ? <FormBody
              isLogInPage={isLogInPage}
              setLogInPage={setLogInPage}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              emailError={emailError}
              setEmailError={setEmailError}
              emailField={emailField}
              setEmailField={setEmailField}
              password={password}
              setPassword={setPassword}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
              passwordField={passwordField}
              setPasswordField={setPasswordField}
              loginMessage={loginMessage}
              setLoginMessage={setLoginMessage}
              enter={enter}
              closeSIU={closeSIU}
              setSuccess={setSuccess}
            />
          : <SuccessfulSignUp/>}
    </div>
  )
}

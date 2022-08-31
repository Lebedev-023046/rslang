import './FormBody.css'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  TextField,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  createTheme,
  Button,
  Typography
} from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import Api from '../../../api/Api'
import React, { useContext, useState } from 'react'
import { authContext } from '../../../context/AuthContext/AuthContext'
import { signInUpContext } from '../../../context/ModalContext/ModalContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6822'
    }
  }
})

export function FormBody () {
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

  const { enter } = useContext(authContext)

  const { closeSIU } = useContext(signInUpContext)

  const handleTextField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'email':
        setEmailField(true)
        break
      case 'password':
        setPasswordField(true)
        break
    }
  }

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect Email')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value)
    if (e.target.value.length < 8) {
      setPasswordError('Password must be at least 8 characters length')
    } else {
      setPasswordError('')
    }
  }

  const submitData = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (isLogInPage) {
      try {
        // Api.signIn({ email, password }).then(() => enter()).finally(() => closeSIU())
        void Api.signIn({ email, password }).then(data => {
          switch (typeof data) {
            case 'string':
              setLoginMessage('Incorrect email or password')
              break
            case 'object':
                enter()
                closeSIU()
              break
            default:
              break
          }
        })
      } catch (error) {
        throw new Error('Incorrect email or password')
      }
    } else {
      try {
        Api.createUser({ name, email, password }).finally(() => closeSIU())
      } catch (error) {
        throw new Error('Incorrect email or password')
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="form-header">
          <Typography
            align='center'
            fontSize='2.4rem'
            fontWeight='700'
            lineHeight='2.8rem'
            mb='1rem'>
              { isLogInPage ? 'Sign In' : 'Sign Up'}
          </Typography>
          <Typography
            align='center'
            color='#FF6822'
            fontSize='2rem'
            lineHeight='1.5rem'
            mb='2.5rem'>
              { isLogInPage ? '' : 'Get access to all the features'}
          </Typography>
      </div>
      <form onSubmit={submitData} className='text-field-area'>
        { !isLogInPage && <TextField
              className='text-field'
              autoComplete='off'
              label={<span style={{ fontSize: 16 }}>Name</span>}
              variant='outlined'
              type='text'
              value={name}
              onChange={event => setName(event?.target.value)}
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              required
          />}
          { !(loginMessage.length === 0) && <div style={{ color: 'red' }}>{ loginMessage }</div> }
          {(emailField && emailError) && <div style={{ color: 'red' }}>{ emailError }</div>}
          <TextField
              className='text-field'
              autoComplete='off'
              label={<span style={{ fontSize: 16 }}>Email</span>}
              variant='outlined'
              type='email'
              name='email'
              value={email}
              onChange={event => emailHandler(event)}
              onBlur={event => handleTextField(event)}
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              required
          />

          {(passwordField && passwordError) && <div style={{ color: 'red' }}>{ passwordError }</div>}
          <FormControl id='password-line' className='text-field' variant='outlined' required>
              <InputLabel sx={{
                fontSize: 16
              }} htmlFor='password-line' size='normal'>Password</InputLabel>
              <OutlinedInput
                  type={showPassword ? 'password' : 'text'}
                  name='password'
                  autoComplete='on'
                  value={password}
                  onChange={event => passwordHandler(event)}
                  onBlur={event => handleTextField(event)}
                  inputProps={{ style: { fontSize: 16 } }}
                  endAdornment={
                      <InputAdornment position='end'>
                          <IconButton sx={{ transform: 'scale(1.5)' }}
                              onClick={() => setShowPassword((prev) => !prev)}
                          >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                  }
                  label={<span style={{ fontSize: 14 }}>Password</span>}
              />
          </FormControl>
          <Button sx={{ fontSize: '1.6rem', color: '#ffffff', borderRadius: '10px' }} type='submit' variant='contained' color='primary'>
            { isLogInPage ? 'sign in' : 'sign up'}
          </Button>
      </form>
      <div className="form-footer">
          <Typography fontSize='1em' className='bottom-text'>
            { isLogInPage ? 'Don`t you already have an account?' : 'Do you already have an account?'}
            <span className='log-in' onClick={() => {
              setLogInPage(prev => !prev)
              setName('')
              setEmail('')
              setPassword('')
            }}>
              { isLogInPage ? 'Sign Up' : 'Sign in'}</span>
          </Typography>
      </div>

    </ThemeProvider>
  )
}

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
  createTheme
} from '@mui/material'
import Button from '../../../atoms/Button/Button'
import { ThemeProvider } from '@emotion/react'
import { useContext, useState } from 'react'
import { signInUpContext } from '../../../../context/ModalContext/ModalContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6822'
    }
  }
})

export function FormBody () {
  const [showPassword, setShowPassword] = useState(true)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { closeSIU } = useContext(signInUpContext)

  return (
    <ThemeProvider theme={theme}>
      <article className='text-field-area'>
          <TextField
              className='text-field'
              autoComplete='off'
              label='Name'
              variant='outlined'
              type='text'
              value={name}
              onChange={event => setName(event?.target.value)}
              required
          />
          <TextField
              className='text-field'
              autoComplete='off'
              label='Email'
              variant='outlined'
              type='email'
              value={email}
              onChange={event => setEmail(event?.target.value)}
              required
          />

          <FormControl className='text-field' variant='outlined' required>
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                  type={showPassword ? 'password' : 'text'}
                  name='password'
                  autoComplete='on'
                  value={password}
                  onChange={event => setPassword(event?.target.value)}
                  endAdornment={
                      <InputAdornment position='end'>
                          <IconButton
                              onClick={() => setShowPassword((prev) => !prev)}
                          >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                  }
                  label='Password'
              />
          </FormControl>

          <Button
              text='Sign up for free'
              type='primary'
              small={false}
              disabled={false}
              onClick={closeSIU}
          />
      </article>
    </ThemeProvider>
  )
}

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
              label={<span style={{ fontSize: 16 }}>Name</span>}
              variant='outlined'
              type='text'
              value={name}
              onChange={event => setName(event?.target.value)}
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              required
          />
          <TextField
              className='text-field'
              autoComplete='off'
              label={<span style={{ fontSize: 16 }}>Email</span>}
              variant='outlined'
              type='email'
              value={email}
              onChange={event => setEmail(event?.target.value)}
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              required
          />

          <FormControl id='password-line' className='text-field' variant='outlined' required>
              <InputLabel sx={{
                fontSize: 16
              }} htmlFor='password-line' size='normal'>Password</InputLabel>
              <OutlinedInput
                  type={showPassword ? 'password' : 'text'}
                  name='password'
                  autoComplete='on'
                  value={password}
                  onChange={event => setPassword(event?.target.value)}
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

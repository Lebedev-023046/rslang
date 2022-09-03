import './SuccessfulSign.css'
import suclReg from '../../../../assets/icons/suclReg.svg'
import { Button, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { signInUpContext } from '../../../../context/ModalContext/ModalContext'
import { useContext } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4ead5a'
    }
  }
})

export function SuccessfulSignUp () {
    const { closeSIU } = useContext(signInUpContext)

    return (
        <ThemeProvider theme={theme}>
          <div className='sucl-reg-container'>
            <img src={suclReg} className="sucl-reg-img" alt="suclReg" />
            <div className='sucl-reg-text'>You have successfully signed in</div>
            <Button onClick={() => {
              closeSIU()
              window.location.reload()
            }} style={{ color: '#4ead5a' }} sx={{ fontSize: '1.6rem', color: '#ffffff', borderRadius: '10px' }} variant='outlined'>
                Close
            </Button>
          </div>
        </ThemeProvider>
    )
}

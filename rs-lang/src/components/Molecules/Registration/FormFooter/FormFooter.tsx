import { Typography } from '@mui/material'
import './FormFooter.css'

export function FormFooter () {
  return (
    <Typography fontSize='1em' className='bottom-text'>Do you already have an account?
      <span className='log-in'>Log in</span>
    </Typography>
  )
}

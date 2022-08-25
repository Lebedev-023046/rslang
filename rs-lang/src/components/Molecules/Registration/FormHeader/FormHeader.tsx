/* eslint-disable no-tabs */
import { Typography } from '@mui/material'

export function FormHeader () {
  return (
        <div className="form-header">
            <Typography
            align='center'
            fontSize='2.4rem'
            fontWeight='700'
            lineHeight='2.8rem'
            mb='1rem'>
            Create Individual Account
            </Typography>
            <Typography
            align='center'
            color='#FF6822'
            fontSize='2rem'
            lineHeight='1.5rem'
            mb='2.5rem'
            >
            Get access to all the features
            </Typography>
        </div>
  )
}

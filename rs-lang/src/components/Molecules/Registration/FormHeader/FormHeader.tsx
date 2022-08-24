/* eslint-disable no-tabs */
import { Typography } from '@mui/material'

export function FormHeader () {
  return (
        <div className="form-header">
            <Typography
            align='center'
            fontSize='1.5rem'
            lineHeight='1.875rem'
            mb='0.625rem'>
            Create Individual Account
            </Typography>
            <Typography
            align='center'
            color='#FF6822'
            lineHeight='1.5rem'
            mb='2.5rem'
            >
            Get access to all the features
            </Typography>
        </div>
  )
}

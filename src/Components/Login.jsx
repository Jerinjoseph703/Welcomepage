import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h4>Wohooooo!</h4>
      <Typography variant='h4' color='primary'>Login to FB</Typography>
      <TextField label="Email" variant='filled'/><br /><br />
      <TextField type="password" label="password" variant='filled'/><br /><br />
      <input type="button" value="login" /><br />
    </div>
  )
}

export default Login

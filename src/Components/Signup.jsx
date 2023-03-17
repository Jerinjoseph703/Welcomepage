import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h3>Welcome!</h3>
      <TextField label='Email' variant='outlined'></TextField><br /><br />
      <TextField label='Username' varient='outlined'></TextField><br /><br />
      <TextField label='New password' type={'password'} varient='outlined'></TextField><br /><br />
      <TextField label='conform password' type={'password'} varient='outlined'></TextField><br /><br />

      <Button type='submit' variant='outlined'>Sign up</Button>

    </div>
  )
}

export default Signup

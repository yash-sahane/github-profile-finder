import React from 'react'
import User from './User'
import classes from '../styles/Users.module.css'

const Users = ({ input, users }) => {
  return (
    <div className={classes.users}>
      {
        users.map(user => <User user={user} key={user.id} />)
      }
    </div>
  )
}

export default Users
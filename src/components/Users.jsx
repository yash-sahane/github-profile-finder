import React from 'react'
import User from './User'
import classes from '../styles/Users.module.css'

const Users = ({ input, users }) => {
  return (
    <div className={classes.users}>
      {/* <div>
        <div className="filter">
          <label htmlFor="">Per page</label>
          <select name="" id="">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
        <div className="pagination">

        </div>
      </div> */}
      {
        users.map(user => <User user={user} key={user.id} />)
      }
    </div>
  )
}

export default Users
import React, { useEffect, useState } from 'react'
import classes from '../styles/User.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const User = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  const [details, setDetails] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    name: ''
  })

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${login}`)
        const { public_repos, followers, following, name } = response.data;
        setDetails({
          repos: public_repos, followers, following, name
        })
      } catch (err) {
        toast.error(err.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        });
      }
    }
    fetchUserDetails();
  }, [])
  return (
    <div className={classes['user-div']}>
      <div className={classes['user-imp-details']}>
        <div className={classes['user-left-div']}>
          <img className={classes['user-profile-img']} src={avatar_url} alt="" />
        </div>
        <div className={classes['user-right-div']}>
          <p>{details.name}</p>
          <Link to={`/user/${login}`}>View Profile</Link>
          <a href={html_url}><p>@{user.login}</p></a>
        </div>
      </div>
      <div className={classes['user-opt-details']}>
        <div className={classes['opt-details']}>
          <h5>Repos</h5>
          <h3>{details.repos}</h3>
        </div>
        <div className={classes['opt-details']}>
          <h5>Followers</h5>
          <h3>{details.followers}</h3>
        </div>
        <div className={classes['opt-details']}>
          <h5>Following</h5>
          <h3>{details.following}</h3>
        </div>
      </div>
    </div>
  )
}

export default User
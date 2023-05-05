import React, { useEffect, useState } from 'react'
import UserData from '../components/UserData';
import Repo from '../components/Repo';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import classes from '../styles/Repo.module.css'

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Promise.all([
          axios.get(`https://api.github.com/users/${id}`),
          axios.get(`https://api.github.com/users/${id}/repos`)
        ])
        setUser(response[0].data);
        setRepos(response[1].data)
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchUser();
  }, [])

  return (
    <>
      <UserData user={user} repos={repos} />
      <div className={classes['inner-repo-div']}>
        {repos.map((repo, i) => <Repo repo={repo} key={i} />)}
      </div>
    </>
  )
}

export default UserProfile
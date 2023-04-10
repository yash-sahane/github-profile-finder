import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faStar, faCodeFork } from '@fortawesome/free-solid-svg-icons';
import classes from '../styles/Repo.module.css'

const Repo = ({ repo }) => {
  const { name, html_url, language, updated_at, stargazers_count, forks } = repo;

  const updatedDate = (initialDate) => {
    const date = new Date(initialDate);
    const formattedDate = date.toLocaleDateString();
    return formattedDate
  }

  return (
    <div className={classes['repo-div']}>
      <div className={classes['repo-left-div']}>
        <a href={html_url}><h3>{name}</h3></a>
        <p><FontAwesomeIcon icon={faTerminal} className={classes['lang-icon']} />{language}</p>
        <p><FontAwesomeIcon icon={faCodeFork} className={classes['lang-icon']} />{forks}</p>
      </div>
      <div className={classes['repo-right-div']}>
        <div className={classes['star-icon-div']}>{stargazers_count}<FontAwesomeIcon icon={faStar} className={classes['star-icon']} /></div>
        <p>Updated At: {updatedDate(updated_at)}</p>
        <a href={html_url} target="_blank" rel="noopener noreferrer">View Repo</a>
      </div>
    </div>
  )
}

export default Repo;
import React from 'react'
import classes from '../styles/UserData.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const UserData = ({ user }) => {
    const { avatar_url, login, name, html_url, created_at, public_repos, followers, following, bio, location, company, email, twitter_username } = user
    const date = new Date(created_at);
    const formattedDate = date.toLocaleDateString();
    return (
        <div className={classes['user-data-div']}>
            <div className={classes['user-div']}>
                <div className={classes['user-imp-details']}>
                    <div className={classes['user-top-div']}>
                        <div className={classes['user-top-left-div']}>
                            <img className={classes['user-profile-img']} src={avatar_url} alt="" />
                        </div>
                        <div className={classes['user-top-right-div']}>
                            <div className={classes['top-right-left-div']}>
                                <h2>{name}</h2>
                                <a href={html_url}><p>@{login}</p></a>
                            </div>
                            <div className={classes['top-right-right-div']}>
                                <p>Joined {formattedDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes['bottom-opt-details']}>
                        <div className={classes['user-opt-details']}>
                            <div className={classes['opt-details']}>
                                <h5>Repos</h5>
                                <h3>{public_repos}</h3>
                            </div>
                            <div className={classes['opt-details']}>
                                <h5>Followers</h5>
                                <h3>{followers}</h3>
                            </div>
                            <div className={classes['opt-details']}>
                                <h5>Following</h5>
                                <h3>{following}</h3>
                            </div>
                        </div>
                        <div className={classes['user-links-details']}>
                            <div className={classes['left-links-details']}>
                                <div className={classes['links-details']}>
                                    <FontAwesomeIcon icon={faLocationDot} className={classes.fontIcon} />
                                    <p>{location ? location : 'Not available'}</p>
                                </div>
                                <div className={classes['links-details']}>
                                    <FontAwesomeIcon icon={faBuilding} className={classes.fontIcon} />
                                    <p>{company ? company : 'Not available'}</p>
                                </div>
                            </div>
                            <div className={classes['right-links-details']}>
                                <div className={classes['links-details']}>
                                    <FontAwesomeIcon icon={faEnvelope} className={classes.fontIcon} />
                                    <p>{email ? email : 'Not available'}</p>
                                </div>
                                <div className={classes['links-details']}>
                                    <FontAwesomeIcon icon={faTwitter} className={classes.fontIcon} />
                                    <p>{twitter_username ? twitter_username : 'Not available'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserData
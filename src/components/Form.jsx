import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import classes from '../styles/Form.module.css';
import searchIcon from '../assets/search.svg';

const Form = ({ setInput, userHandler, input }) => {
  const onFindHandler = (e) => {
    e.preventDefault();
    if (input === '') {
      return toast.error('Input cannot be blank!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      userHandler();
    }
  }

  return (
    <div className={classes['form-div']} >
      <form action="" className={classes.form}>
        <img src={searchIcon} alt="Search" className={classes['search-icon']} />
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} className={classes.input} placeholder='Search username...' />
        <button onClick={onFindHandler} className={classes.button}>Find</button>
      </form>
    </div>
  )
}

export default Form
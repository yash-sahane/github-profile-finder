import React, { useEffect, useState } from 'react';
import Form from './Form';
import Users from './Users';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Home = () => {
  const [input, setInput] = useState('yash-sahane');
  const [users, setUsers] = useState([]);

  const userHandler = async (e) => {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${input}`);
      const data = await response.json();
      if (data.items.length === 0) {
        return toast.error('Invalid username', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        })
      }
      setUsers(data.items)
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
    }
  }
  useEffect(() => {
    userHandler()
  }, [])


  return (
    <>
      <Form setInput={setInput} userHandler={userHandler} input={input} />
      <Users input={input} users={users} />
    </>
  )
}

export default Home;
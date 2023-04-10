import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './styles/App.module.css';
import Home from './components/Home';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <div className={styles.appContainer}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
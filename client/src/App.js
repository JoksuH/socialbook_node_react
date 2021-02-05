import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import MainContent from './Components/MainContent/Maincontent'
import Leftsidebar from './Components/Leftsidebar/Leftsidebar';
import Rightsidebar from './Components/Rightsidebar/Rightsidebar';

import SignupSideAd from './Components/SignupSideAd/SignupSideAd';
import { LoggedIn } from './Components/Utils'
import Box from '@material-ui/core/Box'
import { useState } from 'react'


import './App.css';

function App() {

  const [User, SetUser] = useState([])

  const handleLogin = (token) => {
    localStorage.setItem('JWTtoken', token)
    GetUserInfo();

  }

  const GetUserInfo = () => {

    fetch('http://localhost:5000/users/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      },
    
    }).then((response) => response.json())
      .then((json) => SetUser(json[0]));
      

  }


  return (
    <div className="App">
      <Leftsidebar user={User}/>
      {(localStorage.getItem('JWTtoken')) ? 
      <MainContent />
      :
      <Box>
      <Login onLogin={handleLogin}/>
      <Signup />
      </Box>
    }

      <Rightsidebar />

    </div>
  );
}

export default App;

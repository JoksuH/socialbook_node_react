import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import HomeView from './Components/Home/HomeView';
import EditProfile from './Components/Profile/EditProfile'
import ManageFriends from './Components/ManageFriends/ManageFriends';
import Leftsidebar from './Components/Leftsidebar/Leftsidebar';
import Navbar from './Components/Navbar/Navbar';


import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles'
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';

import PrivateRoute from './Components/Routes/PrivateRoute';
import PublicRoute from './Components/Routes/PublicRoute';

const ContainerBox = styled(Box)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%'

});


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
      .then((json) => {
        SetUser(json);
      });

  }


  return (
    <div>
      <Navbar user={User}/>
    <div className="MainContent">
      <BrowserRouter>
      <ContainerBox>
        <Switch>
          {(localStorage.getItem('JWTtoken')) ?
          <>
            <Leftsidebar user={User}/>

            <PrivateRoute component={HomeView} path="/" exact/>
            <PrivateRoute component={ManageFriends} path="/friends" exact/>
            <PrivateRoute component={EditProfile} path="/profile" exact/>


          </>
          : <PrivateRoute component={HomeView} path="/" exact/>


        }
        <PublicRoute component={Login} onLogin={handleLogin} restricted={true} path="/login" exact />
        <PublicRoute component={Signup} onLogin={handleLogin} restricted={true} path="/signup" exact />

        </Switch>
        </ContainerBox>

      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;

import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import HomeView from './Components/Home/HomeView'
import EditProfile from './Components/Profile/EditProfile'
import ManageFriends from './Components/ManageFriends/ManageFriends'
import Leftsidebar from './Components/Leftsidebar/Leftsidebar'
import Navbar from './Components/Navbar/Navbar'
import MessengerView from './Components/Messenger/MessengerView'

import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'
import { Switch, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import PrivateRoute from './Components/Routes/PrivateRoute'
import PublicRoute from './Components/Routes/PublicRoute'

const ContainerBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
})

function App() {
    const dispatch = useDispatch()
    const History = useHistory()

    const [userLoaded, setUserLoaded] = useState(false)

    /* If component mounts with the JWT token in storage but without having loaded the user account
   (for example because of a browser refresh), get the user info and reload the components
   */

    useEffect(() => {
        if (localStorage.getItem('JWTtoken') && !userLoaded) {
            GetUserInfo()
            setUserLoaded(true)
        }
    }, [])

    const handleLogin = (token) => {
        localStorage.setItem('JWTtoken', token)
        GetUserInfo()
        setUserLoaded(true)
    }

    const handleLogout = () => {
        console.log(localStorage.getItem('JWTtoken'))

        localStorage.removeItem('JWTtoken')
        localStorage.removeItem('user')
        dispatch({ type: 'REMOVE_USER' })
        setUserLoaded(false)
        History.push('/login')
    }

    const GetUserInfo = () => {
        fetch('http://localhost:5000/users/myinfo', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: 'SET_USER', data: json })
            })
    }

    return (
        <div>
             <Navbar />
            <div className="MainContent">
                <ContainerBox>
                    {userLoaded && <Leftsidebar Logout={handleLogout} />}
                    <Switch>
                        {userLoaded ? (
                            <>
                                <PrivateRoute
                                    component={HomeView}
                                    path="/"
                                    exact
                                />
                                <PrivateRoute
                                    component={ManageFriends}
                                    path="/friends"
                                    exact
                                />
                                <PrivateRoute
                                    component={EditProfile}
                                    path="/myprofile"
                                    exact
                                />
                                <PrivateRoute
                                    component={HomeView}
                                    path="/profile/"
                                />
                                <PrivateRoute
                                    component={MessengerView}
                                    path="/messenger/"
                                />
                            </>
                        ) : (
                            <PrivateRoute component={HomeView} path="/" exact />
                        )}
                        <PublicRoute
                            component={Login}
                            onLogin={handleLogin}
                            restricted={true}
                            path="/login"
                            exact
                        />
                        <PublicRoute
                            component={Signup}
                            onLogin={handleLogin}
                            restricted={true}
                            path="/signup"
                            exact
                        />
                    </Switch>
                </ContainerBox>
            </div>
        </div>
    )
}

export default App

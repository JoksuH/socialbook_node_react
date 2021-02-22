import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Postlist from './../PostList/PostList'
import AddPost from './../AddPost/AddPost'
import WantRequestFriend from './../Profile/WantRequestFriend'
import FriendProfileHeader from './../Profile/ProfileHeader'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const mapStateToProps = (state) => {
    return { LoggedInUser: state }
}

const MainBox = styled(Box)({
    width: '50%',
    marginBottom: '15px',
    marginTop: '15px',
})

const MainView = ({ userName, LoggedInUser }) => {
    const [Posts, SetPosts] = useState([])
    const [UserInfo, SetUserInfo] = useState([])
    const [Forbidden, SetForbidden] = useState(false)
    const [UserExists, SetUserExists] = useState(true)

    useEffect(() => {
        GetPosts()
    }, [userName])

    const GetPosts = () => {
        //Get current users post list if no userName specified
        let url = 'http://localhost:5000/posts/'
        if (userName !== '') {
            url = 'http://localhost:5000/posts/' + userName
        }

        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        }).then((response) => {
            if (response.status === 404) {
                SetUserExists(false)
                return
            }
            if (response.status === 403) {
                SetForbidden(true)
                GetUserInfo()
                return
            } else
                response.json().then((json) => {
                    console.log(json)
                    SetPosts(json)
                    if (userName !== '') {
                    GetUserInfo()
                    }
                })
        })
    }

    const GetUserInfo = () => {
        fetch(`http://localhost:5000/users/${userName}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => SetUserInfo(json))
    }

    return (
        <MainBox>
            {!UserExists && (
                <p>
                    User doesn't exist. Are you sure you typed the username
                    correctly?
                </p>
            )}

            {Forbidden && UserExists ? (
                <WantRequestFriend user={UserInfo} />
            ) : (
                <>  
                    {(userName !== '') && <FriendProfileHeader user={UserInfo}/>}
                    <AddPost onPostAdded={GetPosts()} />
                    <Postlist Posts={Posts} />
                </>
            )}
        </MainBox>
    )
}

const Maincontent = connect(mapStateToProps)(MainView)

export default Maincontent

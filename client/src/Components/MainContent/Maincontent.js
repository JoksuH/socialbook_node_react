import { useState, useEffect } from 'react'
import Postlist from './../PostList/PostList'
import NewPost from './../NewPost/NewPost'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const MainBox = styled(Box)({
    width: '40%',
    marginBottom: '15px',
    marginTop: '15px',
})

function Maincontent({ userName }) {
    const [Posts, SetPosts] = useState([])
    const [Forbidden, SetForbidden] = useState(false)
    const [UserExists, SetUserExists] = useState(true)

    useEffect(() => {
        GetPosts()
    }, [])

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
                return
            } else
                response.json().then((json) => {
                    console.log(json)
                    SetPosts(json)
                })
        })
    }

    console.log(Posts)

    return (
        <MainBox>
            {!UserExists && <p>User doesn't exist</p>}

            {Forbidden && UserExists ? (
                <p>Forbidden</p>
            ) : (
                <>
                    <Postlist Posts={Posts} />
                    <NewPost />
                </>
            )}
        </MainBox>
    )
}

export default Maincontent

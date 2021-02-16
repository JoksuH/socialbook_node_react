import { useState, useEffect} from 'react'
import StartNewConversation from './StartNewConversation'
import FriendList from './FriendList/FriendList'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'

const MainBox = styled(Container)({
    width: '40%',
    marginBottom: '15px',
    marginTop: '15px',
    border: '2px solid blue',
})

const OpenConversationsList = ({onNewConversationClick}) => {

  const [Friends, SetFriends] = useState([])
  const [OpenConversations, SetOpenConversations] = useState([])

  useEffect(() => {

      console.log('load conversations')
  }, [])


  const HandleStartNewConversation = (event) => {
    LoadFriendsList();
  }

  const StartConversation = (event) => {
    console.log(event.target.parentElement.id)
  }


  const LoadFriendsList = () => {

    fetch('http://localhost:5000/users/listfriends', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => SetFriends(json))
  }
    return (
        <MainBox>
            <StartNewConversation onClick={HandleStartNewConversation}/>
            {(Friends) && <FriendList Friends={Friends} onClick={onNewConversationClick} />}
            <Typography>
              Active Conversations
            </Typography>
        </MainBox>
    )
}

export default OpenConversationsList

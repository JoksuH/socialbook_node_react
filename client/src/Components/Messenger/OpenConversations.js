import { useState, useEffect} from 'react'
import StartNewConversation from './StartNewConversation'
import FriendList from './FriendList/FriendList'
import OpenConversation from './OpenConversation'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'

const MainBox = styled(Container)({
    width: '40%',
    marginBottom: '15px',
    marginTop: '15px',
})

const OpenConversationsList = ({onNewConversationClick, OpenedConversations, onChangeActiveConversationClick, onDelete, currentUser}) => {

  const [Friends, SetFriends] = useState([])
  const [OpenConversations, SetOpenConversations] = useState([])

  useEffect(() => {
    SetOpenConversations(OpenedConversations)
    console.log(OpenConversations)
  }, [OpenedConversations])


  const HandleStartNewConversation = () => {
    LoadFriendsList();
  }

  const HandleNewConversationStarted = (user) => {
    onNewConversationClick(user)
    SetFriends([])
  }

  const ChangeActive = (Conversation) => {
    onChangeActiveConversationClick(Conversation);
  }

  const SetDelete = (Conversation) => {
    onDelete(Conversation)
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
            {(Friends) && <FriendList Friends={Friends} onClick={HandleNewConversationStarted} />}
            <Typography>
              Active Conversations
            </Typography>
            {(OpenConversations) ? 
              OpenConversations.map(conversation => {
                  return (
                    <OpenConversation currentUser={currentUser} Conversation={conversation} key={conversation._id} SetActive={ChangeActive} Delete={SetDelete}/>
                  )
              })
              :
              <Typography>
              No Active Conversations Found
            </Typography>
}
        </MainBox>
    )
}

export default OpenConversationsList

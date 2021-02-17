import ChatMessage from './ChatMessage'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'


const MainBox = styled(Container)({
  width: '90%',
  height: '50%',
  marginBottom: '15px',
  marginTop: '15px',
  overflow: 'auto'
})

const ChatBox = ({messages, user, friend}) => {

  console.log(user)
  console.log(friend)
  
  return (
      <MainBox>
            {(messages) && messages.map(message => {
              return (<ChatMessage message={message} user={user} friend={friend}/>)
            })}
      </MainBox>

  );
}

export default ChatBox;

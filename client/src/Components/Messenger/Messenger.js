import OpenConversations from './OpenConversations'
import CurrentConversation from './CurrentConversation'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'


const MainBox = styled(Container)({
  width: '50%',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '15px',
  marginTop: '15px',
  border: '1px solid red'
})

const Messenger = () => {

  const MessageList = []

  const StartConversation = (event) => {
    console.log(event.target.parentElement.id)
  }


  return (
      <MainBox>
        <OpenConversations onNewConversationClick={StartConversation}/>
        <CurrentConversation Messages={MessageList}/>
      </MainBox>

  );
}

export default Messenger;

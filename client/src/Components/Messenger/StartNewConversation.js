import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'


const MainBox = styled(Container)({
  width: '100%',
  marginBottom: '15px',
  marginTop: '15px',
  border: '2px solid blue'
})

const ConvButton = styled(Button)({
    width: '100%',
  })
  
const StartNewConversation = ({onClick}) => {

  return (
      <MainBox>
        <ConvButton color="primary" variant="contained" onClick={onClick}>
        Start a new conversation
        </ConvButton>
      </MainBox>

  );
}

export default StartNewConversation;

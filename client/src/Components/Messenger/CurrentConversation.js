import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'


const MainBox = styled(Container)({
  width: '70%',
  marginBottom: '15px',
  marginTop: '15px',
  border: '2px solid black'
})

const CurrentConversation = () => {

  return (
      <MainBox>
            <p>Test</p>
      </MainBox>

  );
}

export default CurrentConversation;

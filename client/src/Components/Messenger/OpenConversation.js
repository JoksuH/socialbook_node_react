import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Tooltip } from '@material-ui/core'

const MainBox = styled(Container)({
    display: 'flex', 
    flexDirection: 'row',
    marginBottom: '15px',
    marginTop: '15px',
    '&:hover': {
        cursor: 'pointer',
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)'
    }
})

const InnerBox = styled(Container)({
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'left',
    marginBottom: '15px',
    marginTop: '15px',
})

const Text = styled(Typography)({
    fontSize: 12,
    marginLeft: 20
})


const OpenConversation = ({currentUser, Conversation, SetActive, Delete}) => {

    let friendArrayIndex =  0

    if (Conversation.Participants[0]._id === currentUser._id) 
        friendArrayIndex = 1

    const OnActivate = () => {
        SetActive(Conversation)
    }

    const OnDelete = () => {
        Delete(Conversation)
    }

  return (
      <MainBox >
          <InnerBox onClick={OnActivate}>
        <Avatar alt={Conversation.Participants[friendArrayIndex].Fullname} src={Conversation.Participants[friendArrayIndex].Avatar}/>

          <Text>
          {Conversation.Participants[friendArrayIndex].Fullname}
          </Text>
          </InnerBox>
          <InnerBox>
              <Tooltip title="Delete Conversation">
          <DeleteForeverIcon onClick={OnDelete} style={{margin: 'auto'}}/> 
            </Tooltip>
          </InnerBox>

      </MainBox>

  );
}

export default OpenConversation;

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'

const MainContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    marginTop: "25px",
    '&:hover': {
      background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)'
        }


})

const InnerContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  marginBottom: 15,
  marginTop: 5


})

const FriendButton = styled(Button)({
    marginTop: 5
})

const Text = styled(Typography)({
  marginTop: 15
})

const StyledAvatar = styled(Avatar)({
  marginRight: '10px',
  marginTop: "10px",
  marginLeft: "10px"

})


function Friend({user, onClick}) {

    const Clicked = () => {
        onClick(user)
    }

  return (
    <MainContainer>
        <InnerContainer >
          <StyledAvatar alt={user.Username} src={user.Avatar}/>

          <Text>
              {user.Fullname}
          </Text>
        </InnerContainer>
        <FriendButton variant="contained" color="primary" id={user._id} onClick={Clicked}>Send a Message</FriendButton>
        
    </MainContainer>
  );
}

export default Friend;

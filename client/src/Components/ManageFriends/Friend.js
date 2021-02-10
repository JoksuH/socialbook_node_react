import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import { useState }from 'react'

const MainContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    marginTop: "25px"


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


function Friend({user}) {

    const [FriendDeleted, SetFriendDeleted] = useState(false);

    const handleRemoveFriend = (event) => {

        fetch(`http://localhost:5000/users/removefriend/${event.target.parentElement.id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
          }
        }).then((response) => SetFriendDeleted(true));
    
    
      }

  return (
    <MainContainer>
        <InnerContainer >
          <StyledAvatar alt={user.Username} src={user.Avatar}/>

          <Text>
              {user.Fullname}
          </Text>
        </InnerContainer>
        {(FriendDeleted) ?
        <FriendButton variant="contained" color="default" id={user._id}>Friend Removed</FriendButton>
        :
        <FriendButton variant="contained" color="primary" onClick={handleRemoveFriend} id={user._id}>Remove Friend</FriendButton>
        }
    </MainContainer>
  );
}

export default Friend;

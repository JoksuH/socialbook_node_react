import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import { useState }from 'react'

const MainContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    marginTop: "25px"


})

const FriendButton = styled(Button)({
    marginTop: 5
})


function Suggestion({user}) {

    const [FriendRequested, SetFriendRequested] = useState(false);

    const handleAddFriend = (event) => {

        fetch(`http://localhost:5000/users/addfriend/${event.target.parentElement.id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
          }
        }).then((response) => SetFriendRequested(true));
    
    
      }

  return (
    <MainContainer>
        <Typography>
            {user.Firstname + ' ' + user.Lastname}
        </Typography>
        {(FriendRequested) ?
        <FriendButton variant="contained" color="default" onClick={handleAddFriend} id={user._id}>Friend Request Sent</FriendButton>
        :
        <FriendButton variant="contained" color="primary" onClick={handleAddFriend} id={user._id}>Send Friend Request</FriendButton>
    }
    </MainContainer>
  );
}

export default Suggestion;

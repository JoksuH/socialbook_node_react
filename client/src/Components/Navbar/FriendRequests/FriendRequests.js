import Box from '@material-ui/core/Box'
import FriendRequest from './FriendRequest'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import { useState, useEffect }from 'react'
import zIndex from '@material-ui/core/styles/zIndex'
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import HaveFriendRequests from './HaveFriendRequests'


const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: 100

})

const RequestsBox = styled(Box)({
  display: "flex",
  flexDirection: "row",

})

const Text = styled(Typography)({
  marginTop: 15,
  marginLeft: 20,
  color: 'white',
  '&:hover': {
    color: 'blue'
  }
})

const  FriendRequests = ({user}) => {

  const [FriendRequests, SetFriendRequests] = useState([]);
  const [ShowFriendRequests, SetShowFriendRequests] = useState(false);

  useEffect(() => {

    fetch(`http://localhost:5000/users/friendrequests`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      }
    }).then((response) => response.json())
    .then((json) => {
      console.log(json.Friendrequests)
      SetFriendRequests(json.Friendrequests);
      })
 
  }, []);

  console.log(FriendRequests)

  const DrawRequests = () => {
    SetShowFriendRequests(true);
  }

  const HideRequests = () => {
    SetShowFriendRequests(false);
  }

  return (
        <Container onMouseEnter={DrawRequests} onMouseLeave={HideRequests}>
              
              {(FriendRequests) &&  
              
              <HaveFriendRequests FriendRequests={FriendRequests.length}/>
      
              }

              {(ShowFriendRequests) && FriendRequests.map((request) => {
                return(
                <FriendRequest user={request}/>
                )
             })
              }
         

        </Container>
        
  );
}

export default FriendRequests;

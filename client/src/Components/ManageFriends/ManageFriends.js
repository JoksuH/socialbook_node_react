import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useEffect, useState } from 'react'
import Friend from './Friend'
import { styled } from '@material-ui/core/styles'

const MainContainer = styled(Box)({
  marginTop: 20

})


function ManageFriends() {

  const [Friends, SetFriends] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/users/listfriends', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      }
    }).then((response) => response.json())
    .then((json) => SetFriends(json));

  }, [])


  return (
    <MainContainer>
        <Typography variant="subtitle2">
            People you are currently following...
        </Typography>
        {
          (Friends.length > 0) ? Friends.map(user => {
           return( 
           <Friend user={user} key={user._id}/>
           )
          })
          : <Typography>
              Loading Friend Suggestions
            </Typography>

        }

    </MainContainer>
  );
}

export default ManageFriends;

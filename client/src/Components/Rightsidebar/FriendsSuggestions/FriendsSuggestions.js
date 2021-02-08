import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useEffect, useState } from 'react'
import Suggestion from './Suggestion'
import { styled } from '@material-ui/core/styles'

const MainContainer = styled(Box)({
  marginTop: 20

})


function FriendsSuggestions() {

  const [Suggestions, SetSuggestions] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5000/users/friendsuggestions', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      }
    }).then((response) => response.json())
    .then((json) => SetSuggestions(json));

  }, [])


  return (
    <MainContainer>
        <Typography variant="subtitle2">
            People you may know...
        </Typography>
        {
          (Suggestions.length > 0) ? Suggestions.map(user => {
           return( 
           <Suggestion user={user} key={user._id}/>
           )
          })
          : <Typography>
              Loading Friend Suggestions
            </Typography>

        }

    </MainContainer>
  );
}

export default FriendsSuggestions;

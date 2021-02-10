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
  const [FetchMoreSuggestions, SetFetchMoreSuggestions] = useState(false);

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

  }, [FetchMoreSuggestions])

  const handleAddFriend = (event) => {

    fetch(`http://localhost:5000/users/addfriend/${event.target.parentElement.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      }
    }).then((response) =>  {
      //Update Friend suggestion list by removing the added friend
      const CutDownSuggestions = Suggestions.filter(suggestion => suggestion._id !== event.target.parentElement.id);
      if (CutDownSuggestions.length < 2) {
        SetFetchMoreSuggestions(!FetchMoreSuggestions);
      }
      else {
        setTimeout(() => SetSuggestions(CutDownSuggestions), 2000);
      }
    });


  }

  //Currently gets a maximum of 6 friend suggestions

  return (
    <MainContainer>
        <Typography variant="subtitle2">
            People you may know...
        </Typography>
        {
          (Suggestions.length > 0) ? Suggestions.slice(0,6).map(user => {
           return( 
           <Suggestion user={user} key={user._id} onAddFriend={handleAddFriend}/>
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

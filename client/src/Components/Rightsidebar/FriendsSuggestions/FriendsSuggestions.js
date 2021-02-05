import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useEffect, useState } from 'react'
import Suggestion from './Suggestion'


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
    .then((json) => {
      console.log(json)
      SetSuggestions(json);
    })

  }, [])



  return (
    <div className="FriendsSuggestions">
        <Typography>
            People you may know...
        </Typography>
        {
          (Suggestions.length > 0) ? Suggestions.map(user => {
           return( 
           <Suggestion user={user} />
           )
          })
          : <Typography>
              Loading Friend Suggestions
            </Typography>

        }

    </div>
  );
}

export default FriendsSuggestions;

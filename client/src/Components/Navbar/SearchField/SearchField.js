import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { styled } from '@material-ui/core/styles'

import SearchSuggestion from './SearchSuggestion'


const MainGrid = styled(Grid)({

  height: 50,
  width: '30%',
  background: "rgb(19, 151, 213)"
});


const Text = styled(TextField)({
  width: '100%',
  backgroundColor: 'white',
  marginBottom: 5
});

function SearchField() {

    const [SearchSuggestions, SetSearchSuggestions] = useState([]);



  const HandleSearchInput = (event) => {

    //fetch suggestions and add them to list
    
    fetch(`http://localhost:5000/users/search/${event.target.value}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      }
    }).then((response) => response.json())
    .then((json) => SetSearchSuggestions(json));

  }

  return (
    <MainGrid>    
      <Text 
        variant="outlined"
        placeholder="Search..."
        size="medium"
        margin="dense"
        color="primary"
        onChange={HandleSearchInput}
      />
      { (SearchSuggestions) ? SearchSuggestions.map((suggestion) => {
          return (
            <SearchSuggestion user={suggestion} />
          )

      })
      : <p></p>

      }
    </MainGrid>
  );
}

export default SearchField;

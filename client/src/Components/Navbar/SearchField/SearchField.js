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
  background: "rgb(19, 151, 213)",
  borderRadius: 6
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
    // if else so that values get removed from window when searchfield is emptied from text

    if (event.target.value !== '') {
    
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
  // Remove suggestions from window if searchfield empty i.e cleared with backspace etc.
    else {
      SetSearchSuggestions([]);
  }
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
      { (SearchSuggestions) && SearchSuggestions.map((suggestion) => {
          return (
            <SearchSuggestion user={suggestion} />
          )
      })

      }
    </MainGrid>
  );
}

export default SearchField;

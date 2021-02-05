import './WritePad.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import React, {useState} from 'react'

const Writepad = () => {

  const [Body, SetBody] = useState('');


  const handleBodyChange = (event) => {
    console.log(Body);
    SetBody(event.target.value);
  }

  const UploadArticle = (event) => {
    fetch('http://localhost:5000/posts/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      },
      body: JSON.stringify({
        body: Body,
      })
    }).then((response) => console.log(response.status));
      //.then((json) => console.log(json));

    event.preventDefault();

  }

  const testclick = (event) => {

    console.log(localStorage.getItem('JWTtoken'))
    
    fetch('http://localhost:5000/posts/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      }
    }).then((response) => response.json())
    .then((json) => console.log(json));
    event.preventDefault();

    
  }
  

  return (
    <div className="articleWriter">
      <form onSubmit={UploadArticle}>
        <TextField multiline={false} rows="3" id="ArticleBodyText" fullWidth={true} variant="outlined" label="Post" onChange={handleBodyChange}/>
        <br /><br />
        <div className="buttonRow">
        <Button 
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<CloudUploadIcon />}

        > Publish</Button>
        </div>

      </form>
      <Button 
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<CloudUploadIcon />}
          onClick={testclick}

        > Test</Button>

     
    </div>
  );
}

export default Writepad;

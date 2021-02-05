import React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PublicIcon from '@material-ui/icons/Public';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupSideAd = (props) => {

    const [Username, SetUsername] = useState('');
    const [FirstName, SetFirstName] = useState('');
    const [LastName, SetLastName] = useState('');
    const [Password, SetPassword] = useState('');
    const [Birthday, SetBirthday] = useState('');



  const classes = useStyles();

  const handleSignup = (event) => {


      fetch('http://localhost:4001/users/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: Username,
        password: Password
      })
    }).then((response) => response.json())
      .then((json) => props.onLogin(json.token));

      event.preventDefault();

  }

  const handleUserNameChange = (event) => {
    SetUsername(event.target.value);
    }

  const handleFirstNameChange = (event) => {
    SetFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    SetLastName(event.target.value);
    }

const handlePasswordChange = (event) => {
    SetPassword(event.target.value);
    }
  const handleBirthdayChange = (event) => {
    console.log(event.target.value);
    SetBirthday(event.target.value);

}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PublicIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Join thousands of other just like you in minutes
        </Typography>
        <Typography component="h2" variant="h6">
          Join thousands of other just like you in minutes
        </Typography>
        
      </div>
    </Container>
  );
}


export default SignupSideAd;

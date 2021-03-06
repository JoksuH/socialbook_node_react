import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormLabel } from '@material-ui/core';


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

const SignupForm = () => {


    const [Username, SetUsername] = useState('');
    const [FirstName, SetFirstName] = useState('');
    const [Email, SetEmail] = useState('');
    const [LastName, SetLastName] = useState('');
    const [Gender, SetGender] = useState('');
    const [Password, SetPassword] = useState('');
    const [Birthday, SetBirthday] = useState('');
    const [UsernameError, SetUsernameError] = useState(false)
    const [EmailError, SetEmailError] = useState(false)


    const history = useHistory();

  const classes = useStyles();

  const handleSignup = (event) => {

    if (Username.length < 2) {
    alert('Username is too short')
    event.preventDefault();
    return
  }
  if (FirstName.length < 1) {
    alert('Please enter your first name')
    event.preventDefault();
    return
  }
  if (LastName.length < 1) {
    alert('Please enter your last name')
    event.preventDefault();
    return
  }
  if (Gender === '') {
    alert('Please select your gender')
    event.preventDefault();
    return
  }
  if (Birthday === '') {
    alert('Please select your Birthday')
    event.preventDefault();
    return
  }

    if (Password.length < 6) {
    alert('Password is too short')
    event.preventDefault();
    return
  }


      fetch('http://localhost:5000/user/auth/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Username: Username,
        Password: Password,
        Email: Email,
        Firstname: FirstName,
        Gender: Gender,
        Lastname: LastName,
        Birthday: Birthday
          })
    }).then((response) => {
      if (response.status === 200)
        history.push('/login')
      else {
        response.json().then((json) => {
          const Errmessage = json.err.message
          if (Errmessage.includes('Username'))
          SetUsernameError(true)
          if (Errmessage.includes('Email'))
          SetEmailError(true)
          })
        }
        })
      
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

    const handleEmailChange = (event) => {
        SetEmail(event.target.value);

    }

    const handleGenderChange = (event) => {
      SetGender(event.target.value);

    }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Your Free Account And Get Started Right Away
        </Typography>
        {(UsernameError && EmailError) && 
        <Typography variant="h6" style={{marginTop: 20, color: 'red'}}>
          Please check the form info for errors
        </Typography>   
        }

        <form className={classes.form} noValidate onSubmit={handleSignup}>
        {UsernameError ?
          <TextField
            error
            helperText="Username already in use"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            onChange={handleUserNameChange}
          />
          :
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            onChange={handleUserNameChange}
          />
        }{EmailError ?
          <TextField
            error
            helperText="The email address is either not valid or already in use"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleEmailChange}
          />
          :

           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleEmailChange}
          />
        }
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="firstname"
            label="First Name"
            type="firstname"
            id="firstname"
            onChange={handleFirstNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lastname"
            label="Last Name"
            type="lastname"
            id="lastname"
            onChange={handleLastNameChange}
          />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row aria-label="gender" onChange={handleGenderChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />
           <TextField
            variant="outlined"
            margin="normal"
            orientation="landscape"
            required
            fullWidth
            name="birthday"
            label="Birthday"
            type="date"
            id="birthday"
            InputLabelProps={{ shrink: true }}
            inputProps={{min: '1900-01-01'}}
            onChange={handleBirthdayChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          
        </form>
      </div>
    </Container>
  );
}


export default SignupForm;

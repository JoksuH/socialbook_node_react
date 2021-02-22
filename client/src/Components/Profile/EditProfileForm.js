import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { FormLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        marginTop: theme.spacing(8),
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '70%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const EditProfileForm = ({ userInfo }) => {
    const [UserName, SetUserName] = useState('')
    const [FirstName, SetFirstName] = useState('')
    const [Email, SetEmail] = useState('')
    const [LastName, SetLastName] = useState('')
    const [Gender, SetGender] = useState('')
    const [Avatar, SetAvatar] = useState('')
    const [Birthday, SetBirthday] = useState('')
    const [ChangesSaved, SetChangesSaved] = useState(false)

    const dispatch = useDispatch()

    const classes = useStyles()

    useEffect(() => {
        if (userInfo) {
            SetUserName(userInfo.Username)
            SetFirstName(userInfo.Firstname)
            SetEmail(userInfo.Email)
            SetLastName(userInfo.Lastname)
            SetGender(userInfo.Gender)
            SetAvatar(userInfo.Avatar)
            SetBirthday(userInfo.Birthday)
        }
    }, [userInfo])

    const handleEdit = (event) => {
        fetch('http://localhost:5000/users/myinfo', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
            body: JSON.stringify({
                Username: UserName,
                Email: Email,
                Firstname: FirstName,
                Gender: Gender,
                Lastname: LastName,
                Birthday: Birthday,
                Avatar: Avatar,
            }),
        })
            .then((response) => response.json())
            //Response is the new edited user profile
            .then((json) => {
                dispatch({ type: 'SET_USER', data: json })
                SetChangesSaved(true)
            })

        event.preventDefault()
    }

    const handleUserNameChange = (event) => {
        SetUserName(event.target.value)
        SetChangesSaved(false)
    }

    const handleFirstNameChange = (event) => {
        SetFirstName(event.target.value)
        SetChangesSaved(false)
    }

    const handleLastNameChange = (event) => {
        SetLastName(event.target.value)
        SetChangesSaved(false)
    }

    const handleBirthdayChange = (event) => {
        SetBirthday(event.target.value)
        SetChangesSaved(false)
    }

    const handleEmailChange = (event) => {
        SetEmail(event.target.value)
        SetChangesSaved(false)
    }

    const handleGenderChange = (event) => {
        SetGender(event.target.value)
        SetChangesSaved(false)
    }

    const handleAvatarChange = (event) => {
        SetAvatar(event.target.value)
        SetChangesSaved(false)
    }

    return (
        <Container className={classes.container} component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Edit your profile info
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleEdit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        InputLabelProps={{ shrink: true }}
                        name="username"
                        value={UserName}
                        onChange={handleUserNameChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        InputLabelProps={{ shrink: true }}
                        name="email"
                        value={Email}
                        onChange={handleEmailChange}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="firstname"
                        label="First Name"
                        InputLabelProps={{ shrink: true }}
                        type="firstname"
                        id="firstname"
                        value={FirstName}
                        onChange={handleFirstNameChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="lastname"
                        label="Last Name"
                        value={LastName}
                        InputLabelProps={{ shrink: true }}
                        type="lastname"
                        id="lastname"
                        onChange={handleLastNameChange}
                    />
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-label="gender"
                            onChange={handleGenderChange}
                            value={Gender ?? 'female'}
                        >
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                    
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
                        value={Birthday}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ min: '1900-01-01' }}
                        onChange={handleBirthdayChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="avatarurl"
                        InputLabelProps={{ shrink: true }}
                        label="Avatat Picture Url"
                        value={Avatar}
                        id="avatarurl"
                        onChange={handleAvatarChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {ChangesSaved ? 'Changes Saved' : 'Save Changes'}
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default EditProfileForm

import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const Text = styled(Typography)({
    marginBottom: '15px',
    marginTop: '25px',
})

const MainContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginBottom: '15px',
    marginTop: '25px',
    marginLeft: 50,
    textAlign: 'center',
})

const SignupSideAd = (props) => {
    return (
        <MainContainer>
            <CssBaseline />
            <Text component="h1" variant="h5">
                Join thousands of other just like you in minutes
            </Text>
            <Text component="h2" variant="h6">
                Join thousands of other just like you in minutes. See your
                friends accounts and post on their walls.
            </Text>
            <Text component="h2" variant="h6">
                Keeping up with your friends has never been easier!
            </Text>
        </MainContainer>
    )
}

export default SignupSideAd

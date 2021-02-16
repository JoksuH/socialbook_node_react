import React from 'react'
import { styled } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import SignupForm from './SignupForm'
import SignupAd from './SignupSideAd/SignupSideAd'

const MainContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '15px',
    marginTop: '25px',
})

const Signup = () => {
    return (
        <MainContainer>
            <SignupForm />
            <SignupAd />
        </MainContainer>
    )
}

export default Signup

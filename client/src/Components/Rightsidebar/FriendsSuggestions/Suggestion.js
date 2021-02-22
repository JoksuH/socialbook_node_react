import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'

const MainContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    marginTop: '25px',
})

const InnerWideContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 5,
})

const InnerMobileContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
    marginTop: 5,
})

const FriendButton = styled(Button)({
    marginTop: 5,
    cursor: 'pointer',
})

const Text = styled(Typography)({
    marginTop: 15,
})

const StyledAvatar = styled(Avatar)({
    marginRight: '10px',
    marginTop: '10px',
    marginLeft: '10px',
})

function Suggestion({ user, onAddFriend, viewWide }) {
    const [FriendRequested, SetFriendRequested] = useState(false)
    const [FontSize, SetFontSize] = useState(10)


    useEffect(() => {
      if (viewWide) {
        SetFontSize(15)
      }
      else {
        SetFontSize(10)
      }

    }, [viewWide])

    

    const handleFriendAdd = (event) => {
        SetFriendRequested(true)
        onAddFriend(event)
    }

    return (
        <MainContainer>
            {viewWide ? (
                <InnerWideContainer>
                    <StyledAvatar alt={user.Username} src={user.Avatar} />

                    <Text>{user.Fullname}</Text>
                </InnerWideContainer>
            ) : (
                <InnerMobileContainer>
                    <StyledAvatar alt={user.Username} src={user.Avatar} />

                    <Text style={{ fontSize: FontSize }}>{user.Fullname}</Text>
                </InnerMobileContainer>
            )}
            {FriendRequested ? (
                <FriendButton
                    variant="contained"
                    color="default"
                    disabled={true}
                    id={user._id}
                >
                    Friend Request Sent
                </FriendButton>
            ) : (
                <FriendButton
                    variant="contained"
                    color="primary"
                    onClick={handleFriendAdd}
                    id={user._id}
                    style={{ fontSize: FontSize }}
                >
                    Send Friend Request
                </FriendButton>
            )}
        </MainContainer>
    )
}

export default Suggestion

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'

const InnerContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    border: '1px dashed grey',
    zIndex: 1,
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgb(245, 246, 247)',
    },
})

const StyledButton = styled(Button)({
    marginTop: 5,
    height: '80%',
    marginLeft: 20,
})

const Text = styled(Typography)({
    marginTop: 10,
    marginLeft: 20,
})

const StyledAvatar = styled(Avatar)({
    marginRight: '10px',
    marginLeft: '10px',
})

function FriendRequest({ user, onAccept, onDecline }) {
    return (
        <InnerContainer>
            <StyledAvatar alt={user.Username} src={user.Avatar} />
            <Text>{user.Fullname}</Text>
            <StyledButton
                color="primary"
                variant="contained"
                onClick={onAccept}
                id={user._id}
            >
                Accept
            </StyledButton>
            <StyledButton
                color="secondary"
                variant="contained"
                onClick={onDecline}
                id={user._id}
            >
                Reject
            </StyledButton>
        </InnerContainer>
    )
}

export default FriendRequest

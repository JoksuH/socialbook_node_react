import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'

const mapStateToProps = (state) => {
    return { LoggedInUser: state }
}

const ContentBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
})

const FriendTextBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
})

const TextName = styled(Typography)({
    fontSize: 21,
})

const Text = styled(Typography)({
    fontSize: 18,
    margin: 'auto',
})

const FriendButton = styled(Button)({
    marginTop: 5,
})

const StyledAvatar = styled(Avatar)({
    height: 200,
    width: 200,
    marginRight: '10px',
    marginTop: '5px',
    marginLeft: '10px',
})

const RequestFriend = ({ LoggedInUser, user }) => {
    const [RequestSent, SetRequestSent] = useState(false)

    // Check if friend request has been already sent earlier
    useEffect(() => {
        //Make sure user data has been loaded before doing the comparison
        if (
            !Array.isArray(user) &&
            user.Friendrequests.includes(LoggedInUser._id)
        )
            SetRequestSent(true)
    }, [user])

    const handleAddFriend = () => {
        fetch(`http://localhost:5000/users/requestfriend/${user._id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        }).then(() => SetRequestSent(true))
    }
    return (
        <Box>
            <TextName variant="subtitle2">
                Do you know {user.Fullname}?
            </TextName>
            <ContentBox>
                <StyledAvatar alt={user.profilename} src={user.Avatar} />
                <FriendTextBox>
                    <Text variant="subtitle2">
                        To see what {user.Firstname} shares with their friends,
                        send them a friend request
                    </Text>
                    {RequestSent ? (
                        <FriendButton
                            variant="contained"
                            color="default"
                            disabled={true}
                            id={user._id}
                        >
                            Friend Request has been sent
                        </FriendButton>
                    ) : (
                        <FriendButton
                            variant="contained"
                            color="primary"
                            onClick={handleAddFriend}
                            id={user._id}
                        >
                            Send Friend Request
                        </FriendButton>
                    )}
                </FriendTextBox>
            </ContentBox>
        </Box>
    )
}

const WantRequestFriend = connect(mapStateToProps)(RequestFriend)

export default WantRequestFriend

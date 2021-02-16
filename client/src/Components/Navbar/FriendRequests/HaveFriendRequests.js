import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined'

const RequestsBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
})

const Text = styled(Typography)({
    marginTop: 15,
    marginLeft: 5,
    textDecoration: 'underline',
    color: 'white',
    '&:hover': {
        color: 'blue',
    },
})

const HaveFriendRequests = ({ FriendRequests }) => {
    return (
        <RequestsBox>
            <EmojiPeopleOutlinedIcon style={{ marginTop: 15 }} />
            <Text noWrap={true}>
                You have {FriendRequests} Friend Request(s)
            </Text>
        </RequestsBox>
    )
}

export default HaveFriendRequests

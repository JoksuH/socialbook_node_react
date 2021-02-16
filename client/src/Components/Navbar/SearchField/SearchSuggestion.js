import Box from '@material-ui/core/Box'
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

const Text = styled(Typography)({
    marginTop: 15,
    marginLeft: 20,
})

const StyledAvatar = styled(Avatar)({
    marginRight: '10px',
    marginTop: '10px',
    marginLeft: '10px',
})

function SearchSuggestion({ user }) {
    return (
        <InnerContainer>
            <StyledAvatar alt={user.Username} src={user.Avatar} />

            <Text>{user.Fullname}</Text>
        </InnerContainer>
    )
}

export default SearchSuggestion

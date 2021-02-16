import Box from '@material-ui/core/Box'
import FriendSuggestions from './FriendsSuggestions/FriendsSuggestions'
import { styled } from '@material-ui/core/styles'

const MainContainer = styled(Box)({
    background:
        'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)',
    width: '15%',
})

function RightSidebar() {
    return (
        <MainContainer>
            <FriendSuggestions />
        </MainContainer>
    )
}

export default RightSidebar

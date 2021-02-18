import Friend from './Friend'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'

const MainContainer = styled(Container)({
    height: '40vh',
    marginBottom: '15px',
    marginTop: '15px',
    overflow: 'auto'
})

const FriendList = ({Friends, onClick}) => {

    const FriendSelected = (user) => {
        onClick(user)
    }

    return (
        <MainContainer>
            {(Friends.length > 0) && (
                Friends.map((user) => {
                    return <Friend user={user} key={user._id} onClick={FriendSelected}/>
                })
            )}
        </MainContainer>
    )
}
export default FriendList

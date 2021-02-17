import Friend from './Friend'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'

const MainContainer = styled(Container)({
    marginBottom: '15px',
    marginTop: '15px',
})

const FriendList = ({Friends, onClick}) => {

    const FriendSelected = (user) => {
        onClick(user)
    }

    return (
        <MainContainer>
            {Friends.length > 0 ? (
                Friends.map((user) => {
                    return <Friend user={user} key={user._id} onClick={FriendSelected}/>
                })
            ) : (
                <p></p>
            )}
        </MainContainer>
    )
}
export default FriendList

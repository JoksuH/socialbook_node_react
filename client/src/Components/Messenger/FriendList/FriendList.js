import Friend from './Friend'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const MainContainer = styled(Container)({
    marginBottom: '15px',
    marginTop: '15px',
    border: '2px solid black',
})

const FriendList = ({Friends, onClick}) => {

    return (
        <MainContainer>
            {Friends.length > 0 ? (
                Friends.map((user) => {
                    return <Friend user={user} key={user._id} onClick={onClick}/>
                })
            ) : (
                <Typography>Loading Friends...</Typography>
            )}
        </MainContainer>
    )
}
export default FriendList

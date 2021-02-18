import CommentTime from './../Post/Comments/CommentTime'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'

const MyMessage = styled(Container)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
})

const MessageText = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
})

const FriendMessage = styled(Container)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
})

const Img = styled(Avatar)({
    margin: '10px',
})

const Text = styled(Typography)({
    marginBottom: '5px',
    border: '1px solid grey',
    borderRadius: 3,
    marginTop: '15px',
    padding: 15,
})
const ChatMessage = ({ message, user, friend }) => {
    let myMessage = false
    if (message.Author === user._id) {
        myMessage = true
    }

    return (
        <>
            {myMessage ? (
                <MyMessage>
                    <MessageText>
                        <Text variant="subtitle2">{message.Message}</Text>
                        <CommentTime data={message} />
                    </MessageText>
                    <Img alt={user.Fullname} src={user.Avatar} />
                </MyMessage>
            ) : (
                <FriendMessage>
                    <Img alt={friend.Fullname} src={friend.Avatar} />
                    <MessageText>
                        <Text variant="subtitle2">{message.Message}</Text>
                        <CommentTime data={message} />
                    </MessageText>
                </FriendMessage>
            )}
        </>
    )
}

export default ChatMessage

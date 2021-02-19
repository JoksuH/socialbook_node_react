import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'

const MainBox = styled(Container)({
    width: '90%',
    marginBottom: '15px',
    marginTop: '15px',
})

const ChatWriteBox = ({ onChange, onSubmit }) => {

    

    return (
        <MainBox>
            <form onSubmit={onSubmit}>
                <TextField
                    multiline={false}
                    rows="3"
                    id="ArticleBodyText"
                    fullWidth={true}
                    variant="outlined"
                    label="Post"
                    onChange={onChange}
                />
                <br />
                <br />
                <div className="buttonRow">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        startIcon={<ChatBubbleOutlineIcon />}
                        style={{cursor: 'pointer'}}
                    >
                        {' '}
                        Send
                    </Button>
                </div>
            </form>
        </MainBox>
    )
}

export default ChatWriteBox

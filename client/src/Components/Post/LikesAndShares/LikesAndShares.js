import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import { styled } from '@material-ui/core/styles'

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
})

const LikesAndShares = ({ Postdata, liked }) => {
    return (
        <StyledBox justifyContent="space-between">
            {liked ? (
                <StyledBox>
                    <ThumbUpIcon
                        color="default"
                        style={{ paddingRight: '5px' }}
                    />
                    <Typography>{Postdata.Likes + 1}</Typography>
                </StyledBox>
            ) : (
                <StyledBox>
                    <ThumbUpIcon
                        color="primary"
                        style={{ paddingRight: '5px' }}
                    />
                    <Typography>{Postdata.Likes}</Typography>
                </StyledBox>
            )}
            <StyledBox>
                <ChatBubbleOutlineIcon style={{ paddingRight: '5px' }} />
                <Typography>{Postdata.Comments.length}</Typography>
            </StyledBox>
        </StyledBox>
    )
}

export default LikesAndShares

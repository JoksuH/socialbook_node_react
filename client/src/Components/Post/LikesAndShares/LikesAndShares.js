import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ShareIcon from '@material-ui/icons/Share'
import { styled } from '@material-ui/core/styles'

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10
  
  })
  

const LikesAndShares = ({Postdata, liked}) => {

  return (
      <StyledBox justifyContent="space-between">
          {(liked) ? 
            <StyledBox>
                <ThumbUpIcon color="default"/>
                <Typography>{Postdata.Likes + 1}</Typography>
            </StyledBox> 
            :
            <StyledBox>
            <ThumbUpIcon color="primary"/>
            <Typography>{Postdata.Likes}</Typography>
            </StyledBox>
            }
            <StyledBox>
                <ChatBubbleOutlineIcon/>
                <Typography>{Postdata.Comments.length}</Typography>

            </StyledBox>

        
      </StyledBox>
  );
}

export default LikesAndShares;

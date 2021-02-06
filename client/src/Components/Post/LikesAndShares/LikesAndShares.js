import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ShareIcon from '@material-ui/icons/Share'


const LikesAndShares = ({Postdata}) => {

  return (
      <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box display="flex" flexDirection="row">
                <ThumbUpIcon color="primary"/>
                <Typography>{Postdata.Likes}</Typography>

            </Box>
            <Box display="flex" flexDirection="row">
                <ChatBubbleOutlineIcon/>
                <Typography>{Postdata.Comments.length}</Typography>

            </Box>

        
      </Box>
  );
}

export default LikesAndShares;

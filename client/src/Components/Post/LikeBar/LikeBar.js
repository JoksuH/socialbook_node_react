import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ShareIcon from '@material-ui/icons/Share'


const LikeBar = (props) => {

  return (
      <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box display="flex" flexDirection="row">
                <ThumbUpIcon color="primary"/>
                <Typography>Like</Typography>

            </Box>
            <Box display="flex" flexDirection="row">
                <ChatBubbleOutlineIcon/>
                <Typography>Comment</Typography>

            </Box>
            <Box display="flex" flexDirection="row">
                <ShareIcon color="primary"/>
                <Typography>Share</Typography>
            </Box>


        
      </Box>
  );
}

export default LikeBar;

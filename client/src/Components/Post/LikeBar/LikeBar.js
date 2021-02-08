import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ShareIcon from '@material-ui/icons/Share'
import { styled } from '@material-ui/core/styles'

const MainBox = styled(Box)({

    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom: "15px",
    marginTop: "15px"
  
  });

const SubBox = styled(Box)({

    display:"flex",
    flexDirection:"row",
    '&:hover': {
        cursor: 'pointer'

    }
  
  });

    

const LikeBar = ({likeClicked, isLiked}) => {

  return (
      <MainBox>
          {(isLiked) ? 
          <SubBox>
                <ThumbUpIcon color="primary"/>
                <Typography>Like</Typography>
          </SubBox> :

            <SubBox onClick={likeClicked}>
                <ThumbUpOutlinedIcon color="primary"/>
                <Typography>Like</Typography>
            </SubBox>
            }
            <SubBox>
                <ChatBubbleOutlineIcon/>
                <Typography>Comment</Typography>

            </SubBox>
            <SubBox>
                <ShareIcon color="primary"/>
                <Typography>Share</Typography>
            </SubBox>


        
      </MainBox>
  );
}

export default LikeBar;

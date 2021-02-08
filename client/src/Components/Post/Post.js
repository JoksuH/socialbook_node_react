import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles'
import AvatarInfo from './AvatarInfo/AvatarInfo';
import LikeBar from './LikeBar/LikeBar';
import LikesAndShares from './LikesAndShares/LikesAndShares'
import CommentListing from './Comments/Comments'
import LeaveComment from './LeaveComment/LeaveComment'
import { useState, useEffect } from 'react'

const StyledGrid = styled(Grid)({

  marginBottom: "50px"

});


const Post = ({post}) => {

  const [Liked, SetLiked] = useState(false);
  const [Comments, SetComments] = useState([]);
  const [Comment, SetComment] = useState('');

  useEffect(() =>  {
    SetComments(post.Comments)

  }, [])

  const onTextChange = (event) => SetComment(event.target.value);

  const handleLikeClick = (event) => {
    fetch(`http://localhost:5000/likes/${post._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      }
    }).then(response => SetLiked(true));
  }

  const handleLeaveComment = (event) => {
    console.log(event)
    fetch(`http://localhost:5000/comments/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      },
      body: JSON.stringify({
        Comment: Comment,
        ParentPost: post._id
      })
    }).then(response => response.json())
    .then((json) => {
      SetComments(Comments.concat(json))
    });

    event.preventDefault();

  }
  

  return (
      <StyledGrid>
        <AvatarInfo data={post}/>


        <Grid item xs={12}>
          <Typography variant="body1">
            {post.Body}
          </Typography>
        </Grid>
        <LikeBar likeClicked={handleLikeClick} isLiked={Liked}/>
        <Divider variant="middle"/>
        <LikesAndShares Postdata={post} liked={Liked}/>
        <Divider />
        <CommentListing Comments={Comments}/>
        <LeaveComment handleLeaveComment={handleLeaveComment} handleTextChange={onTextChange}/>
    </StyledGrid>
  );
}

export default Post;

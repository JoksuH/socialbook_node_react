import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import AvatarInfo from './AvatarInfo/AvatarInfo';
import LikeBar from './LikeBar/LikeBar';
import LikesAndShares from './LikesAndShares/LikesAndShares'


const Post = ({data}) => {

  const handleLikeClick = (event) => {
    fetch(`http://localhost:5000/likes/${data._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
      }
    }).then(response => console.log(response));
  }
  

  return (
      <div>
        <AvatarInfo data={data}/>


        <Grid item xs={12}>
          <Typography>
            {data.Body}
          </Typography>
        </Grid>
        <LikeBar likeClicked={handleLikeClick}/>
        <Divider />
        <LikesAndShares Postdata={data}/>
    </div>
  );
}

export default Post;

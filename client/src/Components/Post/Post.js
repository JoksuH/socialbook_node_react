import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import AvatarInfo from './AvatarInfo/AvatarInfo';
import LikeBar from './LikeBar/LikeBar';
import LikesAndShares from './LikesAndShares/LikesAndShares'


const Post = ({data}) => {

  return (
      <div>
        <AvatarInfo data={data}/>


        <Grid item xs={12}>
          <Typography>
            {data.Body}
          </Typography>
        </Grid>
        <LikeBar />
        <Divider />
        <LikesAndShares />
    </div>
  );
}

export default Post;

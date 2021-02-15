import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Post from './../Post/Post'
import Divider from '@material-ui/core/Divider'

function Postlist({Posts}) {

  return (
      <Grid container direction="column">
        {(Posts.length > 0) ? Posts.map(post => {
          return(
            <Grid item key={post._id}> 
            <Paper elevation={1}>
              <Post post={post} />
            </Paper>
          <Divider />
          </Grid>
          )
              })
             : <p>No posts found!</p>
        }

      </Grid>
     
  );
}

export default Postlist;

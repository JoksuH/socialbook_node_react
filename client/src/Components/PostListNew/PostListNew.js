import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Post from './../Post/Post'
import Divider from '@material-ui/core/Divider'
import {useState, useEffect} from 'react';

function PostListNew(props) {

    const [Posts, SetPosts] = useState([]);

    useEffect(() => {
        GetPosts();
    }, []);

    const GetPosts = () => {

        fetch('http://localhost:5000/posts/', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`
            }
          }).then((response) => response.json())
          .then((json) => {
            console.log(json);
            SetPosts(json)
          });
    }
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
             : <p>Loading Posts...</p>
        }

      </Grid>
     
  );
}

export default PostListNew;

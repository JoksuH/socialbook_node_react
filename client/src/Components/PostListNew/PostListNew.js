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
          .then((json) => SetPosts(json));
    }
  return (
    <div className="PostList">
      <Grid container direction="column">
        {(Posts.length > 0) ? Posts.map(post => {
          return(
            <Grid item> 
            <Paper>
              <Post data={post} />
            </Paper>
          <Divider />
          </Grid>
          )
              })
             : <p>Loading Posts...</p>
        }

      </Grid>
     
    </div>
  );
}

export default PostListNew;

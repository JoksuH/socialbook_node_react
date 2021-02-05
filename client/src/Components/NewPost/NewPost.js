import Grid from '@material-ui/core/Grid'
import Writepad from './../WritePad/WritePad';

function NewPost(props) {
  return (
    <div className="NewPost">
      <Grid container>
      <Writepad />
      </Grid>
     
    </div>
  );
}

export default NewPost;

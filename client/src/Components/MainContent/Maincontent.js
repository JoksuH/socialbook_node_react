import Login from './../Login/Login';
import PostlistNew from './../PostListNew/PostListNew';
import NewPost from './../NewPost/NewPost';
import SignupSideAd from './../SignupSideAd/SignupSideAd';
import { LoggedIn } from './../Utils'
import Box from '@material-ui/core/Box'


function Maincontent() {

  return (
    <div className="Maincontent">
      <PostlistNew />
      <NewPost />
    </div>
  );
}

export default Maincontent;

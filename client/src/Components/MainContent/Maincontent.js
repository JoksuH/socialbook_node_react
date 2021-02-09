import Login from './../Login/Login';
import PostlistNew from './../PostListNew/PostListNew';
import NewPost from './../NewPost/NewPost';
import { styled } from '@material-ui/core/styles'
import SignupSideAd from './../SignupSideAd/SignupSideAd';
import { LoggedIn } from './../Utils'
import Box from '@material-ui/core/Box'


const MainBox = styled(Box)({
  width: '40%',
  marginBottom: "15px",
  marginTop: "15px"

});

function Maincontent() {

  return (
    <MainBox>
      <PostlistNew />
      <NewPost />
    </MainBox>
  );
}

export default Maincontent;

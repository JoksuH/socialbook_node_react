import AvatarField from './AvatarField/AvatarField'
import SidebarLinks from './SidebarLinks/SidebarLinks'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useHistory, Redirect } from 'react-router-dom'
import {LoggedIn} from './../Utils'

import { styled } from '@material-ui/core/styles'

const MainGrid = styled(Grid)({

  display:"flex",
  flexDirection:"column",
  justifyContent:"start",
  marginTop: 15,
  width: '15%',
  background: "rgb(255,255,255)",
  background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)"
});

function Leftsidebar(props) {

  let History = useHistory();
  console.log(LoggedIn())


  const Logout = () => {
    localStorage.removeItem('JWTtoken');
    localStorage.removeItem('curUser');

    History.push('/');

  }

  return (
    <MainGrid>
      <AvatarField user={props}/>
      <SidebarLinks />
      <Button variant="contained" color="primary" onClick={Logout}>LogOut</Button>
    </MainGrid>
  );
}

export default Leftsidebar;

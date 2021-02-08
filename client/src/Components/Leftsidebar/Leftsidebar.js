import AvatarField from './AvatarField/AvatarField'
import SidebarLinks from './SidebarLinks/SidebarLinks'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { styled } from '@material-ui/core/styles'

const MainGrid = styled(Grid)({

  display:"flex",
  flexDirection:"column",
  justifyContent:"start",
  background: "rgb(255,255,255)",
  background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)"
});

function Leftsidebar({user}) {

  console.log(user)

  const Logout = () => {
    localStorage.removeItem('JWTtoken');
  }

  return (
    <MainGrid>
      <AvatarField user={user}/>
      <SidebarLinks />
      <Button variant="contained" color="primary" onClick={Logout}>LogOut</Button>
    </MainGrid>
  );
}

export default Leftsidebar;

import AvatarField from './AvatarField/AvatarField'
import SidebarLinks from './SidebarLinks/SidebarLinks'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { styled } from '@material-ui/core/styles'

const MainGrid = styled(Grid)({

  display:"flex",
  flexDirection:"column",
  justifyContent:"start",
  marginTop: 15,
  width: '15%',
  background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)"
});

function Leftsidebar(props) {


  console.log('LEFT SIDE BAR')


  return (
    <MainGrid>
      <AvatarField />
      <SidebarLinks />
      <Button variant="contained" color="primary" onClick={props.Logout}>LogOut</Button>
    </MainGrid>
  );
}

export default Leftsidebar;

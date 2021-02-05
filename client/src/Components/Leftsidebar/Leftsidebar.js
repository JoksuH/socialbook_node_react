import AvatarField from './AvatarField/AvatarField'
import SidebarLinks from './SidebarLinks/SidebarLinks'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'



function Leftsidebar({user}) {

  console.log(user)

  const Logout = () => {
    localStorage.removeItem('JWTtoken');
  }

  return (
    <div className="Leftsidebar">
      <AvatarField user={user}/>
      <SidebarLinks />
      <Button onClick={Logout}>LogOut</Button>
    </div>
  );
}

export default Leftsidebar;

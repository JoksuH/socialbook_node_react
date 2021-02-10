import SearchField from './SearchField/SearchField';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'

import { styled } from '@material-ui/core/styles'

import blueLogoWide from './../../images/logo_bluebg_wide.jpg'


const MainGrid = styled(Grid)({

  display:"flex",
  flexDirection:"row",
  justifyContent:"start",
  height: 50,
  background: "rgb(19, 151, 213)"
});





const Image = styled('img')({
    width: 350
  });


function Navbar({user}) {


  const Logout = () => {
    localStorage.removeItem('JWTtoken');
    History.push('/');
  }

  return (
    <MainGrid>   
        <Image src={blueLogoWide} />     
      <SearchField />
    </MainGrid>
  );
}

export default Navbar;

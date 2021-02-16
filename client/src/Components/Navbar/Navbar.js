import SearchField from './SearchField/SearchField'
import FriendRequests from './FriendRequests/FriendRequests'
import Grid from '@material-ui/core/Grid'

import { styled } from '@material-ui/core/styles'

import blueLogoWide from './../../images/logo_bluebg_wide.jpg'

const MainGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    height: 50,
    background: 'rgb(19, 151, 213)',
    marginBottom: 20,
})

const Image = styled('img')({
    width: 350,
})

function Navbar({ user }) {
    return (
        <MainGrid>
            <Image src={blueLogoWide} />
            <SearchField />
            <FriendRequests user={user} />
        </MainGrid>
    )
}

export default Navbar

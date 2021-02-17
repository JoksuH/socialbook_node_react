import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Link } from 'react-router-dom'

function SidebarLinks() {
    return (
        <List>
            <ListItem>
                <Link to="/">Homepage</Link>
            </ListItem>
            <ListItem>
            <Link to="/messenger">Messenger</Link>
            </ListItem>
            <ListItem>
                <Link to="/myprofile">Profile</Link>
            </ListItem>
            <ListItem>
                <Link to="/friends">Manage Friends</Link>
            </ListItem>
        </List>
    )
}

export default SidebarLinks

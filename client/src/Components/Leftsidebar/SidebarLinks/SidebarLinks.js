import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'



function SidebarLinks() {



  return (

      <List>
        <ListItem>
           <Link to="/">Homepage</Link>
        </ListItem>
        <ListItem>
            <ListItemText>
                Messages
            </ListItemText>

        </ListItem>
        <ListItem>
        <Link to="/profile">Profile</Link>
        </ListItem>
        <ListItem>
            <ListItemText>
                Friends Online
            </ListItemText>

        </ListItem>
        <ListItem>
            <Link to="/friends">Manage Friends</Link>

        </ListItem>

      </List>

  );
}

export default SidebarLinks;

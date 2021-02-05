import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'



function SidebarLinks() {



  return (

      <List>
        <ListItem>
            <ListItemText>
                Homepage
            </ListItemText>

        </ListItem>
        <ListItem>
            <ListItemText>
                Messages
            </ListItemText>

        </ListItem>
        <ListItem>
            <ListItemText>
                Your Wall
            </ListItemText>

        </ListItem>
        <ListItem>
            <ListItemText>
                Friends Online
            </ListItemText>

        </ListItem>
        <ListItem>
            <ListItemText>
                Manage Friendlist
            </ListItemText>

        </ListItem>

      </List>

  );
}

export default SidebarLinks;

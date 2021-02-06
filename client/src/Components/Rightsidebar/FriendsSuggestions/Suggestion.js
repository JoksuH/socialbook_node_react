import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


function Suggestion({user, handleAddFriend}) {

  return (
    <Box display="flex" flexDirection="row">
        <Typography>
            {user.Firstname + ' ' + user.Lastname}
        </Typography>
        <Button onClick={handleAddFriend} id={user._id}>Send Friend Request</Button>
    </Box>
  );
}

export default Suggestion;

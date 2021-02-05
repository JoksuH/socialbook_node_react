import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'



const AvatarInfo = ({data}) => {

  return (
    <Box display="flex" flexDirection="row">
        <Avatar>

        </Avatar>
        <Box>
        <Typography>
            {data.Author}
        </Typography>
        <Typography>
            {data.dateAdded}
        </Typography>

        </Box>

    </Box>
  );
}

export default AvatarInfo;

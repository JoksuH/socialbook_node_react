import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { useEffect, useState } from 'react';


function AvatarField({user}) {

  return (

      <Box display="flex" flexDirection="row" justifyContent="center" width="200px">
        <Avatar>

        </Avatar>
        <Typography>
         {(user) ? user.Firstname + ' ' + user.Lastname : ''}
        </Typography>

      </Box>

  );
}

export default AvatarField;

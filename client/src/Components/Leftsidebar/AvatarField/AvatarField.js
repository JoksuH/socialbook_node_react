import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { useEffect, useState } from 'react';


function AvatarField({user}) {


  const User = user.user[0]
  console.log(user)

  return(
    <div>
      {(User) ? 
       <Box display="flex" flexDirection="row" justifyContent="center" width="200px">
       <Avatar alt={User.Firstname} src={User.Avatar}/>
       <Typography>
        {user.Fullname}
       </Typography>
       </Box>
      :
      <p>Tyhjä</p> 
      }


    </div>



  )



       
}

export default AvatarField;

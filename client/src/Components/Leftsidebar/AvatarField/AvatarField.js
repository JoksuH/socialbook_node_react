import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {User: state} 
}


const AvatarField = ({User}) => {


  return(
    <div>
      {(User !== []) ? 
       <Box display="flex" flexDirection="row" justifyContent="center" width="200px">
       <Avatar alt={User.Firstname} src={User.Avatar}/>
       <Typography style={{marginLeft: 15, marginTop: 5}}>
        {User.Fullname}
       </Typography>
       </Box>
      :
      <p>Tyhjä</p> 
      }


    </div>

  )  
}

const Avatarfield = connect(mapStateToProps)(AvatarField)

export default Avatarfield;

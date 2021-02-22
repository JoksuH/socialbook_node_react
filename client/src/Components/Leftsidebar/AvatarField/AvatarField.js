import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {User: state} 
}


const AvatarField = ({User, largeView}) => {


  return(
    <div>
      {(User !== [] && largeView) && 
       <Box display="flex" flexDirection="row" justifyContent="center" width="200px">
       <Avatar alt={User.Firstname} src={User.Avatar}/>
       <Typography style={{marginLeft: 15, marginTop: 5}}>
        {User.Fullname}
       </Typography>
       </Box>
      }

      {(User !== [] && !largeView) && 
       <Box display="flex" flexDirection="column" justifyContent="center" width="200px">
       <Avatar alt={User.Firstname} src={User.Avatar} style={{marginLeft: '7vw'}}/>
       <Typography style={{marginLeft: 15, marginTop: 5, fontSize: 15}}>
        {User.Firstname}
       </Typography>
       <Typography style={{marginLeft: 15, marginTop: 5, fontSize: 15}}>
        {User.Lastname}
       </Typography>

       </Box>
      }




    </div>

  )  
}

const Avatarfield = connect(mapStateToProps)(AvatarField)

export default Avatarfield;

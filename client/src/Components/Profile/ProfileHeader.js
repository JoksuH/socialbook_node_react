import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { styled } from '@material-ui/core/styles'

const mapStateToProps = (state) => {
    return { LoggedInUser: state }
}

const ContentBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
})

const TextName = styled(Typography)({
    fontSize: 21,
    margin: 'auto'
})


const StyledAvatar = styled(Avatar)({
    height: '15vh',
    width: '15vh',
    marginRight: '10px',
    marginTop: '5px',
    marginLeft: '10px',
})

const ProfHeader = ({ user }) => {

    return (
        <ContentBox>
        <StyledAvatar alt={user.profilename} src={user.Avatar} />
            <TextName variant="subtitle2">
                 You are currently viewing the profile of {user.Fullname}
            </TextName>
        </ContentBox>
    )
}

const ProfileHeader = connect(mapStateToProps)(ProfHeader)

export default ProfileHeader

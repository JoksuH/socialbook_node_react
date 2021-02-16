import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import { styled } from '@material-ui/core/styles'

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '30px',
})

const StyledAvatar = styled(Avatar)({
    marginRight: '10px',
    marginTop: '10px',
    marginLeft: '10px',
})

const NameText = styled(Typography)({
    textDecoration: 'none',
})

const FormatDate = (date) => {
    let splitDate = date.substring(0, date.length - 5).split('T')
    return splitDate
}

const AvatarInfo = ({ data }) => {
    let formattedDate = FormatDate(data.dateAdded)

    return (
        <StyledBox>
            <StyledAvatar alt={data.Author.Username} src={data.Author.Avatar} />
            <Box>
                <NameText
                    component={Link}
                    to={'/profile/' + data.Author.Username}
                    variant="button"
                    color="primary"
                >
                    {data.Author.Firstname + ' ' + data.Author.Lastname}
                </NameText>
                <Typography variant="subtitle2">
                    {formattedDate[0] + ' @ ' + formattedDate[1]}
                </Typography>
            </Box>
        </StyledBox>
    )
}

export default AvatarInfo

import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const Text = styled(Typography)({
    fontSize: 13,
    textDecoration: 'none'
})


const CommentName = ({ data }) => {
    return (
        <Text component={Link} to={'/profile/' + data.Author.Username} variant="button" color="primary">
            {data.Author.Fullname}
        </Text>
    )
}

export default CommentName

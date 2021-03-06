import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { styled } from '@material-ui/core/styles'
import CommentName from './CommentName'
import CommentTime from './CommentTime'

const MainGrid = styled(Grid)({
    marginBottom: '5px',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
})

const InnerGrid = styled(Grid)({
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
})

const StyledAvatar = styled(Avatar)({
    marginRight: '10px',
    marginTop: '5px',
    marginLeft: '10px',
})

const Text = styled(Typography)({
    fontSize: 14,
})

const Comment = ({ data }) => {
    return (
        <MainGrid>
            <StyledAvatar alt={data.Author.Username} src={data.Author.Avatar} />
            <InnerGrid>
                <Grid item xs={12}>
                    <CommentName data={data} />
                </Grid>
                <Grid item xs={12}>
                    <Text variant="body1">{data.Comment}</Text>
                </Grid>
                <Grid item xs={12}>
                    <CommentTime data={data} />
                </Grid>
            </InnerGrid>
        </MainGrid>
    )
}

export default Comment

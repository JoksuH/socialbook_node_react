import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const MainGrid = styled(Box)({
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
    '&:hover': {
        cursor: 'pointer',
    },
})

const Text = styled(Typography)({
    fontSize: 16,
    gutterBottom: true,
    textDecoration: 'underline',
})

const LoadMoreComments = ({ onClick }) => {
    return (
        <MainGrid>
            <Text onClick={onClick} color="primary" variant="overline">
                Load More Comments...
            </Text>
        </MainGrid>
    )
}

export default LoadMoreComments

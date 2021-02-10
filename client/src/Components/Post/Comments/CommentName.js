import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'



const Text = styled(Typography)({
  fontSize: 12,

})



const CommentName = ({data}) => {

  return (
          <Text variant='button' color="primary">
            {data.Author.Fullname}
          </Text>
  );
}

export default CommentName;

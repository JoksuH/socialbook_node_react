import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles'
import Comment from './Comment';
import { useState } from 'react'

const StyledGrid = styled(Grid)({

  marginBottom: "10px"

});


const Comments = ({Comments}) => {

  

  return (
      <StyledGrid>
        {(Comments) ? Comments.map((comment) => {
          return(
            <div>
            <Comment data={comment}/>
            <Divider />
            </div>
          )

        })
        : <p></p>}
    </StyledGrid>
  );
}

export default Comments;

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { styled } from '@material-ui/core/styles'
import Comment from './Comment'
import LoadMoreComments from './LoadMoreComments'
import { useState } from 'react'

const StyledGrid = styled(Grid)({
    marginBottom: '10px',
})

const Comments = ({ Comments }) => {
    const [AmountOfCommentsToLoad, SetAmountOfCommentsToLoad] = useState(4)

    const GetMoreComments = (event) => {
        SetAmountOfCommentsToLoad(AmountOfCommentsToLoad + 3)
    }

    return (
        <StyledGrid>
            {Comments.length <= AmountOfCommentsToLoad
                ? Comments.map((comment) => {
                      return (
                          <div key={comment._id}>
                              <Comment data={comment} />
                              <Divider />
                          </div>
                      )
                  })
                : Comments.slice(0, AmountOfCommentsToLoad).map((comment) => {
                      return (
                          <div key={comment._id}>
                              <Comment data={comment} />
                              <Divider />
                          </div>
                      )
                  })}
            {Comments.length > AmountOfCommentsToLoad ? (
                <LoadMoreComments onClick={GetMoreComments} />
            ) : (
                <p></p>
            )}
        </StyledGrid>
    )
}

export default Comments

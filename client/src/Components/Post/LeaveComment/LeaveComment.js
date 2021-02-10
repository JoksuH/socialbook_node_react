import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { styled } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core';
import { useState } from 'react'

const MainBox = styled(Box)({

    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom: "15px",
    marginTop: "15px",
    background: "rgb(250, 250, 250)",

  });

const Text = styled(TextField)({
  
  });


    

const LeaveComment = ({handleLeaveComment, handleTextChange, Post}) => {

 

  return (
      <MainBox>
          <Avatar style={{marginRight: 15}} alt={Post.Author.Username} src={Post.Author.Avatar}/>
          <form style={{width: "100%"}} noValidate onSubmit={handleLeaveComment}>
          <Text
            label="Share your thoughts"
            fullWidth
            variant="outlined"
            InputLabelProps={{shrink: true,}}
            onChange={handleTextChange}
          >
          </Text>
          <input type="submit" hidden />
          </form>
          
      </MainBox>
  );
}

export default LeaveComment;

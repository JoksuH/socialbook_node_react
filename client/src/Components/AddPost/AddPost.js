import WritePad from './../WritePad/WritePad'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'
import { useState } from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'


const MainContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '45px',
    marginTop: '25px'
})

const AddPost = ({onPostAdded}) => {

    const [Body, SetBody] = useState('')

    const handleBodyChange = (event) => {
        SetBody(event.target.value)
    }

    const UploadPost = (event) => {
        fetch('http://localhost:5000/posts/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
            body: JSON.stringify({
                body: Body,
            }),
        }).then(() => onPostAdded())
        
        SetBody('')
        event.preventDefault()
    }

    return (
        <MainContainer>
            <Typography style={{margin: 'auto'}}>
                Share your thoughts with your friends...
            </Typography>
            <WritePad OnPost={UploadPost} OnTextChange={handleBodyChange} Textvalue={Body}/>
        </MainContainer>
    )
}

export default AddPost

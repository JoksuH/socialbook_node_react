import ChatBox from './ChatBox'
import ChatWriteBox from './ChatWriteBox'
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'

const MainBox = styled(Container)({
    width: '70%',
    marginBottom: '15px',
    marginTop: '15px',
})

const CurrentConversation = ({ Conversation }) => {
    const [MessageBody, SetMessageBody] = useState('')

    const handleBodyChange = (event) => {
        SetMessageBody(event.target.value)
    }

    //Participant [0] is always the other party (friend)


    const handleSubmit = (event) => {

        console.log(Conversation)
        fetch(`http://localhost:5000/conversations/${Conversation._id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
            body: JSON.stringify({
                Author: Conversation.Participants[1]._id,
                Message: MessageBody,
            }),
        }).then((response) => console.log(response))
        //.then((json) => console.log(json));

        event.preventDefault()
    }

    console.log(Conversation)
    return (
        <MainBox>
            <ChatBox messages={Conversation.Messages} />
            <ChatWriteBox onChange={handleBodyChange} onSubmit={handleSubmit} />
        </MainBox>
    )
}

export default CurrentConversation

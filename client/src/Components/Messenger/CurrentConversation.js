import ChatBox from './ChatBox'
import ChatWriteBox from './ChatWriteBox'
import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'

const MainBox = styled(Container)({
    width: '90%',  
    height: '50vh',
    marginBottom: '15px',
    marginTop: '15px',
})

const CurrentConversation = ({ Conversation, currentUser }) => {


    const [Messages, SetMessages] = useState([])
    const [MessageBody, SetMessageBody] = useState('')
    const [Friend, SetFriend] = useState([])



    useEffect(() => {
        SetMessages(Conversation.Messages)

        if (Conversation.Participants[0]._id === currentUser._id)
            SetFriend(Conversation.Participants[1])
        else
            SetFriend(Conversation.Participants[0])

        


    }, [Conversation, currentUser])

    const handleBodyChange = (event) => {
        SetMessageBody(event.target.value)
    }



    const handleSubmit = (event) => {

        fetch(`http://localhost:5000/conversations/${Conversation._id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
            body: JSON.stringify({
                Author: currentUser,
                Recipient: Friend,
                Message: MessageBody,
            }),
        }).then((response) => response.json())
        .then((json) => { 
            SetMessages(Messages.concat(json))
        })

        event.preventDefault()
    }

    return (
        <MainBox>
            <ChatBox messages={Messages} user={currentUser} friend={Friend}/>
            <ChatWriteBox onChange={handleBodyChange} onSubmit={handleSubmit} />
        </MainBox>
    )
}

export default CurrentConversation

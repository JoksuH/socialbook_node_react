import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useApiToFetch } from './../Utils'

import OpenConversations from './OpenConversations'
import CurrentConversation from './CurrentConversation'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'

const mapStateToProps = (state) => {
    return { curUser: state }
}

const MainBox = styled(Container)({
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '15px',
    marginTop: '15px',
})

const MessengerView = ({ curUser }) => {
    const [ActiveConversation, SetActiveConversation] = useState([])
    const [OpenedConversations, SetOpenConversations] = useApiToFetch('conversations')

    const StartConversation = (user) => {
        console.log(user)
        const ConversationParticipants = [user, curUser]
        const StartedConversation = {
            _id: '',
            Participants: ConversationParticipants,
            Messages: [],
        }
        fetch('http://localhost:5000/conversations', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
            body: JSON.stringify({
                Participants: ConversationParticipants,
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                StartedConversation._id = json._id
            })

        SetActiveConversation(StartedConversation)
        SetOpenConversations(OpenedConversations.concat(StartedConversation))
    }

    const ChangeActiveConversation = (Conversation) => {
        SetActiveConversation(Conversation)
    }

    const handleDeleteConversation = (Conversation) => {
        fetch(`http://localhost:5000/conversations/${Conversation._id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        }).then(UpdateListAfterDelete(Conversation))
    }

    const UpdateListAfterDelete = (Conversation) => {
        const updatedOpenedConversations = OpenedConversations.filter(
            (conversation) => conversation._id !== Conversation._id
        )
        SetOpenConversations(updatedOpenedConversations)
    }

    return (
        <MainBox>
            <OpenConversations
                onNewConversationClick={StartConversation}
                OpenedConversations={OpenedConversations}
                onChangeActiveConversationClick={ChangeActiveConversation}
                onDelete={handleDeleteConversation}
                currentUser={curUser}
            />
            {!Array.isArray(ActiveConversation) && (
                <CurrentConversation
                    Conversation={ActiveConversation}
                    currentUser={curUser}
                />
            )}
        </MainBox>
    )
}

const Messenger = connect(mapStateToProps)(MessengerView)

export default Messenger

import { createRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import Container from '@material-ui/core/Container'
import { styled } from '@material-ui/core/styles'

const MainBox = styled(Container)({
    width: '90%',
    height: '100%',
    marginBottom: '15px',
    marginTop: '15px',
    overflowY: 'scroll',
})

const ChatBox = ({ messages, user, friend }) => {
    const ContainerRef = createRef()

    useEffect(() => {
        ContainerRef.current.scrollTo({ top: 5000000, behavior: 'smooth' })
    }, [ContainerRef])

    return (
        <MainBox ref={ContainerRef}>
            {messages &&
                messages.map((message) => {
                    return (
                        <ChatMessage
                            key={message._id}
                            message={message}
                            user={user}
                            friend={friend}
                        />
                    )
                })}
        </MainBox>
    )
}

export default ChatBox

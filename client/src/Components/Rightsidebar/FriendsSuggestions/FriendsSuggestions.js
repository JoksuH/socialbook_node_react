import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useEffect, useState } from 'react'
import Suggestion from './Suggestion'
import { styled } from '@material-ui/core/styles'

const MainContainer = styled(Box)({
    marginTop: 20,
})

function FriendsSuggestions() {
    const [Suggestions, SetSuggestions] = useState([])
    const [FetchMoreSuggestions, SetFetchMoreSuggestions] = useState(false)

    const [WideView, SetWideView] = useState(true)

    const [WindowWidth, SetWindowWidth] = useState(window.innerWidth)


    useEffect(() => {
        fetch('http://localhost:5000/users/friendsuggestions', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => SetSuggestions(json))
    }, [FetchMoreSuggestions])


    useEffect(() => {
        window.addEventListener('resize', upDateWindowSize)
        if (WindowWidth < 1000) {
            SetWideView(false)
        } else {
            SetWideView(true)
        }
    }, [WindowWidth])


    const upDateWindowSize = () => {
        SetWindowWidth(window.innerWidth)
    }


    const handleAddFriend = (event) => {
        fetch(
            `http://localhost:5000/users/requestfriend/${event.target.parentElement.id}`,
            {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
                },
            }
        ).then(() => {
            //Update Friend suggestion list by removing the added friend
            const CutDownSuggestions = Suggestions.filter(
                (suggestion) => suggestion._id !== event.target.parentElement.id
            )
            // Get more friends suggestions if only less than 5 left and there is enough members to suggest
            if (CutDownSuggestions.length < 5 && Suggestions.length >= 5) {
                SetFetchMoreSuggestions(!FetchMoreSuggestions)
            } else {
                setTimeout(() => SetSuggestions(CutDownSuggestions), 1000)
            }
        })
    }

    return (
        <MainContainer>
            <Typography variant="subtitle2">People you may know...</Typography>
            {Suggestions.length > 0 ? (
                Suggestions.map((user) => {
                    return (
                        <Suggestion
                            user={user}
                            key={user._id}
                            onAddFriend={handleAddFriend}
                            viewWide = {WideView}
                        />
                    )
                })
            ) : (
                <Typography>Loading Friend Suggestions</Typography>
            )}
        </MainContainer>
    )
}

export default FriendsSuggestions

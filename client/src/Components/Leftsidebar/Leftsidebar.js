import AvatarField from './AvatarField/AvatarField'
import SidebarLinks from './SidebarLinks/SidebarLinks'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { styled } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'

const MainGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    marginTop: 15,
    width: '15%',
    background:
        'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)',
})

const MobileGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    marginTop: 15,
    width: '5%',
    background:
        'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 100%)',
})

function Leftsidebar(props) {
    const [WideView, SetWideView] = useState(true)
    const [SidebarOpen, SetSidebarOpen] = useState(false)

    const [WindowWidth, SetWindowWidth] = useState(window.innerWidth)

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

    const OpenSideBar = () => {
        SetSidebarOpen(!SidebarOpen)
    }

    return (
        <>
            {WideView && (
                <MainGrid>
                    <AvatarField largeView={WideView} />
                    <SidebarLinks />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={props.Logout}
                        style={{ cursor: 'pointer' }}
                    >
                        LogOut
                    </Button>
                </MainGrid>
            )}
            {!WideView && SidebarOpen && (
                <MainGrid>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={OpenSideBar}
                        style={{ cursor: 'pointer', marginBottom: '9vh', marginLeft:'5vw' }}
                    >
                        Close
                    </Button>
                    <AvatarField largeView={WideView} />
                    <SidebarLinks />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={props.Logout}
                        style={{ cursor: 'pointer', marginTop: '15vh' }}
                    >
                        LogOut
                    </Button>
                </MainGrid>
            )}
            {!WideView && !SidebarOpen && (
                <MobileGrid>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={OpenSideBar}
                        size="small"
                        style={{ cursor: 'pointer' }}
                    >
                        Open
                    </Button>
                </MobileGrid>
            )}
        </>
    )
}

export default Leftsidebar

import React from 'react'
import { useApiToFetch } from './../Utils'
import EditProfileForm from './EditProfileForm'

const EditProfile = () => {
    const [UserInfo, SetUserInfo] = useApiToFetch(`users/myinfo`)

    return (
        <>
            <EditProfileForm userInfo={UserInfo} />
        </>
    )
}

export default EditProfile

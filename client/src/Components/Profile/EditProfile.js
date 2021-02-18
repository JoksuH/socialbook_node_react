import React from 'react'
import { useState, useEffect } from 'react'
import EditProfileForm from './EditProfileForm'
import RightSidebar from './../Rightsidebar/Rightsidebar'

const EditProfile = () => {
    const [UserInfo, SetUserInfo] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users/myinfo`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        })
            .then((response) => response.json())
            .then((json) => SetUserInfo(json))
    }, [])

    return (
        <>
            <EditProfileForm userInfo={UserInfo} />
            <RightSidebar />
        </>
    )
}

export default EditProfile

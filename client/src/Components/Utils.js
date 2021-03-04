import { useEffect, useState } from "react";

function LoggedIn() {

    if (localStorage.getItem('JWTtoken')) 
        return true;
    else
        return false;
}

function useApiToFetch (postfix) {

    const [Content, SetContent] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/${postfix}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('JWTtoken')}`,
            },
        })
            .then((response) => (response.json()))
            .then((json) =>  { 
                console.log(json)
                SetContent(json)
            })
    
    }, [postfix])

    return [Content, SetContent]

    

}


  
export {LoggedIn, useApiToFetch};

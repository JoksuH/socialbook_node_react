function LoggedIn() {

    if (localStorage.getItem('JWTtoken')) 
        return true;
    else
        return false;
}


  
export {LoggedIn};

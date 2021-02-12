import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoggedIn } from './../Utils';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  
  console.log('This is Public')

  return (

    //restricted false = public route 

    <Route {...rest} render={props => (
        LoggedIn() ?
            <Redirect to="/" />
            :
            <Component {...props} {...rest} />
            
    )}  />
    
  );
};

export default PublicRoute;

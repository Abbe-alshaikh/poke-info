import React, {Component, useContext} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {AuthContext, Authprovider} from './auth'

const PrivateRoute = ({component: RouteComponent, ...reset}) => {
    const {currentUser}= useContext(AuthContext);
    return (
        <Route
        {...reset}
        render = {routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
         ) : (
            <Redirect to ={"/"} />
         )
        }
        />
    );
};


export default PrivateRoute;
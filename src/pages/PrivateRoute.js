import React from 'react';
import { Route, Redirect, Router, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../context/user_context'

// import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  const { loginWithRedirect } = useUserContext()
  const { user } = useAuth0()
  return (
    <Route {...rest} render={() => {
      return user ? children : <Redirect to='/products'></Redirect>
    }}></Route>
  );
};
export default PrivateRoute;

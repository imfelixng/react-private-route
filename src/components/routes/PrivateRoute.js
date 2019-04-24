import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from '../../service/fake-auth';

const PrivateRoute = ({ Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
}

export default PrivateRoute;
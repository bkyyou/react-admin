import React from 'react';
import { Route } from 'react-router-dom';
import cookie from 'react-cookies';

import Login from '../../view/account/Login.js';

function getToken() {
  return cookie.load('token');
}

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      // return getToken() ? <Component {...routeProps} /> : <Login></Login>
      return <Component {...routeProps} />
      // return <Login></Login>
    }}></Route>

    // <Route exact render={() => <Login />} path='/'></Route>
  )
}

export default PrivateRouter;
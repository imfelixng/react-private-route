import React from 'react';
import fakeAuth from '../service/fake-auth';

class Login extends React.Component {
  login = () => {
    fakeAuth.authenticate(() => {

    })
  }
  render() {
    return (
      <>
        Login Page
      </>
    )
  }
}

export default Login;
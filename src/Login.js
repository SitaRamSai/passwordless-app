import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Login = () => {
  const { oktaAuth } = useOktaAuth();

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login with Okta</button>
    </div>
  );
};

export default Login;

import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Protected = () => {
  const { authState, oktaAuth } = useOktaAuth();

  const logout = async () => {
    await oktaAuth.signOut();
  };

  if (!authState || !authState.isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Protected</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Protected;

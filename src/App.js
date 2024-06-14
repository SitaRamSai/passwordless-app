import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

const oktaAuth = new OktaAuth({
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback',
});

function App() {
  return (
    <Router>
      <Security oktaAuth={oktaAuth}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/login/callback" component={LoginCallback} />
          <SecureRoute path="/protected" component={Protected} />
        </Switch>
      </Security>
    </Router>
  );
}

export default App;

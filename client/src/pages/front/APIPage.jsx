import React from 'react';
import Auth from '../../utils/Auth';

class APIPage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>API Docs</h1>
          {Auth.isUserAuthenticated() ? (
            <div style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</div>
          ) : (
            <div style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</div>
          )}
      </div>
    )
  }
};

export default APIPage;

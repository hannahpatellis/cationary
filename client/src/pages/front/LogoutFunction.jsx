import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../../utils/Auth';

class LogoutFunction extends React.Component {

  componentDidMount() {
    // Deauthenticate user
    Auth.deauthenticateUser();
    // Change the current URL to / after logout
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12'>
            <p>Logging out...</p>
          </div>
        </div>
      </div>
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;

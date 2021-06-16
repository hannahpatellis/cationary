import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../../utils/Auth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Segment, Header, Icon, Button, Input, Message } from 'semantic-ui-react';

class LoginPage extends React.Component {
  // set the initial component state
  state = {
    errors: {},
    successMessage: '',
    user: {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.setState({ successMessage });
  }

  componentWillUnmount() {
    this.setState({
      errors: {}
    });
  }
  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm = event => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const { username, password } = this.state.user;

    API.login({ username, password }).then(res => {
      // save the token
      Auth.authenticateUser(res.data.token);

      // update authenticated state
      this.props.toggleAuthenticateStatus()

      // redirect signed in user to dashboard
      this.props.history.push('/dashboard');

    }).catch(({ response }) => {

      const errors = response.data.errors ? response.data.errors : {};
      errors.summary = response.data.message;

      this.setState({
        errors
      });
    });

  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }
  
  render() {
    return (
      <div className='container mt-5'>
        <div className='row justify-content-md-center'>
          <div className='col-12 col-md-10'>
            <Segment placeholder className='p-5'>
              <Header icon>
                {this.state.successMessage && <Message floating positive>{this.state.successMessage}</Message>}
                {this.state.errors.summary && <Message floating negative>{this.state.errors.summary}</Message>}
                <form action='/' onSubmit={this.processForm}>
                  <div className='p-2'>
                    <Input
                      placeholder='Username'
                      name='username'
                      errorText={this.state.errors.username}
                      onChange={this.changeUser}
                      value={this.state.user.username}
                    />
                  </div>
                  <div className='p-2'>
                    <Input
                      placeholder='Password'
                      type='password'
                      name='password'
                      onChange={this.changeUser}
                      errorText={this.state.errors.password}
                      value={this.state.user.password} />
                  </div>
                  <Button type='submit' className='mt-3' primary>Log in</Button>
                </form>
              </Header>
            </Segment>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12'>
            <p style={{ 'textAlign': 'center' }}>Don't have an account? <Link to={'/signup'}>Create one</Link>.</p>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;
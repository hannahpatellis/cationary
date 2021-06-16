import React from 'react';
import PropTypes from 'prop-types';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Segment, Message, Button, Input } from 'semantic-ui-react';


class SignUpPage extends React.Component {
  // set the initial component state
  state = {
    errors: {},
    user: {
      username: '',
      name: '',
      password: ''
    }
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
    const { name, username, password } = this.state.user;

    //const formData = `username=${username}&password=${password}`;
    API.signUp({ name, username, password }).then(res => {
      // change the component-container state
      // set a message
      localStorage.setItem('successMessage', res.data.message);

      // redirect user after sign up to login page
      this.props.history.push('/login');
      this.setState({
        errors: {}
      });

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

  /**
   * Render the component.
   */
  render() {
    return (

      <div className='container mt-5'>
        <div className='row justify-content-md-center'>
          <div className='col-12 col-md-10'>
            <Segment className='p-5'>
              <form action="/" onSubmit={this.processForm}>
                <h1>Sign up for Cationary</h1>

                {this.state.errors.summary && <Message floating positive>{this.state.errors.summary}</Message>}

                <div className="pt-2">
                  <Input
                    placeholder='Name'
                    name="name"
                    errorText={this.state.errors.name}
                    onChange={this.changeUser}
                    value={this.state.user.name}
                  />
                </div>

                <div className="pt-2">
                  <Input
                    placeholder="Username"
                    name="username"
                    errorText={this.state.errors.username}
                    onChange={this.changeUser}
                    value={this.state.user.username}
                  />
                </div>

                <div className="pt-2">
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.changeUser}
                    errorText={this.state.errors.password}
                    value={this.state.user.password}
                  />
                </div>

                <Button type="submit" className='mt-3' primary>Create New Account</Button>
              </form>
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

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;

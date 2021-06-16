import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {
  PrivateRoute,
  PropsRoute,
  LoggedOutRoute
} from './components/Routes';

import HomePage from './pages/front/HomePage.jsx';
import LoginPage from './pages/front/LoginPage.jsx';
import LogoutFunction from './pages/front/LogoutFunction.jsx';
import SignUpPage from './pages/front/SignUpPage.jsx';
import APIPage from './pages/front/APIPage.jsx';
import DashboardPage from './pages/back/DashboardPage.jsx';

import Auth from './utils/Auth';

class App extends Component {

  state = {
    authenticated: false
  }

  componentDidMount() {
    // Check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus = () => {
    // Check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div className='container'>
              <div className='row justify-content-between p-4'>
                <div className='col-2'>
                  <Link to='/'><h1>Cationary</h1></Link>
                </div>
                {this.state.authenticated ? (
                  <div className='col-5 d-flex flex-row-reverse'>
                    <Link to='/logout'><Button primary>Log out</Button></Link>
                    <Link to='/dashboard'><Button>Dashboard</Button></Link>
                  </div>
                ) : (
                  <div className='col-5 d-flex flex-row-reverse'>
                    <Link to='/signup'><Button primary>Sign up</Button></Link>
                    <Link to='/login'><Button>Log in</Button></Link>
                  </div>
                )}
              </div>
            </div>

            <PropsRoute exact path='/' component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <PropsRoute path='/api' component={APIPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <PrivateRoute path='/dashboard' component={DashboardPage} />
            <LoggedOutRoute path='/login' component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path='/signup' component={SignUpPage} />
            <Route path='/logout' component={LogoutFunction} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;

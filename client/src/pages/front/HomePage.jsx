import React from 'react';
import Auth from '../../utils/Auth';
import WordCard from '../../components/universal/WordCard';

import { Segment, Header, Label, Card } from 'semantic-ui-react';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div className="container mt-5">
        {/* {Auth.isUserAuthenticated() ? (
            <div style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</div>
          ) : (
            <div style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</div>
          )} */}
        <div className="row justify-content-center">
          <div className="col-8">
            <Segment raised>
              <Label as='a' color='teal' ribbon>
                Word of the day
              </Label>
              <Header>
                Word
              </Header>
              <p><em>(n.)</em> • The meaning of the word</p>
              <Label as='a' image>
                <img src='/images/avatar/small/joe.jpg' />
                Peach
              </Label>
            </Segment>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-6">
            <Segment padded>
              <Label attached='top'>What is Cationary?</Label>
              <p>Cationary is a pet project of <a href="https://hannahap.com">Hannah Patellis</a> (pun intended) made with the intention of preserving those weird words you make up just to talk with your cats.</p>
            </Segment>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-6">
            <hr />
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-12">
            <WordCard />
          </div>
        </div>
      </div>
    )
  }
};

export default HomePage;

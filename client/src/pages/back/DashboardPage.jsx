import React from 'react';
import Auth from '../../utils/Auth';
import API from '../../utils/API';

import MyWords from '../../components/back/DashboardPage/MyWords';
import Add from '../../components/back/DashboardPage/Add';
import UserSettings from '../../components/back/DashboardPage/UserSettings';

import { Menu, Segment } from 'semantic-ui-react';

class DashboardPage extends React.Component {
  state = {
    secretData: '',
    user: {},
    activeTab: 'MyWords'
  }

  componentDidMount() {
    API.dashboard(Auth.getToken())
      .then(res => {
        this.setState({
          secretData: res.data.message,
          user: res.data.user
        });
      })
  }

  DecideTab = () => {
    const { activeTab } = this.state;
    if (activeTab === 'MyWords') {
      return <MyWords />;
    }
    else if (activeTab === 'Add') {
      return <Add />;
    }
    else if (activeTab === 'UserSettings') {
      return <UserSettings />;
    }
    else {
      return <MyWords />;
    }
  }

  changeTab = e => {
    this.setState({
      activeTab: e.target.dataset.item
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div class="col-12">
            <Menu pointing>
              <Menu.Item
                name='My words'
                data-item='MyWords'
                active={this.state.activeTab === 'MyWords'}
                onClick={this.changeTab}
              />
              <Menu.Item
                name='Add a word'
                data-item='Add'
                active={this.state.activeTab === 'Add'}
                onClick={this.changeTab}
              />
              <Menu.Menu position='right'>
                <Menu.Item
                  name='Settings'
                  data-item='UserSettings'
                  active={this.state.activeTab === 'UserSettings'}
                  onClick={this.changeTab}
                />
              </Menu.Menu>
            </Menu>
          </div>
        </div>
        <div className='row mt-4'>
          <div class="col-12">
            <Segment>
              <this.DecideTab />
            </Segment>
          </div>
        </div>
        {/* {this.state.secretData && <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{this.state.user.name}</strong>!<br />{this.state.secretData}</div>} */}
      </div>);
  }

}

export default DashboardPage;

import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import FindContainer from '../shared/find_container';
import FindNav from '../shared/find_nav';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchGroups();
  }

  groupListItems() {
    this.props.groupList.map(group => (
      <li>{group.name}</li>
    ));
  }

  eventList() {
    this.props.eventList.map(event => (
      <li>{event.title}</li>
    ));
  }

  render () {
    return (
      <div className="authenticated-body">
        <FindContainer />
        <FindNav />
        <div className="home-main-body">
          <div className="simple-view">
            <div className="units">
              <ul>
                {this.props.children}
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);

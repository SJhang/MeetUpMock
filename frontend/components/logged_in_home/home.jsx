import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Header from '../shared/header';
import FindContainer from '../shared/find_container';


class Home extends React.Component {
  groupList() {
    debugger;
    this.props.groups.map(group => (
      <li>{group.name}</li>
    ));
  }

  eventList() {
    debugger;
    this.props.events.map(event => (
      <li>{event.title}</li>
    ));
  }

  render () {
    return (
      <div className="authenticated-body">
        <FindContainer />

        <div className="home-main-body">
          <div className="simple-wrap">
            <div className="dropdown-sorts"></div>
            <div className="simple-view">
              <div className="units">
                <div className="margin-top">&nbsp;</div>
                <ul>
                  {this.groupList}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);

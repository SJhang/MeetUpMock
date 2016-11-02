import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Header from '../shared/header';


class Home extends React.Component {

  redirectIfLoggedOut() {
    if (!this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();
  }

  render () {
    return (
      <div>
        <Header
          currentUser={this.props.currentUser}
          logout={this.props.logout}/>
      </div>
    );
  }
}

export default withRouter(Home);

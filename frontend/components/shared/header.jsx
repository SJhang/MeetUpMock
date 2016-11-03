import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {

  logout() {
    this.props.logout();
    this.props.router.push('/');
  }

  headerText() {
    if (this.props.currentUser.username) {

    }
  }

  render () {

    return (
      <nav className="global-header">
        <div>logo</div>
        <ul>
          <li>{this.props.currentUser.username}</li>
          <li><Link to='/login'>Log in</Link></li>
          <li><button onClick={this.logout.bind(this)}>Log Out</button></li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);

import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {

  logout() {
    this.props.logout();
    this.props.router.push('/');
  }

  login() {
    this.props.router.push('/login');
  }

  signup() {
    this.props.router.push('/signup');
  }

  headerText() {
    if (this.props.currentUser.username) {
      return (
        <ul>
          <li>{this.props.currentUser.username}</li>
          <li><button onClick={this.logout.bind(this)}>Log Out</button></li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li><button onClick={this.login.bind(this)}>Sign in</button></li>
          <li className="header-sign-up"><button onClick={this.signup.bind(this)}>Sign up</button></li>
        </ul>
      );
    }
  }

  render () {

    return (
      <nav className="global-header">
        <div className="header-logo">logo</div>
        <div>
          {
            this.headerText()
          }
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);

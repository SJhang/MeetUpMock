import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

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

  redirectToProfile() {
    this.props.router.push(`/users/${this.props.currentUser.id}`);
  }

  clickLogo() {
    if (this.props.currentUser.username) {
      this.props.router.push('/home');
    } else {
      this.props.router.push('/');
    }
  }

  headerText() {
    if (this.props.currentUser.username) {
      return (
        <ul>
          <li><button onClick={this.redirectToProfile.bind(this)}>{this.props.currentUser.username}</button></li>
          <li><button onClick={this.logout.bind(this)}>Log Out</button></li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li><button onClick={this.login.bind(this)}>Sign in</button></li>
          <li><button onClick={this.signup.bind(this)}>Sign up</button></li>
        </ul>
      );
    }
  }

  render () {

    return (
      <nav className="global-header">
        <div className="header-logo" onClick={this.clickLogo.bind(this)}>logo</div>
        <div className="header-clickables">
          {
            this.headerText()
          }
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);

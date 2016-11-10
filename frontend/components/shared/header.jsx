import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  closeDropDown() {
    $(document).click(e => {
      e.stopPropagation();
      let dropdown = $(".dropdown-content");

      if (dropdown.has(e.target).length === 0) {
        dropdown.hide();
      }
    });
  }

  toggleDropDown() {
    let dropdown = $(".dropdown-content");
    dropdown.removeClass("hidden");
    dropdown.mouseout(() => dropdown.addClass("hidden"));
      $(document).click(e=> {
        if ($(e.target).attr("class") === "dropdown-content") {
          e.stopPropagation();
        } else {
          dropdown.addClass("hidden");
        }
      });
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
    hashHistory.push(`/users/${this.props.currentUser.id}`);
  }


  clickLogo() {
    if (this.props.currentUser.username) {
      this.props.router.push('/home');
    } else {
      if (window.location.hash !== "#/") {
        this.props.router.push('/');
      }
    }
  }

  headerText() {
    if (this.props.currentUser.username) {

      return (
        <div className="profile">
          <button onClick={this.toggleDropDown.bind(this)}><h6>{this.props.currentUser.username}</h6></button>
          <div className="dropdown-content hidden">
            <Link
              className="profile-link"
              to={`/users/${this.props.currentUser.id}`}>Profile</Link>
            <Link
              className="logout"
              onClick={this.logout.bind(this)}>Log Out</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="session-buttons">
          <button onClick={this.login.bind(this)}>Sign in</button>
          <button onClick={this.signup.bind(this)}>Sign up</button>
        </div>
      );
    }
  }

  render () {

    return (
      <header className="main-nav">
        <div>
          <nav className="left-nav">
            <div>
              <i className="fa fa-meetup big" onClick={this.clickLogo.bind(this)}>LOGO</i>
            </div>
          </nav>
          <nav className="right-nav">
            {
              this.headerText()
            }
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

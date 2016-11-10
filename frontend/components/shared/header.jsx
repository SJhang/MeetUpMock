import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import ProfileButton from './profile_button';

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
        <ProfileButton
          currentUser={this.props.currentUser}
          logout={this.props.logout}/>
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
              <i className="fa fa-meetup fa-5x" onClick={this.clickLogo.bind(this)}></i>
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

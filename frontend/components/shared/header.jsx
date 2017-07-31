import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
        <div className="nav navbar-nav navbar-right">
          <Link
            to={'/login'}
            className="btn btn-default navbar-btn">Log in</Link>
          <Link
            to={'/signup'}
            className="btn btn-primary navbar-btn">Sign up</Link>
        </div>
      );
    }
  }

  render () {

    return (
      <nav className="navbar navbar-toggleable-md fixed-top">
        <div className="container">
          <button
            type="button"
            className="navbar-toggler navbar-toggler-right collapsed"
            data-toggle="collapse"
            data-targer="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand">
            <i className="fa fa-meetup fa-3x" onClick={this.clickLogo.bind(this)}></i>
          </a>
          <div
            className="navbar-collapse collapse"
            id="navbarCollapse"
            aria-expanded='false'>
            <ul className="nav navbar-nav mr-auto">
              <li className="navbar-item active">
                <Link to={'/create'} className="nav-link">Start a Meet Up</Link>
              </li>
              <li className="navbar-item">
                { this.headerText() }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import ProfileButton from './profile_button';

class Navbar extends React.Component {
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
    debugger;
    this.props.logout();
    this.props.history.push('/');
  }

  login() {
    debugger;
    this.props.history.push('/login');
  }

  signup() {
    debugger;
    this.props.history.push('/signup');
  }

  redirectToProfile() {
    debugger;
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }


  clickLogo() {
    if (this.props.currentUser) {
      this.props.history.push('/home');
    } else {
      if (window.location.hash !== "") {
        this.props.history.push('/');
      }
    }
  }

  // <ProfileButton
  //   currentUser={this.props.currentUser}
  //   logout={this.props.logout}/>
  headerText() {
    if (this.props.currentUser) {
      debugger;
      return (
        <div className="nav navbar-nav navbar-right">
          <img className="img-circle"></img>
        </div>
      )
    } else {
      return (
        <div className="nav navbar-nav navbar-right">
          <Link to={'/login'} className="btn btn-default navbar-btn">
            Log in
          </Link>
          <Link to={'/signup'} className="btn btn-primary navbar-btn">
            Sign up
          </Link>
        </div>
      );
    }
  }

  render () {

    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" onClick={() => this.clickLogo()}>GearUp</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            {this.headerText()}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);

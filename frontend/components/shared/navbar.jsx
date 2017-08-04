import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import ProfileButton from './profile_button';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  headerText() {
    if (this.props.currentUser) {
      return (
        <div className="nav navbar-nav navbar-right">
          <div className="dropdown nav-profile">
            <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="img-circle" width="40" src={this.props.currentUser.profile_img}></img>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <ul className="dropdown-menu">
              <br/>
              <li><Link to={`/profile/${this.props.currentUser.username}`} className="dropdown-item">Profile</Link></li>
              <li><Link to={`/profile/${this.props.currentUser.username}/groups`} className="dropdown-item">Groups</Link></li>
              <li><Link to={`/profile/${this.props.currentUser.username}/events`} className="dropdown-item">Events</Link></li>
              <li><Link to={`/profile/${this.props.currentUser.username}/streams`} className="dropdown-item">Streams</Link></li>
              <hr/>
              <li><a className="dropdown-item dropdown-logout" onClick={() => this.props.logout()}>Log Out</a></li>
              <br/>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className="nav navbar-nav navbar-right nav-buttons">
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
            <Link
              className="navbar-brand"
              to={this.props.currentUser ? '/home' : '/'}>Gear<h3>Up</h3></Link>
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

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {logout} from '../../actions/session_actions';

class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  renderSessionButton() {
    if (this.props.currentUser) {
      return (
        <a
          className="btn btn-danger"
          onClick={() => this.props.logout()}>Sign Out</a>
      )
    } else {
      return (
        <Link
          className="btn btn-primary"
          to='/signup'>Sign Up</Link>
      )
    }
  }

  angelLink() {
    window.open("https://www.angel.co/sonik-jhang");
  }

  githubLink() {
    window.open("https://github.com/SJhang");
  }

  linkedinLink() {
    window.open("https://www.linkedin.com/in/sonik-jhang-33b767106?trk=hp-identity-name");
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Link className="title create" to={'/groups/new'}>Start Recruiting</Link>
            </div>
            <div className="col-sm-2 pull-right">
              {this.renderSessionButton()}
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-sm-3">
              <h4 className="title">Gear Up</h4>
              <p>GearUp is a solution for gamers. Find your teammates and group up FTW.</p>
              <span className="social-icon">
                <a><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                <a><i className="fa fa-google" aria-hidden="true"></i></a>
              </span>
            </div>
            <div className="col-sm-2">
              <h4 className="title">My Account</h4>
              <span className="account-icon">
                <a><i className="fa fa-gamepad" aria-hidden="true"></i>Games</a>
                <a><i className="fa fa-users" aria-hidden="true"></i>Groups</a>
                <a><i className="fa fa-twitch" aria-hidden="true"></i>Streams</a>
                <a><i className="fa fa-video-camera" aria-hidden="true"></i>Videos</a>
                <a><i className="fa fa-id-badge" aria-hidden="true"></i>Setting</a>
              </span>
            </div>
            <div className="col-sm-5">
              <h4 className="title">Favorites</h4>
              <span className="favorites">
                <a>Overwatch</a>
                <a>League Of Legends</a>
                <a>Battle Ground</a>
                <a>Diablo III</a>
                <a>StarCraft II</a>
                <a>World of Warcraft</a>
                <a>Sudden Attack</a>
                <a>Aion</a>
                <a>Witcher III</a>
              </span>
            </div>
            <div className="col-sm-2">
              <h4 className="title">About Me</h4>
              <ul className="nav nav-pills profiles">
                <li><a onClick={this.githubLink.bind(this)}>
                  <i className="fa fa-github" aria-hidden="true"></i></a>
                </li>
                <li><a onClick={this.linkedinLink.bind(this)}>
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                </li>
                <li><a onClick={this.angelLink.bind(this)}>
                  <i className="fa fa-angellist" aria-hidden="true">&nbsp;</i></a>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <p className="text-center"> © 2017 Made by Sonik Jhang.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);

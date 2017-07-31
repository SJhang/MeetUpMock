import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {logout} from '../../actions/session_actions';

class Footer extends React.Component{

  footerLink() {
    if (window.location.hash === "#/") {
      return (
        <Link to='/login'>Log in</Link>
      );
    } else {
      return (
        <button onClick={this.props.logout.bind(this)}>Log out</button>
      );
    }
  }

  componentWillReceiveProps(newProps) {

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
      <footer className="row col-xs-12">
        <div className="seperator">
          <div className="bot"></div>
          <div className="top"></div>
        </div>
        <div className="footer-top">
          <div><Link to={'/create'}>Start a Meet Up</Link></div>
          <div>
            {this.footerLink()}
          </div>
        </div>
        <div className="footer-mid">
          <ul>
            <li><i className="fa fa-angellist fa-2x" aria-hidden="true"
              onClick={this.angelLink.bind(this)}>&nbsp;</i></li>
            <li><i className="fa fa-github fa-2x" aria-hidden="true"
              onClick={this.githubLink.bind(this)}></i></li>
            <li><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"
              onClick={this.linkedinLink.bind(this)}></i></li>
          </ul>
          <div>Built by Sonik Jhang</div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);

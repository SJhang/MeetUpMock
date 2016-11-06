import React from 'react';
import { Link, withRouter } from 'react-router';

class Footer extends React.Component{
  constructor(props) {
    super(props);
  }

  footerLink() {
    if (window.location.hash === "#/") {
      return (
        <Link to='/login'>Log in</Link>
      );
    } else {
      this.props.logout();
      return (
        <Link to='/'>Log out</Link>
      );
    }
  }

  facebookLink() {
    window.open("https://www.facebook.com/sonik.jhang");
  }

  githubLink() {
    window.open("https://github.com/SJhang");
  }

  linkedinLink() {
    window.open("https://www.linkedin.com/in/sonik-jhang-33b767106?trk=hp-identity-name");
  }

  render() {
    return (
      <footer className="main-footer">
        <div className="footer-top">
          <div><a>Start a Meet Up</a></div>
          <div>
            {this.footerLink.bind(this)}
          </div>
        </div>
        <div className="footer-mid">
          <ul>
            <li><i className="fa fa-facebook-square fa-2x" aria-hidden="true"
              onClick={this.facebookLink.bind(this)}>&nbsp;</i></li>
            <li><i className="fa fa-github fa-2x" aria-hidden="true"
              onClick={this.githubLink.bind(this)}></i></li>
            <li><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"
              onClick={this.linkedinLink.bind(this)}></i></li>
          </ul>
        </div>
        <div className="footer-bot">
          <ul>
            <li></li>
            <li>Built by Sonik Jhang</li>
            <li></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;

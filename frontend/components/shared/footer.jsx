import React from 'react';
import { Link, withRouter } from 'react-router';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div><a>Start a Meet Up</a></div>
        <div><Link to='/login'>Sign in</Link></div>
      </div>
      <ul>
        <li>facebook</li>
        <li>twitter</li>
        <li>github</li>
      </ul>
      <ul>
        <li></li>
        <li>Built by Sonik Jhang</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;

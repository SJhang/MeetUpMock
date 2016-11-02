import React from 'react';
import { Link, withRouter } from 'react-router';

const Footer = () => {
  return (
    <div>
      <div>
        <div><a>Start a Meet Up</a></div>
        <div><Link to='/login'>Log in</Link></div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
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

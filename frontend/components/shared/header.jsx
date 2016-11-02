import React from 'react';
import { Link } from 'react-router';

const Header = ({currentUser, logout}) => {
  return (
    <nav>
      <ul>
        <li></li>
        <li>{currentUser.username}</li>
        <li><button onClick={logout}>Log Out</button></li>
      </ul>
    </nav>
  );
};

export default Header;

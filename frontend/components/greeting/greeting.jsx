import React from 'react';
import { Link } from 'react-router';

const Greeting = ({currentUser, logout, login}) => {

  if (currentUser) {
    return (
      <div>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="auth-items">
        <Link to='/login'>Login</Link>
        <br/>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <button onClick={ () => login({username: "guest", password: "password"})}>
          Guest Login
        </button>
      </div>
    );
  }
};


export default Greeting;

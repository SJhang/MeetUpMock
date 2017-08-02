import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const ProfileButton = (props) => {
  const history = createBrowserHistory();

  const closeDropDown = () => {
    $(document).click(e => {
      e.stopPropagation();
      let dropdown = $(".dropdown-content");

      if (dropdown.has(e.target).length === 0) {
        dropdown.hide();
      }
    });
  };

  const toggleDropDown = () => {
    let dropdown = $(".dropdown-content");
    dropdown.removeClass("hidden");
    dropdown.mouseleave(() => dropdown.addClass("hidden"));
    $(document).click(e=> {
      if ($(e.target).attr("class") === "dropdown-content") {
        e.stopPropagation();
      } else {
        dropdown.addClass("hidden");
      }
    });
  };

  const logout = () => {
    props.logout();
    history.push('/');
  };

  return (
    <div className="profile">
      <button onClick={toggleDropDown}>{props.currentUser.username}</button>
      <div className="dropdown-content hidden">
          <Link className="profile-link" to={`/users/${props.currentUser.id}`}>Profile</Link>
          <a className="logout" onClick={logout}>Log Out</a>
      </div>
    </div>
  );
};

export default ProfileButton;

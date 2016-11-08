import React from 'react';
import {hashHistory} from 'react-router';

const FindNav = (props) => {

  const redirectToEvents = () => {
    hashHistory.push('/events');
  };

  const redirectToGroups = () => {
    hashHistory.push('/groups');
  };

  return (
    <div className="find-nav-bar">
      <div className="find-inside">
        <form className="find-form">
          <input className="find-searchbar"
            placeholder="All meetups"></input>
          <div>within</div>
          <div></div>
          <div>of</div>
          <div></div>
        </form>
      </div>
      <div className="options-inside">
        <div>
        <ul>
          <li>
            <button className="view-selector" onClick={redirectToGroups}>Groups</button>
          </li>
          <li>
            <button className="view-selector" onClick={redirectToEvents}>Events</button>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default FindNav;

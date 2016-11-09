import React from 'react';
import {Link, hashHistory} from 'react-router';

const FindNav = (props) => {

  const redirectToEvents = () => {
    hashHistory.push('/events');
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
            <Link className="view-selector" to={`/home/groups`}>Groups</Link>
          </li>
          <li>
            <Link className="view-selector" to={"home/events"}>Events</Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default FindNav;

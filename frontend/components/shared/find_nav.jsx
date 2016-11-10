import React from 'react';
import {Link, hashHistory} from 'react-router';

const FindNav = (props) => {

  const redirectToEvents = () => {
    hashHistory.push('/events');
  };

  const redirectToGroups = () => {
    hashHistory.push('/groups');
  };

  let klass;
  if (window.location.hash === "#/home/groups") {
    klass = "group";
  } else if (window.location.hash === "#/home/events"){
    klass = "event";
  }
  return (
    <div className="find-nav-bar">
      <div className="find-inside">
        <form className="find-form">
          <input className="find-searchbar"
            placeholder="search for Meet ups"></input>
        </form>
      </div>
      <div className={klass}>
        <div onClick={()=>hashHistory.push(`/home/groups`)}>Groups</div>
        <div onClick={()=>hashHistory.push("/home/events")}>Events</div>
      </div>
    </div>
  );
};

export default FindNav;

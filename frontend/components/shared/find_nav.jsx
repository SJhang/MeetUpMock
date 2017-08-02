import React from 'react';
import {Link} from 'react-router';
import GroupSearchBox from '../group/group_search_box';
import {createBrowserHistory} from 'history';

const FindNav = (props) => {
  const history = createBrowserHistory();
  
  const redirectToEvents = () => {
    history.push('/events');
  };

  const redirectToGroups = () => {
    history.push('/groups');
  };

  const toggleButtons = (location) => {
    if (window.location.hash === `#/home/${location}`) {
      return (
        {background: "white", color: "black"}
      );
    } else {
      return (
        {background: "black", color: "white", border: "1px solid white"}
      );
    }
  };

  let klass;
  if (window.location.hash === "#/home/groups" || window.location.hash === "#/home") {
    klass = "groups";
  } else if (window.location.hash === "#/home/events"){
    klass = "events";
  }
  return (
    <div className="find-nav-bar">
      <div className={klass}>
        <section className="group-search-box">
          <GroupSearchBox
            searchParams={props.searchParams}
            updateGroupSearchParam={props.updateGroupSearchParam} />
        </section>
        <div className="buttons">
          <div
            className="group-button"
            style={toggleButtons("groups")}
            onClick={()=>history.push(`/home/groups`)}>
            Groups
          </div>
          <div
            className="event-button"
            style={toggleButtons("events")}
            onClick={()=>history.push("/home/events")}>
            Events
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindNav;

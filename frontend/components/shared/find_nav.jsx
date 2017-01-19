import React from 'react';
import {Link, hashHistory} from 'react-router';
import GroupSearchBox from '../group/group_search_box';

const FindNav = (props) => {

  const redirectToEvents = () => {
    hashHistory.push('/events');
  };

  const redirectToGroups = () => {
    hashHistory.push('/groups');
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
            onClick={()=>hashHistory.push(`/home/groups`)}>
            Groups
          </div>
          <div
            className="event-button"
            style={toggleButtons("events")}
            onClick={()=>hashHistory.push("/home/events")}>
            Events
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindNav;

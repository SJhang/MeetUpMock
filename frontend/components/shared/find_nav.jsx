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
            onClick={()=>hashHistory.push(`/home/groups`)}>
            Groups
          </div>
          <div
            onClick={()=>hashHistory.push("/home/events")}>
            Events
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindNav;

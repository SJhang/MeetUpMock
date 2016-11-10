import React from 'react';
import {Link} from 'react-router';

const GroupSidebar = (props) => {

  const displayGroupDetail = () => {
    return (
      <div className="sidebar-group-detail">
        <div>{props.group.name}</div>
        <div>{props.group.created_at}</div>
        <div>{props.group.image}</div>
        <div>{props.group.city}</div>
        <div>{props.group.state}</div>
      </div>
    );
  };

  const displayOrganizerDetail = () => {
    return (
      <div className="sidebar-org-detail">{props.group.organizer}</div>
    );
  };


  return (
    <section className="sidebar">
      {displayGroupDetail()}
      {displayOrganizerDetail()}
    </section>
  );
};

export default GroupSidebar;

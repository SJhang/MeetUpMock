import React from 'react';
import {Link} from 'react-router';

const GroupSidebar = (props) => {

  const displayGroupDetail = () => {
    const createdDate = Date(props.group.created_at).split(" ");
    return (
      <div className="sidebar-group-detail">
        <div
          className="group-image"
          style={{backgroundImage: `url(${props.group.thumbnail_img_url})`}}></div>
        <div className="group-name">{props.group.name}</div>
        <div className="group-organizer">
          <h4>Organizer: </h4>
          <h4>{props.group.organizer_id}</h4>
        </div>
        <div className="group-generated">
          <h4>Group Created at:</h4>
          <h4>{createdDate[1]} {createdDate[2]}, {createdDate[3]}</h4></div>
        <div className="group-location">
          <h4>Location:</h4>
          <h4>{props.group.city}, {props.group.state}</h4></div>
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

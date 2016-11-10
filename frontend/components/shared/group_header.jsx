import React from 'react';
import {Link} from 'react-router';

const GroupHeader = (props) => {
  return (
    <div className="head">
      <div className="banner">
        <h1>{props.group.name}</h1>
      </div>
      <div className="nav">
        <ul className="left">
          <li><Link to={`/groups/${props.groupId}`}>Home</Link></li>
          <li><Link to={`/groups/${props.groupId}/members`}>Members</Link></li>
          <li><Link to={`/groups/${props.groupId}/photos`}>Photos</Link></li>
          <li><Link to={`/groups/${props.groupId}/events`}>Events</Link>
          </li>
          <li><button>Reviews</button></li>
        </ul>
        <button>Join us!</button>
      </div>
    </div>
  );
};

export default GroupHeader;

import React from 'react';
import {Link} from 'react-router';
import ProfileButton from './profile_button';

const GroupHeader = (props) => {

  const switchButton = function(){
    let filteredMember;
    if (props.members.length >= 1) {
      filteredMember = props.members.filter(member => member.username === window.currentUser.username);
      if (filteredMember.length !== 0) {
        return (<button onClick={props.deleteMember( window.currentUser, props.groupId)}>Leave group</button>);
      } else {
        return (<button onClick={props.addMember(window.currentUser, props.groupId)}>Join us!</button>);
      }
    }
  };

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
        {switchButton}
      </div>
    </div>
  );
};

export default GroupHeader;

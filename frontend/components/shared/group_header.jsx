import React from 'react';
import {Link} from 'react-router';
import ProfileButton from './profile_button';

const GroupHeader = (props) => {
  const switchButton = () => {
    let filteredMember;
    if (props.members.length >= 1) {
      filteredMember = props.members.filter(member => member.username === window.currentUser);
      if (filteredMember.length !== 0) {
        return (<button onClick={props.deleteMember( window.currentUser, props.groupId)}>Leave group</button>);
      } else {
        return (<button onClick={props.addMember(window.currentUser, props.groupId)}>Join us!</button>);
      }
    }
  };

  const toggleMenu = () => {
    $(document).click(e => {
      e.stopPropagation();

      if ($(e.target).hasClass("active") && $) {
        $(e.target).removeClass("active");
      } else {
        $(e.target).addClass("active");
      }
    });
  };

  const backgroundColors = ["#dfad28", "#ed9825", "#29c99c", "#5c139a", "#00c1db", "#ff1e4b"];

  return (
    <div className="head">
      <div
        className="banner"
        style={{background: "#00c1db"}}>
        {props.group.name}
      </div>
      <div className="nav">
        <ul className="left">
          <Link
            to={`/groups/${props.groupId}`}
            onClick={toggleMenu}
            className="menu-item.active">Home</Link>
          <Link
            to={`/groups/${props.groupId}/members`}
            onClick={toggleMenu}
            className="menu-item">Members</Link>
          <Link
            to={`/groups/${props.groupId}/photos`}
            onClick={toggleMenu}
            className="menu-item">Photos</Link>
          <Link
            to={`/groups/${props.groupId}/events`}
            onClick={toggleMenu}
            className="menu-item">Events</Link>
        </ul>
        {switchButton}
      </div>
    </div>
  );
};

export default GroupHeader;

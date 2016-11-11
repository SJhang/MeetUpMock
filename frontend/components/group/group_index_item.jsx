import React from 'react';
import Masonry from 'react-masonry-component';
import { withRouter } from 'react-router';

const GroupsIndexItem = (props) => {
  let group = props.group;
  return (
    <li
      className="groups-index-item"
      onClick={()=>props.router.push(`groups/${group.id}`)}>
      <h4>{group.name}</h4>
      <p>{group.description}</p>
      <p>{group.city}, {group.state}</p>
    </li>
  );
};

export default withRouter(GroupsIndexItem);

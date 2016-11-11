import React from 'react';
import Masonry from 'react-masonry-component';

const GroupsIndexItem = ({group}) => {

  return (
    <li className="groups-index-item">
      <h4>{group.name}</h4>
      <p>{group.description}</p>
      <p>{group.city}, {group.state}</p>
    </li>
  );
};

export default GroupsIndexItem;

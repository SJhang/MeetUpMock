import React from 'react';

const GroupsIndexItem = ({group}) => {
  return (
    <li className="posts-index-item">
      <h4>{group.name}</h4>
      <p>{group.description}</p>
    </li>
  );
};

export default GroupsIndexItem;

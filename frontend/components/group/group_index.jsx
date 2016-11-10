import React from 'react';
import GroupsIndexItem from './group_index_item.jsx';

const GroupsIndex = ({groups}) => {
  return (
    <ul className="posts-index">
      {
        groups.map(group => (
          <GroupsIndexItem key={group.id} group={group} />
        ))
      }
    </ul>
  );
};

export default GroupsIndex;

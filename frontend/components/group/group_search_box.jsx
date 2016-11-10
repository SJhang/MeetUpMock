import React from 'react';

const GroupSearchBox = ({searchParams: {search}, updateGroupSearchParam}) => {
  return (
    <nav className="find-form">
      <input
        placeholder="search for Meet ups"
        className="find-searchbar"
        value={search}
        onInput={ e => updateGroupSearchParam('search', e.target.value)}/>
    </nav>
  );
};

export default GroupSearchBox;

import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import GroupSearchBox from './group_search_box';
import GroupsIndex from './group_index';

class Group extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="group-lists">
        <GroupsIndex groups={this.props.groupList} />
      </div>
    );
  }
}

export default Group;

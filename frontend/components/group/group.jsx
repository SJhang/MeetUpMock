import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Group extends React.Component {
  constructor(props) {
    super(props);
  }

  groups() {
    return this.props.groupList.map(group =>
      (<div key={group.id}>
        <button onClick={()=>this.props.router.push(`/groups/${group.id}`)}>
          {group.name}
          {group.members.length}&nbsp; members
        </button>
      </div>)
    );
  }


  render () {
    return (
      <div className="group-lists">
        {this.groups()}
      </div>
    );
  }
}

export default Group;

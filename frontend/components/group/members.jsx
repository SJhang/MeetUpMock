import React from 'react';

class Members extends React.Component {

  eachMember() {
    if (this.props.group.members) {
      return this.props.group.members.map(member=> (
        <div key={member.id} className="profile">{member.username}</div>
      ));
    } else {
      return (<h4>Members mia</h4>);
    }
  }

  componentWillReceiveProps(newProps){

  }

  switchButton() {
    if (this.props.members.length >= 1) {
      if (this.props.members.some(member => member.username === this.props.currentUser)) {
        return (<button onClick={this.props.deleteMember.bind(this, this.props.currentUser, this.props.groupId)}>Leave group</button>);
      } else {
        return (<button onClick={this.props.addMember.bind(this, this.props.currentUser, this.props.groupId)}>Join us!</button>);
      }
    } else {
      return (<button onClick={this.props.addMember.bind(this, this.props.currentUser, this.props.groupId)}>Join us!</button>);
    }
  }

  render () {
    return (
      <div className="member-content">
        <div className="member-body">
          <h1>We're &nbsp; {this.props.members.length}&nbsp; Members</h1>
          <div>
            {this.eachMember()}
          </div>
        </div>
        {this.switchButton()}
      </div>
    );
  }
}

export default Members;

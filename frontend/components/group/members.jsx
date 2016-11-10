import React from 'react';

class Members extends React.Component {

  eachMember() {
    if (this.props.members.length >= 1) {
      return this.props.members.map(member => (
        <div key={member.id} className="profile">{member.username}</div>
      ));
    }
  }

  switchButton() {
    if (this.props.members.length >= 1) {
      let filteredMember = this.props.members.filter(member => member.username === window.currentUser.username);
      if (filteredMember.length !== 0) {
        return (<button onClick={this.props.deleteMember.bind(this, window.currentUser, this.props.groupId)}>Leave group</button>);
      } else {
        return (<button onClick={this.props.addMember.bind(this, window.currentUser, this.props.groupId)}>Join us!</button>);
      }
    }
  }

  render () {
    return (
      <div>
        <div>
          <h1>We're &nbsp; {this.props.members.length}&nbsp; Members</h1>
          <div>{this.eachMember()}</div>
        </div>
        {this.switchButton()}
      </div>
    );
  }
}

export default Members;

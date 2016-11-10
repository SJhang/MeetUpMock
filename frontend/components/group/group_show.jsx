import React from 'react';
import { Link, withRouter } from 'react-router';
import GroupHeader from '../shared/group_header';
import GroupSidebar from '../shared/group_sidebar';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  displayChildrean() {
  }

  displayMembers() {
    if (this.props.group.members) {
      return this.props.group.members.map(member=> (
        <ul key={member.id}>
          <li>{member.username}</li>
          <li>{member.profile_img}</li>
        </ul>
      ));
    } else {
      return (<h4>Members mia</h4>);
    }
  }

  displayEvents() {
    if (this.props.group.events) {
      return this.props.group.events.map(event => (
        <ul key={event.id}>
          <li>{event.title}</li>
          <li>{event.description}</li>
          <li>{event.date}</li>
        </ul>
      ));
    } else {
      return (<h4>Events mia</h4>);
    }
  }

//conditional statement for other info using either ownProps in container or window.location.router
  render () {
    let klass;

    if (window.location.hash === `#/groups/${this.props.groupId}`) {
      klass = "group-show-page";
    } else {
      klass = "show-children";
    }

    return (
      <div className="group-content">
        <div className="group-main-content">
          <GroupHeader group={this.props.group} groupId={this.props.groupId}/>
          <div className="body group">
            <GroupSidebar group={this.props.group}/>
            <div className={klass}>
              <section className="description">
                <div>{this.props.group.description}</div>
                {this.displayMembers()}
              </section>
              <section className="children">
                {this.props.children}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupShow);

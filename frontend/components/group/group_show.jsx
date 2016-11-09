import React from 'react';
import { Link, withRouter } from 'react-router';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  displayGroupDetail() {
    return (
    <div>
      <div>{this.props.group.name}</div>
      <div>{this.props.group.created_at}</div>
      <div>{this.props.group.image}</div>
      <div>{this.props.group.city}</div>
      <div>{this.props.group.state}</div>
    </div>
  );
  }

  displayOrganizerDetail() {
    return (
      <div>{this.props.group.organizer}</div>
    );
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

  render () {
    return (
      <div className="group-content">
        <div className="group-main-content">
          <div className="head">
            <div className="banner">
              <h1>{this.props.group.name}</h1>
            </div>
            <div className="nav">
              <ul className="left">
                <li><Link to={`/groups/${this.props.groupId}`}>Home</Link></li>
                <li><Link to={`/groups/${this.props.groupId}/members`}>Members</Link></li>
                <li><Link to={`/groups/${this.props.groupId}/photos`}>Photos</Link></li>
                <li><Link to={`/groups/${this.props.groupId}/events`}>Events</Link>
                </li>
                <li><button>Reviews</button></li>
              </ul>
              <button>Join us!</button>
            </div>
          </div>
          <div className="body group">
            <section className="sidebar">
              {this.displayGroupDetail()}
              {this.displayOrganizerDetail()}
            </section>
            <div className="main">
              <section className="description">
                <div>{this.props.group.description}</div>
                {this.displayMembers()}
              </section>
              <section className="upcoming-events">
                {this.displayEvents()}
                <div>{this.props.children}</div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupShow);

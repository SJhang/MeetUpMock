import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

  }

  joinClickHandler() {
    this.props.updateEvent();
  }

  attendees() {

    if (this.props.event.attendees) {
      if (this.props.event.attendees.length !== 0) {
        return this.props.event.attendees.map(user =>
          <div key={user.id}>{user.username}</div>
        );
      } else {
        return <h6>RSVP empty!</h6>;
      }
    }
  }

  switchButton() {
    if (this.props.attendees.length >= 1) {
      if (this.props.attendees.some(attendee => attendee.username === this.props.currentUser.username)) {
        return (<button onClick={this.props.deleteAttendee.bind(this, this.props.currentUser, this.props.eventId)}>Leave RSVP</button>);
      } else {
        return (<button onClick={this.props.addAttendee.bind(this, this.props.currentUser, this.props.eventId)}>Join RSVP</button>);
      }
    } else {
      return (<button onClick={this.props.deleteAttendee.bind(this, this.props.currentUser, this.props.eventId)}>Leave RSVP</button>);
    }
  }

  render () {
    return (
      <div className="event-show">
        <div className="event-content group">
          <section className="event-main">
            <div><h1>{this.props.event.title}</h1></div>
            <div><h1>{this.props.event.date}</h1></div>
            <div><h1>{this.props.event.lat},&nbsp;{this.props.event.lng}</h1></div>
            <div>{this.props.event.description}</div>
            {this.attendees()}
          </section>
          <section className="event-side">
            <div className="rsvp">
              <div>Join now!</div>
              {this.switchButton()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default EventShow;

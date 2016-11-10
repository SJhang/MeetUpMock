import React from 'react';

class EventShow extends React.Component {

  joinClickHandler() {
    this.props.updateEvent();
  }

  attendees() {
    if (this.props.event.attendees) {
      return this.props.event.attendees.map(user =>
        <div key={user.id}>{user.username}</div>
      );
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
              <div>Want to go?</div>
              <button>JOIN US!</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default EventShow;

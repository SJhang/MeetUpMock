import React from 'react';
import {Link, withRouter} from 'react-router';

class Event extends React.Component {
  constructor(props) {
    super(props);

  }
  // if groupId exists then filter eventlist for the group[groupId]
  // else render all event, group_id from event object
  events() {
    let filteredEvents;
    if (this.props.groupId) {
      filteredEvents = this.props.eventList.filter(event => event.group_id === this.props.groupId);
      return filteredEvents.map(eventItem =>
          (<div key={eventItem.id}>
            <button onClick={()=>this.props.router.push(`/groups/${this.props.groupId}/events/${eventItem.id}`)}>
              {eventItem.title}
            </button>
          </div>));
    } else {
      return this.props.eventList.map(eventItem =>
      <div key={eventItem.id}>
        <button onClick={()=>this.props.router.push(`/groups/${eventItem.group_id}/events/${eventItem.id}`)}>{eventItem.title}</button>
      </div>);
    }
  }

  render () {
    return (
      <div className="event-lists">
        {this.events()}
      </div>
    );
  }
}

export default Event;

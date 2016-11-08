import React from 'react';
import {withRouter} from 'react-router';

class Event extends React.Component {
  // events() {
  //
  //   return this.props.eventList.map(event =>
  //     <div>
  //       <button onClick={this.props.router.push(`/events/${event.id}`)}>
  //         {event.title}
  //       </button>
  //     </div>
  //   );
  // }
  render () {
    return (
      <div className="event-lists">
      </div>
    );
  }
}

export default Event;

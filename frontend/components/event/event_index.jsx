import React, { PropTypes } from 'react';

const EventIndex = (props) => {
  const singleEvent = event => {
    return (
      <div>
        <div>{event.group_id}</div>
        <h3>{event.title}</h3>
        <div>{event.attendees.length} going</div>
      </div>
    )
  }

  const singleDay = events => {
    const dates = {};
    return (
      <div>
        {singleEvent()}
      </div>
    )
  }

  return (
    <div className="container">
      <div className="col-8 col-sm-8 col-xs-8">
        {singleDay(props.events)}
      </div>
      <div className="col-4 col-sm-4 col-xs-4">
        calendar
      </div>
    </div>
  )
}

export default EventIndex;

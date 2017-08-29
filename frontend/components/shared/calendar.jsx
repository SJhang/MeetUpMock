import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const Calendar = (props) => {
  const events = [
    {
      'title': 'first event',
      'allDay': true,
      'start': new Date(2017, 8, 27),
      'end': new Date(2017, 8, 29)
    }
  ]

  return (
    <div>
      <BigCalendar
        events={events}
        views={allViews}
        defaultDate={new Date()}/>
    </div>
  )
}

export default Calendar;

import React from 'react';
import Carousel from './splash_carousel';

const UpcomingEvents = ({eventList}) => {
  return(
    <div className="splash-events">
      <span className="splash-events-options">
        <div>Upcoming events</div>
        <div><a>See All</a></div>
      </span>
      <Carousel eventList={eventList}/>
    </div>
  );
};

export default UpcomingEvents;

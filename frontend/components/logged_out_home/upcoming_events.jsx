import React from 'react';
import Carousel from './splash_carousel';

const UpcomingEvents = ({events}) => {
  return(
    <div className="splash-events">
      <div className="splash-events-options">
        <div>Upcoming events</div>
        <div><a>See All</a></div>
      </div>
      <ul>
        {
          events.map(event => <li>event.title</li>)
        }
      </ul>
      <Carousel />
    </div>
  );
};

export default UpcomingEvents;

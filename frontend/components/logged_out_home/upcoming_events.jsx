import React from 'react';
import Carousel from './splash_carousel';
import {Link} from 'react-router';

const UpcomingEvents = ({eventList}) => {
  return(
    <div className="splash-events">
      <span className="splash-events-options">
        <div>Upcoming events</div>
        <Link to={`/home`}>See All</Link>
      </span>
      <Carousel eventList={eventList}/>
    </div>
  );
};

export default UpcomingEvents;

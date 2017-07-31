import React from 'react';
import Carousel from './splash_carousel';
import { Link } from 'react-router-dom';

const UpcomingEvents = ({eventList}) => {
  return(
    <div className="splash-events">
      <span className="splash-events-options">
        <h3>Upcoming events</h3>
        <Link to={`/home`}>
          <i className="fa fa-th-large" aria-hidden="true"/>
        </Link>
      </span>
      <Carousel eventList={eventList}/>
    </div>
  );
};

export default UpcomingEvents;

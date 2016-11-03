import React from 'react';
import Carousel from './splash_carousel';

class UpcomingEvents extends React.Component {
  render () {
    return(
      <div className="events-body group">
        <div className="events-name">
          <div><h2>Upcoming events</h2></div>
          <div><a>See All</a></div>
        </div>
        <Carousel />
      </div>
    );
  }
}

export default UpcomingEvents;

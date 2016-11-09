import React from 'react';
import Slider from 'react-slick';
import {Link, hashHistory} from 'react-router';

const Carousel = (props) => {

  const eventsList = () => {
    let eventList = props.eventList;
    if (eventList.length === 0) {
      return  <div><h3>loading</h3></div>;
    }
    // let eventList = ["hi", "bye", "hello"];
    return eventList.map(event =>
      <div key={event.id}>
        <Link to={`/groups/${event.group_id}/events/${event.id}`}>
          {event.title}
        </Link>
      </div>);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="viewport">
      <Slider {...settings}>
        {
          eventsList()
        }
      </Slider>
    </div>
  );
};

export default Carousel;

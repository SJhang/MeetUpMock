import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const Carousel = (props) => {
  const currentUserLocation = () => {

  };

  const eventsList = () => {
    let eventList = props.eventList;

    return eventList.map( event =>
      <div
        key={event.id}
        className="carousel-item-div">
        <Link
          to={`/groups/${event.group_id}/events/${event.id}`}
          className="carousel-item">
          {event.title}
        </Link>
        <div
          className="carousel-image"
          style= {{backgroundImage: `url("${event.thumbnail_img_url}")`}}/>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  if (props.eventList.length === 0) {
    return <div className="viewport"><h1>spinner</h1></div>;
  } else {
    return (
      <div className="viewport">
        <Slider {...settings}>
          {
            eventsList()
          }
        </Slider>
      </div>
    );
  }
};

export default Carousel;

import React from 'react';
import Slider from 'react-slick';
import {Link, hashHistory} from 'react-router';
import UserProfile from '../user_profile/user_profile';
import {getLocation} from '../../util/user_api_util';

const Carousel = (props) => {
  const currentUserLocation = () => {

  };

  const currentLocation = (pos) => {
    let coord = pos.coords;
    let lat = coord.latitude;
    let lng = coord.longitude;
    let params = `${lat},${lng}`;

    const apiKey ="AIzaSyCbq38WBZIYrNol3TjlRGjL9T5dhqoefqI";
    let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

    if (lat) {
      url += params;
      url += `&key=${apiKey}`;
    } else {
      return <h1>Loading</h1>;
    }
    getLocation(url, setLocation());
  };

  const setLocation = (data) => {
    let address = data.results[0].formatted_address;
    let city = address.split(', ')[1];
    let state = address.split(', ')[2].split(" ")[0];
  };

  const eventsList = () => {
    let eventList = props.eventList;
    return eventList.map(event =>
      <div key={event.id} className="carousel-item-div">
        <Link
          to={`/groups/${event.group_id}/events/${event.id}`}
          className="carousel-item">
          {event.title}
        </Link>
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

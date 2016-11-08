import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {

  eventsList() {
    let eventList = this.props.eventList;
    if (eventList.length === 0) {
      return [<div><h3>loading</h3></div>];
    }
    // let eventList = ["hi", "bye", "hello"];
    return eventList.map(event =>
      <div><h3>{event.title}</h3></div>);
  }

  render () {
    const settings = {
      dots: true,
      infinite: true,
      autoplaySpeed: 2000,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div className="upcoming-carousel">
        <div className="viewport">
          <Slider {...settings}>
            {
              this.eventsList()
            }
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;

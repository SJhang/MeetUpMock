import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';

class Carousel extends React.Component {

  settings() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  }

  render () {
    return (
      <div className="upcoming-carousel">
        <div className="viewport">
          <Slider className="slideviews">
            <div className="many-carousels"></div>
          </Slider>
        </div>
        <button className="previous-button"><svg></svg></button>
        <button className="next-button"><svg></svg></button>
      </div>
    );
  }
}

export default Carousel;

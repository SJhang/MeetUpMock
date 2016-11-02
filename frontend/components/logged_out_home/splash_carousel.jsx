import React from 'react';

class Carousel extends React.Component {
  render () {
    return(
      <div className="upcoming-carousel">
        <div className="viewport">
          <div className="slideviews">
            <div className="many-carousels"></div>
          </div>
        </div>
        <button className="previous-button"><svg></svg></button>
        <button className="next-button"><svg></svg></button>
      </div>
    );
  }
}

export default Carousel;

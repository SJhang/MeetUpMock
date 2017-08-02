import React from 'react';

class Find extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="home-pre-body">
        <section>
          <div className='header-overlay'></div>
          <div className="find-header">
            <h2>Find a Meetup</h2>
            <h4>Meetups nearby</h4>
          </div>
        </section>
      </div>
    );
  }
}

export default Find;

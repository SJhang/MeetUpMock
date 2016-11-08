import React from 'react';
import { hashHistory } from 'react-router';

class Find extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="home-pre-body">
        <section>
          <div className="find-header">
            <ul>
              <li>Find a Meetup</li>
              <li><h3>Meetups nearby</h3></li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Find;

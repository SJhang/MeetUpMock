import React from 'react';
import { Link, withRouter } from 'react-router';
import UpcomingEvents from './upcoming_events';
import MainVideo from './main_video';


class Splash extends React.Component {

  componentDidUpdate() {

  }

  render () {
    return (
      <div>
        <div className="view">
          <div className="view-body">
            <section className="video-wrap">
                <MainVideo />
            </section>

            <secion className="events-wrap">
              <UpcomingEvents />
            </secion>

          </div>
        </div>
      </div>
    );
  }
}

export default Splash;

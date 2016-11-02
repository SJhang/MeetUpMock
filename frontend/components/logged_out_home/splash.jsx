import React from 'react';
import { Link, withRouter } from 'react-router';
import UpcomingEvents from './upcoming_events';
import MainVideo from './main_video';
import SplashHeader from './splash_header';
import Footer from '../shared/footer';

class Splash extends React.Component {

  componentDidUpdate() {

  }

  render () {
    return (
      <div>
        <SplashHeader />
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
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Splash);

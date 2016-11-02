import React from 'react';
import { Link, withRouter } from 'react-router';
import UpcomingEvents from './upcoming_events';
import MainVideo from './main_video';
import Header from '../shared/header';
import Footer from '../shared/footer';

class Splash extends React.Component {

  componentDidUpdate() {

  }

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  render () {
    return (
      <div>
        <Header />
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
        <Footer />
      </div>
    );
  }
}

export default withRouter(Splash);

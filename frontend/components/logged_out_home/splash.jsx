import React from 'react';
import { Link, withRouter } from 'react-router';
import UpcomingEvents from './upcoming_events';
import MainVideo from './main_video';


class Splash extends React.Component {
  redirectToSignup() {
    this.props.router.push('/signup')
  }

  render () {
    return (
        <div className="splash-view-body">
          <section className="video-wrap">
              <MainVideo signup={this.redirectToSignup.bind(this)}/>
          </section>

          <section className="events-wrap">
            <UpcomingEvents events={this.props.events}/>
          </section>

        </div>
    );
  }
}

export default withRouter(Splash);

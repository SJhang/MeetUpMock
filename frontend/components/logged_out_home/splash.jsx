import React from 'react';
import { Link, withRouter } from 'react-router';
import UpcomingEvents from './upcoming_events';
import MainVideo from './main_video';


class Splash extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }
  redirectToSignup() {
    this.props.router.push('/signup');
  }

  componentDidMount() {
    $(document).scrollTop(0);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  handleGuestLogin(e) {
    e.preventDefault();
    let usern = "sonikjhang";
    let pass = "asdfasdf";
    this.state = {username: usern, password: pass};
    let user = this.state;
    this.props.login(user);
  }

  render () {
    return (
        <div className="splash-view-body">
          <main>
            <section className="video-wrap">
            <div className="header-overlay"></div>
              <MainVideo guestLogin={this.handleGuestLogin}/>
            </section>

            <section className="events-wrap">
              <UpcomingEvents eventList={this.props.eventList}/>
            </section>
          </main>

        </div>
    );
  }
}

export default withRouter(Splash);

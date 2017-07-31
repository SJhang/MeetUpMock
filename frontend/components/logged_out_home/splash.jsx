import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UpcomingEvents from './upcoming_events';
import MainVideo from './main_video';
import UserProfile from '../user_profile/user_profile';
import {getLocation} from '../../util/user_api_util';

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
        <div className="row col-xs-12">
          <main>
            <section className="video-wrap">
            <div className="header-overlay"></div>
              <MainVideo guestLogin={this.handleGuestLogin}/>
            </section>
            <div className="seperator">
              <div className="top"></div>
              <div className="bot"></div>
            </div>
            <section className="events-wrap">
              <UpcomingEvents eventList={this.props.eventList}/>
            </section>
          </main>

        </div>
    );
  }
}

export default withRouter(Splash);

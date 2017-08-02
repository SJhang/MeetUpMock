import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SplashCarousel from './splash_carousel';
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
    this.props.history.push('/signup');
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
        <div id="splashCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#splashCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#splashCarousel" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="http://diamondcreative.net/plus-v1.1/img/slider/slider_06.jpg"/>
              <div className="carousel-caption hidden-xs">
                <h3>New Collection touch of Chania</h3>
                <p>The atmosphere in Chania has a touch<br></br> of Florence and Venice.</p>
                  <button className="btn btn-danger">READ MORE</button>
              </div>
            </div>

            <div className="item">
              <img src="http://diamondcreative.net/plus-v1.1/img/slider/slider_03.jpg"/>
              <div className="carousel-caption hidden-xs">
                <h3>New Collection touch of Chania</h3>
                <p>The atmosphere in Chania has a touch<br></br> of Florence and Venice.</p>
                <button className="btn btn-danger">READ MORE</button>
              </div>
            </div>
          </div>

          <a className="left carousel-control" href="#splashCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#splashCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    );
  }
}
// <SplashCarousel eventList={this.props.eventList}/>

export default withRouter(Splash);

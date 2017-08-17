import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SplashCarousel from './splash_carousel';
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
              <img src="https://res.cloudinary.com/dvob94x30/image/upload/v1502390485/PLAYERUNKNOWNS-BATTLEGROUNDS-12937712-1024x576_rjv1we.jpg"/>
              <div className="carousel-caption hidden-xs">
                <h3>New Weapons in BattleGround</h3>
                <p>Gather your squads to<br></br>win chicken.</p>
                  <Link className="btn btn-danger" to={this.props.currentUser ? '/home' : '/signup'}>READ MORE</Link>
              </div>
            </div>

            <div className="item">
              <img src="https://res.cloudinary.com/dvob94x30/image/upload/c_scale,w_1024/v1502390024/695787_cpfbcg.png"/>
              <div className="carousel-caption hidden-xs">
                <h3>New Heroes and Maps in Overwatch</h3>
                <p>Dominate your game<br></br>with your teammates.</p>
                <Link className="btn btn-danger" to={this.props.currentUser ? '/home' : '/signup'}>READ MORE</Link>
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

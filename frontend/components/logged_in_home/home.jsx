import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Find from '../shared/find';
import FindNav from '../shared/find_nav';

class Home extends React.Component {
  componentDidMount() {
    $(document).scrollTop(0);
  }

  render () {
    return (
      <div>
        <div className="home-header">
          <div className='header-overlay'></div>
          <div className="find-header">
            <h2>Find your Teammate</h2>
            <p>Meetups nearby</p>
          </div>
        </div>
        <div className="container search-nav">
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"></input>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          <div className="btn-group pull-right" role="group">
            <button type="submit" className="btn btn-default">Groups</button>
            <button type="submit" className="btn btn-default">Events</button>
          </div>
        </div>
        <div className="container">
          
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

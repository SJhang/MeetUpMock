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
      <div className="authenticated-body">
        <div className="home-pre-body">
          <section>
            <div className='header-overlay'></div>
            <div className="find-header">
              <h2>Find a Meetup</h2>
              <h4>Meetups nearby</h4>
            </div>
          </section>
        </div>
        <FindNav searchParams={this.props.searchParams}
        updateGroupSearchParam={this.props.updateGroupSearchParam}/>
        <div className="main-body">
          
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

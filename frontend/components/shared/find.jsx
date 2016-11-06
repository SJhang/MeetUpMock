import React from 'react';
import { hashHistory } from 'react-router';

class Find extends React.Component {
  constructor (props) {
    super(props);
  }

  redirectToEvents() {
    hashHistory.push('/events');
  }

  redirectToGroups() {
    hashHistory.push('/groups');
  }

  render () {
    return (
      <div className="home-pre-body">
        <section>
          <div className="find-header">
            <ul>
              <li>Find a Meetup</li>
              <li>Meetups nearby</li>
            </ul>
          </div>
        </section>
        <div className="find-nav-bar">
          <div className="find-nav">
            <div className="find-inside">
              <form className="find-form">
                <div>
                  <input className="find-searchbar"
                    placeholder="All meetups"></input>
                </div>
                <div>within</div>
                <div></div>
                <div>of</div>
                <div>{this.props.location}</div>
              </form>
            </div>
            <div className="options-inside">
              <ul>
                <li>
                  <button className="view-selector" onClick={this.redirectToGroups.bind(this)}>Groups</button></li>
                <li><button className="view-selector" onClick={this.redirectToEvents.bind(this)}>Events</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Find;

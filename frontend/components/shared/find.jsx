import React from 'react';

class Find extends React.Component {

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
                  <input className="find-searchbar"></input>
                  <ul className="dropdown-menu"></ul>
                </div>
              </form>
            </div>
            <div className="options-inside">
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Find;

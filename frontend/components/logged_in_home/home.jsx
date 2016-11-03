import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Header from '../shared/header';


class Home extends React.Component {

  render () {
    return (
      <div className="authenticated-body">
        <div className="home-pre-body">
          <section>
            <div>
              <a></a>
            </div>
          </section>
          <div className="find-nav-bar">
            <div className="find-nav">
              <div className="find-inside">
                <form></form>
              </div>
              <div className="options-inside">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="home-main-body">
          <div className="main-context">
            <div className="simple-wrap">
              <div className="dropdown-sorts"></div>
              <div className="simple-view">
                <div className="units">
                  <div className="margin-top">&nbsp;</div>
                  <ul>
                    
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);

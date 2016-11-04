import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Header from '../shared/header';
import FindContainer from '../shared/find_container';


class Home extends React.Component {

  render () {
    return (
      <div className="authenticated-body">
        <FindContainer />

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

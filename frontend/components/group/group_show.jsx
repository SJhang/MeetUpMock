import React from 'react';
import { withRouter } from 'react-router';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="group-content">
        <div className="group-main-content">
          <div className="head">
            <div className="banner">
              <h1>{this.props.group.name}</h1>
            </div>
            <div className="nav">
              <ul className="left">
                <li><button>Home</button></li>
                <li><button>Members</button></li>
                <li><button>Photos</button></li>
                <li>
                  <button>
                    Events
                  </button>
                </li>
                <li><button>Reviews</button></li>
              </ul>
              <button>Join us!</button>
            </div>
          </div>
          <div className="body">
            <div className="sidebar"></div>
            <div className="main">
              <div className="upcoming-events">
                {this.props.children}
              </div>
            </div>
            <div className="side"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupShow);

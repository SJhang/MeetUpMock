import React from 'react';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render () {
    return (
      <div className="group-content">
        <div className="group-main-content">
          <div className="head">
            <div className="banner">
              <h1>{this.props.group.title}</h1>
            </div>
            <div className="nav">
              <ul className="left">
                <li><button>Home</button></li>
                <li><button>Members</button></li>
                <li><button>Photos</button></li>
                <li><button>Events</button></li>
                <li><button>Reviews</button></li>
              </ul>
              <button>Join us!</button>
            </div>
          </div>
          <div className="body">
            <div className="sidebar"></div>
            <div className="main"></div>
            <div className="side"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupShow;

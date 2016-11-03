import React from 'react';
import { Link, withRouter } from 'react-router';

class Group extends React.Component {
  render () {
    return (
      <div>
        <div className="chapter-header">
          <div className="chapter-banner"></div>
          <div className="chapter-nav"></div>
        </div>
        <div className="group-context"></div>
      </div>
    );
  }
}

export default withRouter(Group);

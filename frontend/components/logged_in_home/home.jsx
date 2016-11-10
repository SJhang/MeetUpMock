import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Find from '../shared/find';
import FindNav from '../shared/find_nav';

class Home extends React.Component {
  render () {
    return (
      <div className="authenticated-body">
        <Find />
        <FindNav searchParams={this.props.searchParams}
        updateGroupSearchParam={this.props.updateGroupSearchParam}/>
        <div className="main-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

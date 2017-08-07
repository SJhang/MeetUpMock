import React from 'react';
import { withRouter } from 'react-router-dom';

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      organizer: {}
    }
  }

  componentDidMount() {
    this.props.findOrganizer(this.props.organizer_id);
  }

  render () {
    return (
      <div className="container">
        <h2>Members</h2>
        <hr></hr>
        <span className="members-container">
          <div>
            <img className="rounded" src={this.state.organizer.profile_img} width="50"/>
          </div>
        </span>
      </div>
    );
  }
}

export default withRouter(Members);

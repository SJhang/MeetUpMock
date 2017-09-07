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

  }

  updateOrganizer() {
    this.setState({organizer: this.props.user});
  }

  render () {
    return (
      <div className="container">
        <h2>Members</h2>
        <hr></hr>
        <span className="members-container">
          <div>
            <img className="rounded" id="organzier" src={this.props.organizer.profile_img} width="50"/>
            {this.props.organizer.name}
          </div>
        </span>
      </div>
    );
  }
}

export default withRouter(Members);

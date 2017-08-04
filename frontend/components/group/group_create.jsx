import React from 'react';
import GroupCreateLocation from './group_create_location';
import { withRouter } from 'react-router';

class GroupCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      city: "",
      state: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.update = this.update.bind(this);
    this.navigateToGroupIndex = this.navigateToGroupIndex.bind(this);
  }

  navigateToGroupIndex() {
    this.props.history.push('/home/groups');
  }
  componentDidMount() {
    $(document).scrollTop(0);
  }

  nextStep() {
    let top = $(".next-body").offset().top;
    $(document).scrollTop(top);
  }

  update(property, e) {
      if (property === "name") {
        let groupArray = this.props.groupArray;
        if (!groupArray.some(group => group.name === e.target.value)) {
          this.setState({[property]: e.target.value});
        }
      } else {
        this.setState({[property]: e.target.value});
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentUser = this.props.currentUser;
    let organizer_id;

    if (currentUser) {
      organizer_id = currentUser.id;
    } else {
      this.props.history.push('/signup');
    }
    let group = {name: this.state.name,
      description: this.state.description,
      city: this.state.city, state: this.state.state,
      organizer_id};
    this.props.createGroup(group);
    this.navigateToGroupIndex();
  }

  handleInput(e) {
    this.setState({city: e.target.value});
  }

  updateLocation(city, state) {
    this.setState({city, state});
  }

  displayErrors() {

  }

  render () {
    return(
      <div>
        <div className="create-header">
          <div className='header-overlay'></div>
          <div className="body">
            <h2>Start a New Meetup</h2>
            <h4>Find your flock</h4>
          </div>
        </div>

        <form className="container group-form">
          <label for="locationDiv">FIRST STEP</label>
          <div className="form-group" id="locationDiv">
            <label for="location">
              <i className="fa fa-globe fa-1x" aria-hidden="true"></i>
              &nbsp;
              Set Location
            </label>
            <input type="search" className="form-control" id="location" placeholder="San Francisco, CA"></input>
            <hr/>
          </div>
          <label for="groupInfo">SECOND STEP</label>
          <div className="form-group" id="groupInfo">
            <label for="groupName">
              <i className="fa fa-users fa-1x" aria-hidden="true"></i>
              &nbsp;
              Group Name
            </label>
            <input type="text" className="form-control" id="groupName" placeholder="Type in Group Name"></input>
          </div>
          <div className="form-group">
            <label for="groupDesc">
              <i className="fa fa-quote-right fa-1x" aria-hidden="true"></i>
              &nbsp;
              Group Description
            </label>
            <textarea className="form-control" id="groupDesc" placeholder="Type in descriptions about your new group. Being more specific helps you find great teammates."></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(GroupCreate);

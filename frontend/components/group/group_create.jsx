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
    this.props.router.push('/home/groups');
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

    if (currentUser.username) {
      organizer_id = currentUser.id;
    } else {
      this.props.router.push('/signup');
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

  render () {
    return(
      <div className="create">
        <section className="create-header">
          <div className='header-overlay'></div>
          <div className="body">
            <h2>Start a New Meetup</h2>
            <h4>Find your flock</h4>
          </div>
        </section>

        <section className="create-body">
          <GroupCreateLocation
            nextStep={this.nextStep}
            updateLocation={(city, state)=>this.updateLocation(city,state)}/>
          <div className="next-body">
            <div className="name">
                <h6>SECOND STEP</h6>
                <h2><i className="fa fa-users fa-1x" aria-hidden="true"></i>&nbsp;Name for your Meetup?</h2>
                <input
                  type="text"
                  placeholder="Enter a group name"
                  onChange={e => this.update('name', e)}></input>
            </div>
            <div className="descriptions">
              <h2><i className="fa fa-quote-right fa-1x" aria-hidden="true"></i>&nbsp;Descriptions</h2>
              <textarea
                placeholder="Being descriptive will help"
                onChange={e => this.update('description', e)}/>
            </div>
          </div>

          <div className="create-button">
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          </div>
        </section>

      </div>
    );
  }
}

export default withRouter(GroupCreate);

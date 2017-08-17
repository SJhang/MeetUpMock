import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import MainOptions from './main_options';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGroup: true
    }
  }

  componentWillMount() {
    this.props.fetchAllGroups();
    this.props.fetchAllEvents();
  }

  componentDidMount() {
    $(document).scrollTop(0);
  }

  renderTitle() {
    return this.state.isGroup ?
      <div className="row">
        <h2>Featured Groups</h2>
        <p>Nearby Groups</p>
        <hr/>
      </div> :
      <div className="row">
        <h2>Featured Events</h2>
        <p>Nearby Events</p>
      </div>
  }

  renderItems() {
    const groups = this.props.groupList;
    const events = this.props.eventList;

    return this.state.isGroup ? <MainOptions lists={groups} /> : <MainOptions lists={events} />
  }

  handleButton(e) {
    e.preventDefault();

    const btnGroup = document.querySelectorAll('.btn-group button');
    btnGroup.forEach(btn =>
      btn.classList.toggle('active')
    )

    if (e.target.innerText === "Groups") {
      this.setState({ isGroup: true });
    } else {
      this.setState({ isGroup: false });
    }
  }

  render () {
    return (
      <div className="home-container">
        <div className="home-header">
          <div className='header-overlay'></div>
          <div className="find-header">
            <h2>Find your Teammate</h2>
            <p>Meetups nearby</p>
          </div>
        </div>
        <div className="container search-nav">
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"></input>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          <div className="btn-group navbar-form navbar-right" role="group">
            <button
              type="submit"
              className="btn btn-default active"
              onClick={(e) => this.handleButton(e)}>Groups</button>
            <button
              type="submit"
              className="btn btn-default"
              onClick={(e) => this.handleButton(e)}>Events</button>
          </div>
        </div>
        <div className="container">
          { this.renderTitle() }
          <br/>
          { this.renderItems() }
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

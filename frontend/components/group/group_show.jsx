import React from 'react';
import { Link, withRouter, Switch, Route } from 'react-router-dom';
import Members from './members_container';
import Calendar from '../shared/calendar';
import Events from '../event/event_show_container';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: "",
      eventList: []
    }
  }

  componentDidMount() {
    $(document).scrollTop(0);
    this.parseCreatedDate();

    $(function () {
      $('[data-toggle="popover"]').popover({
        trigger: 'focus'
      })
    })
  }

  parseTitle(title) {
    return title.split(" ").join("");
  }

  parseCreatedDate() {
    let input = this.props.created_at;
    let dateObj = new Date(input);
    let months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    this.setState({
      currentDate: `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`
    });
  }

  parseEventDate(date) {
    let dt = new Date(date);
    let months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let isAM = dt.getHours() < 12 ? true : false;
    return `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()} ${dt.getHours() % 12}:${dt.getMinutes()} ${isAM ? "AM" : "PM"}`
  }

  renderAbout() {
    if (this.props.match.url !== location.pathname) {
      return (
        <a
          tabIndex='0'
          role='button'
          data-trigger='focus'
          data-container='body'
          className="btn btn-lg btn-default"
          data-toggle="popover"
          data-content={this.props.description}
          data-placement='right'>About Us</a>
      )
    }
  }

  renderEvents() {
    return this.props.events.map((event, idx) => {
      return (
        <div key={idx}>
          <h3>{event.title}</h3>
          <p>{this.parseEventDate(event.date)}</p>
          <h4>Attendants</h4>
          {
            event.attendees.map((ind, jdx) => {
              return (
                <img key={jdx} className="rounded" src={ind.profile_img} width="50"></img>
              )
            })
          }
          <hr></hr>
        </div>
      )
    })
  }

  //conditional statement for other info using either ownProps in container or window.location.router
  render () {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>{this.props.name}</h1>
        </div>
        <nav className="navbar navbar-light sticky-top group-nav" style={{background: "#e3f2fd"}}>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#groupNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="groupNavbar">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={`${this.props.match.url}`}>Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${this.props.match.url}/members`}>Members</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${this.props.match.url}/calendar`}>Calendar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${this.props.match.url}/events`}>Events</Link>
              </li>
            </ul>
            <div className="nav navbar-nav navbar-right">
              <button className="btn btn-danger">
                Join Us
              </button>
            </div>
          </div>
        </nav>
        <div className="container group-main-container">
          <div className="row justify-content-between">
            <div className="col-sm-3 col-3 col-md-3 group-sidenav">
              <img className="rounded group-thumbnail" src={this.props.thumbnail_img_url} width='120'></img>
              <hr/>
              <h4 className="text-primary">{this.props.city}, {this.props.state}</h4>
              <p className="text-muted">Founded {this.state.currentDate}</p>
              <h5>Organizer </h5>
              { this.renderAbout() }
              <div className="group-nav-lists">
                <p>Members {this.props.members.length}</p>
                <p>Events {this.props.events.length}</p>
                <p>Calendar</p>
              </div>
            </div>
            <div className="col-sm-9 col-9 col-md-9 group-main">
              <Switch>
                <Route exact path={`${this.props.match.url}`} render={() => {
                    return (
                      <div className="container-fluid">
                        <p>{this.props.description}</p>
                        <hr/>
                        <div>
                          <h3>{this.props.members.length} Members joined</h3>
                          <span>
                            { this.props.members.map((ind, idx) => {
                              return (
                                <a key={idx}>
                                  <img className="rounded" src={ind.profile_img} width='50'/>
                                </a>
                              )
                            })}
                          </span>
                          <button className="btn btn-danger float-right">
                            Join Us
                          </button>
                        </div>
                        <hr/>
                        <div>
                          {this.renderEvents()}
                        </div>
                      </div>
                    )
                  }} />
                <Route path={`${this.props.match.url}/members`} {...this.props} component={Members}/>
                <Route path={`${this.props.match.url}/events`} component={Events}/>
                <Route path={`${this.props.match.url}/calendar`} component={Calendar}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupShow);

import React from 'react';
import {getLocation} from '../../util/user_api_util';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      state: ""
    };
    this.currentLocation = this.currentLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  joinClickHandler() {
    this.props.updateEvent();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.currentLocation);
  }

  attendees() {
    if (this.props.event.attendees) {
      if (this.props.event.attendees.length !== 0) {
        return this.props.event.attendees.map(user => {
          let profile;
          if (user.profile_img) {
            profile = user.profile_img;
          } else {
            profile = "https://res.cloudinary.com/dsetpdsls/image/upload/v1478804396/defaultIcon_unkrse.png";
          }
          return (
            <div
              key={user.id}
              className="event-attendee">
              <div
                className="event-attendee-img"
                style={{backgroundImage: `url(${profile})`}}></div>
              <div className="event-attendee-name">{user.username}</div>
            </div>
          );
        });
      } else {
        return <h6>RSVP empty!</h6>;
      }
    }
  }

  switchButton() {
    if (this.props.attendees.length >= 1) {
      if (this.props.attendees.some(attendee => attendee.username === this.props.currentUser)) {
        return (<button onClick={this.props.deleteAttendee.bind(this, this.props.currentUser, this.props.eventId)}>Leave RSVP</button>);
      } else {
        return (<button onClick={this.props.addAttendee.bind(this, this.props.currentUser, this.props.eventId)}>Join RSVP</button>);
      }
    } else {
      return (<button onClick={this.props.deleteAttendee.bind(this, this.props.currentUser, this.props.eventId)}>Leave RSVP</button>);
    }
  }

  currentLocation() {
    let lat = this.props.event.lat;
    let lng = this.props.event.lng;
    let params = `${lat},${lng}`;

    const apiKey = "AIzaSyCbq38WBZIYrNol3TjlRGjL9T5dhqoefqI";
    let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

    if (lat) {
      url += params;
      url += `&key=${apiKey}`;
    } else {
      return <h1>Loading</h1>;
    }
    getLocation(url, this.setLocation);
  }

  setLocation(data) {
    let address = data.results[0].formatted_address;
    let city = address.split(', ')[1];
    let state = address.split(', ')[2].split(" ")[0];

    // this.setState({city: city, state: state});
    // this.props.updateUser({location: `${city, state}`});
  }

  parseTime(date) {
    let eventTime = Date.apply(this.props.event.date).split(" ");

    let month = eventTime[1];
    let day = eventTime[2];
    let year = eventTime[3];

    return (`${month} ${day}, ${year}`);
  }

  render () {
    return (
      <div className="event-show">
        <div className="event-content group">
          <section className="event-main">
            <div className="event-title">{this.props.event.title}</div>
            <div className="event-date">
              <h4>Event time: </h4>
              <h4>{this.parseTime()}</h4></div>
            <div className="event-location">{this.state.city}, {this.state.state}</div>
            <div className="event-description">{this.props.event.description}</div>
            <div className="event-attendees">{this.attendees()}</div>
          </section>
          <section className="event-side">
            <div className="rsvp">
              <div>Join now!</div>
              {this.switchButton()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default EventShow;

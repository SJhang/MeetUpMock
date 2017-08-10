import React from 'react';
import {getLocation} from '../../util/user_api_util';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      state: ""
    };
    // this.currentLocation = this.currentLocation.bind(this);
    // this.setLocation = this.setLocation.bind(this);
  }


  joinClickHandler() {
    this.props.updateEvent();
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(this.currentLocation);
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

  parseDate(date) {
    let eventTime = new Date(date);

    let months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    let month = eventTime.getMonth();
    let day = eventTime.getDate();
    let year = eventTime.getFullYear();

    return (`${months[month]} ${day}, ${year}`);
  }

  parseTime(date) {
    let eventTime = new Date(date);
    let isAM = false;
    let hour = eventTime.getHours();
    let minute = eventTime.getMinutes();
    
    if (hour > 12) {
      hour = hour % 12;
    } else {
      isAM = true;
    }

    if (minute < 10) {
      minute = '0' + minute;
    }

    return (`${hour}:${minute} ${isAM ? 'AM' : 'PM'}`);
  }

  render () {
    return (
      <div className="container">
        <h2>{this.props.event.title}</h2>

        <dl className="row">

          <dt className="col-sm-3 col-xs-3 col-3">Time</dt>
          <dd className="col-sm-9 col-xs-9 col-9">
            {this.parseDate(this.props.time)}
            <br></br>
            <strong>{this.parseTime(this.props.time)}</strong>
          </dd>

          <dt className="col-sm-3 col-xs-3 col-3">Location</dt>
          <dd className="col-sm-9 col-xs-9 col-9">San Francisco, CA</dd>

          <dt className="col-sm-3 col-xs-3 col-3">Description</dt>
          <dd className="col-sm-9 col-xs-9 col-9">{this.props.event.description}</dd>

          <dt className="col-sm-3 col-xs-3 col-3">RSVP</dt>
          <dd className="col-sm-9 col-xs-9 col-9">{
              this.props.event.attendees ?
              this.props.event.attendees.map((ind, idx) => (
              <img key={idx} src={ind.profile_img} className="img-circle" width='50'/>
            )) : '0 Attendees'}</dd>
        </dl>
      </div>
    );
  }
}

export default withRouter(EventShow);


// <div className="event-show">
//   <div className="event-content group">
//     <section className="event-main">
//       <div className="event-title">{this.props.event.title}</div>
//       <div className="event-date">
//         <h4>Event time: </h4>
//         <h4>{this.parseTime()}</h4></div>
//         <div className="event-location">{this.state.city}, {this.state.state}</div>
//         <div className="event-description">{this.props.event.description}</div>
//         <div className="event-attendees">{this.attendees()}</div>
//       </section>
//       <section className="event-side">
//         <div className="rsvp">
//           <div>Join now!</div>
//           {this.switchButton()}
//         </div>
//       </section>
//     </div>
//   </div>

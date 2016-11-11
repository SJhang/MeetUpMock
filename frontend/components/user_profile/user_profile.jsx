import React from 'react';
import UploadButton from '../shared/upload_button';
import {getLocation} from '../../util/user_api_util';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      state: ""
    };
    this.currentLocation = this.currentLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  currentLocation(pos) {
    let coord = pos.coords;
    let lat = coord.latitude;
    let lng = coord.longitude;
    let params = `${lat},${lng}`;

    const apiKey ="AIzaSyCbq38WBZIYrNol3TjlRGjL9T5dhqoefqI";
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

    this.setState({city: city, state: state});
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.currentLocation);
  }

  followingGroup() {
    return (
      <h5>You aren't in any groups yet.</h5>
    );
  }

  render () {
    let klass;
    if (this.props.user_image) {
      klass = {backgroundImage: `url('${this.props.user_image}')`};
    } else {
      klass = {backgroundImage:
        `url('https://res.cloudinary.com/dsetpdsls/image/upload/v1478804396/defaultIcon_unkrse.png')`};
    }

    let location = <h4>Loading...</h4>;
    if (this.state.city) {
      location = <h4>Location: {this.state.city}, {this.state.state}</h4>;
    }

    return (
      <div className="profile-main-div">
        <div className="profile-div">
          <div className="profile-detail">
            <div><h1>{this.props.currentUser.username}</h1></div>
            <div className="detail">
              <div>
                {location}
                <h4>Member Since:</h4>
              </div>
              <div>
                <a>Add bio</a>
              </div>
            </div>
            <div>
              {this.followingGroup()}
            </div>
            <div></div>
          </div>
          <div className="profile-picture">
            <div className="image" style={klass}>
            </div>
            <div className="image-options">
              <UploadButton
                createImage={this.props.createImage} className="post-image-button"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;

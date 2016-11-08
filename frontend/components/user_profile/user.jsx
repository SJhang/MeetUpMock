import React from 'react';
import UploadButton from '../shared/upload_button';

class User extends React.Component {
  followingGroup() {
    return (
      <h5>You aren't in any groups yet.</h5>
    );
  }
  render () {
    return (
      <div className="profile-main-div">
        <div className="profile-div">
          <div className="profile-detail">
            <div><h1>{this.props.currentUser.username}</h1></div>
            <div className="detail">
              <div>
                <h4>Location</h4>
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
            <div className="image" style={{backgroundImage: `url('${this.props.user_image}')`}}>
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

export default User;

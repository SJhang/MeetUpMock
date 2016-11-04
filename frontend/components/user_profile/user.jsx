import React from 'react';
import UploadButton from '../shared/upload_button';

class User extends React.Component {

  render () {
    return (
      <div className="profile-main-div">
        <div className="profile-div">
          <div className="profile-detail">
            <div>
              <UploadButton createImage={this.props.createImage.bind(this)} className="post-image-button"/>
            </div>
          </div>
          <div className="profile-picture">

          </div>
        </div>
      </div>
    );
  }
}

export default User;

import React from 'react';

class MainVideo extends React.Component {
  render () {
    return (
      <div className="video">
        <div className="video-controller"></div>
        <div className="content-bound">
          <div className="content-chunk"></div>
          <a>Sign Up</a>
        </div>
      </div>
    );
  }
}

export default MainVideo;

import React from 'react';
import ReactPlayer from 'react-player';

const MainVideo = (props) => {

  return (
    <div className="splash-screen">
      <div className="splash-screen_video">
        <div className="video-controller"></div>
        <div className="content-bound">
          <div className="content-chunk"></div>
          <a>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;

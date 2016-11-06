import React from 'react';
import ReactPlayer from 'react-player';

const MainVideo = ({signup}) => {

  return (
    <div className="splash-screen_video">
      <div className="video-controller"></div>
      <div className="content-bound">
        <div className="content-chunk"></div>
        <button onClick={signup}>Sign Up</button>
      </div>
    </div>
  );
};

export default MainVideo;

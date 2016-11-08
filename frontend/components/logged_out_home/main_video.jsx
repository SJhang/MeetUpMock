import React from 'react';
import ReactPlayer from 'react-player';

const MainVideo = ({signup}) => {

  return (
    <div className="content-chunk">
      <h2>Hello Stranger</h2>
      <div>
        <button onClick={signup}>Sign Up</button>
      </div>
    </div>
  );
};

export default MainVideo;

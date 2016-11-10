import React from 'react';
import ReactPlayer from 'react-player';

const MainVideo = ({guestLogin}) => {

  return (
    <div className="content-chunk">
      <h1>Meet Ups</h1>
      <h2>Try out as</h2>
      <div>
        <button onClick={guestLogin}>Guest</button>
      </div>
    </div>
  );
};

export default MainVideo;

import React from 'react';
import ReactPlayer from 'react-player';

const MainVideo = ({guestLogin}) => {

  return (
    
    <div className="content-chunk">
      <div className="header-contents">
        <h1>Meet people with similar interest!</h1>
        <p>Explore more about the website</p>
        <p>Inspired by Meetup.com</p>
        <div>
          <button onClick={guestLogin}>Guest</button>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;

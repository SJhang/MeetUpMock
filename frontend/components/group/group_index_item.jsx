import React from 'react';
import Masonry from 'react-masonry-component';
import { withRouter } from 'react-router';

const GroupsIndexItem = (props) => {
  let group = props.group;
  let background;
  const backgroundColors = ["#0939ba", "#dfad28", "#ed9825", "#29c99c", "#5c139a", "#00c1db", "#ff1e4b"];
  if (group.thumbnail_img_url) {
    background = {backgroundImage: `url(${group.thumbnail_img_url})`};
  } else {
    let randomBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    background = {background: randomBackgroundColor};
    props.group.thumbnail_img_url = randomBackgroundColor;
  }

  return (
    <li
      className="groups-index-item"
      onClick={()=>props.history.push(`groups/${group.id}`)}>
      <div
        className="group-item-background"
        style={background}></div>
      <h4 className="group-name">{group.name}</h4>
      <p className="group-location">{group.city}, {group.state}</p>
    </li>
  );
};

export default withRouter(GroupsIndexItem);

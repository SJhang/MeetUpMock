import React from 'react';
import GroupsIndexItem from './group_index_item.jsx';
import Masonry from 'react-masonry-component';
import {hashHistory} from 'react-router';

const GroupsIndex = ({groups}) => {
  const eachGroup = () => {
    return groups.map(group => {
      let background;
      debugger;
      if (group.thumbnail_img_url === null) {
        background = "https://res.cloudinary.com/dsetpdsls/image/upload/v1478820322/download_kb6qnf.jpg";
      } else {
        background = group.thumbnail_img_url;
      }
      return (
        <GroupsIndexItem
          key={group.id}
          group={group}
          style={{backgroundImage: `url(${background})`}}/>
      );
    });

  };

  let masonryOptions = {
    transitionDuration: 0.8,
    fitWidth: true
  };

  let style = {
    backgroundImage: `url("https://res.cloudinary.com/dsetpdsls/image/upload/v1478820322/download_kb6qnf.jpg")`
  };

  return (
    <div className="groups-index">
      <Masonry
        className={"group-index-masonry"}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}>
        {eachGroup()}
      </Masonry>
    </div>
  );
};

export default GroupsIndex;

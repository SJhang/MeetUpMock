import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';

const MainOptions = ({lists}) => {
  const renderItems = (lists) => {
    return lists.map(item =>
      <div>{item.name || item.title}</div>
    )
  };

  let masonryOptions = {
    transitionDuration: 0.8,
    fitWidth: true
  };

  let style = {
    backgroundImage: `url("https://res.cloudinary.com/dsetpdsls/image/upload/v1478820322/download_kb6qnf.jpg")`
  };

  return (
    <span className="groups-index">
      {renderItems(lists)}
    </span>
  )
}
// <Masonry
//   className={"group-index-masonry"}
//   elementType={'span'}
//   options={masonryOptions}
//   disableImagesLoaded={false}
//   updateOnEachImageLoad={false}>
// </Masonry>

export default MainOptions;

import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';

const MainOptions = ({lists}) => {
  const renderItems = (lists) => {
    return lists.map(item =>
      <Link key={item.id} className="main-item" to={item.name ? `/groups/${parseTitle(item.name)}` : `/events/${parseTitle(item.title)}`}>
        <img className="img-fluid" src={parseImgUrl(item.thumbnail_img_url)} width="140" height="195"></img>
        <h5>{item.name || item.title}</h5>
      </Link>
    )
  };

  const parseTitle = (title) => {
    return title.split(" ").join("");
  }

  const parseImgUrl = (url) => {
    let urlList = url.split('upload/');
    urlList.splice(1, 0, 'upload/c_thumb,w_140,h_195/');
    return urlList.join('');
  }

  return (
    <div className="row main-list">
      {renderItems(lists)}
    </div>
  )
}

export default MainOptions;

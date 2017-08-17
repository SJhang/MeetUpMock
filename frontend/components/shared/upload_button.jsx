import React from 'react';
import {createImage} from '../../actions/session_actions';

const UploadButton = (props) => {
  const upload = e => {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_opts,
      (error, images) => {
        if (error === null) {
          props.createImage(images[0].url);
        }
      }
    );
  };

  return (
    <button type='button' onClick={upload} className="btn btn-primary upload-button">Upload image</button>
  );
};

export default UploadButton;

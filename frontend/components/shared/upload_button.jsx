import React from 'react';

const UploadButton = (props) => {
  const upload = (e) => {
    e.preventDefault();
    debugger;
    cloudinary.openUploadWidget(
      window.cloudinary_opts,
      (error, images) => {
        if (error === null) {
          props.createImage(images[0].url);
        }
      });
  };

  return (
    <button onClick={upload} className="upload-image-button">Upload</button>
  );
};

export default UploadButton;

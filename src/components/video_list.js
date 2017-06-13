import React from 'react';

const VideoList = (props) => {
  return (
    //use className instead of class.  Error will happen.  naming issue
    <ul className="col-md-4 list-group"> 
      {props.videos.length};
    </ul>
  )
};

export default VideoList;
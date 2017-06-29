import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  
  //arrays need a key
  const videoItems = props.videos.map((video) => {
    //always want to add a key when iterating over items.  Performance increase
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video}  
      />

    );
  });

  return (
    //use className instead of class.  Error will happen.  naming issue
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
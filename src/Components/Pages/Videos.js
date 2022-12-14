import React from "react";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";
import classes from "../../styles/Videos.module.css";
import Video from "../Video";

const Videos = () => {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}

      {!loading && videos.length === 0 && <div>No Data Found</div>}
      {!error && <div>Three was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Videos;

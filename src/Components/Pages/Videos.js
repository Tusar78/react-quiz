import React from "react";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";
import classes from "../../styles/Videos.module.css";
import Video from "../Video";

const Videos = () => {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={classes.videos}>
      {videos.map((video) => (
        <Link to="/quiz">
          <Video />
        </Link>
      ))}
    </div>
  );
};

export default Videos;

import React from "react";
import ReactPlayer from "react-player";

export const Video = props => {
  return (
    <>
      <ReactPlayer url={props.url} width="100%" height="100%" />
    </>
  );
};

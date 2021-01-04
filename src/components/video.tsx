import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  name: {
    fontSize: "14px",
    color: "dimgrey",
    lineHeight: "22px"
  },
  date: {
    fontWeight: "normal",
    fontSize: "12px",
    color: "lightgrey"
  }
}));
export const Video = (props: any) => {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: "2rem" }}>
      <ReactPlayer url={props.url} width="100%" height="100%" />
      <div>
        <div className={classes.name}>{props.alt_description}</div>
      </div>
    </div>
  );
};

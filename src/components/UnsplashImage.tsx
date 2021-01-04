import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px"
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

export const UnsplashImage = (props: any) => {
  const classes = useStyles();

  return (
    <>
      <img className={classes.img} key={props.name} src={props.url} alt="" />
      <div style={{ marginBottom: "2rem" }}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.date}>{props.created_at}</div>
      </div>
    </>
  );
};

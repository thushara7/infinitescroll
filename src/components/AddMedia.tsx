import React from "react";
import { IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  margin: {
    display: "flex",
    justifyContent: "center"
  }
}));
export const AddMedia = () => {
  const classes = useStyles();
  return (
    <div className={classes.margin}>
      <Button variant="contained" color="primary" startIcon={<AddIcon />}>
        Add Media
      </Button>
    </div>
  );
};

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import { InputField } from "../components/input";

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
  //states
  const [open, setOpen] = React.useState(false);
  const [mediaContent, setMediaContent] = React.useState({ ...props });

  // for urltextfield
  const [url, setUrl] = useState(props.url);
  const handleOnChangeURL = (event: any) => {
    setMediaContent({
      ...mediaContent,
      urls: {
        thumb: event.target.value
      }
    });
    setUrl(event.target.value);
  };
  // for nameTextfield
  const [name, setName] = useState(props.name);
  const handleOnChangeName = (event: any) => {
    setMediaContent({
      ...mediaContent,
      [event.target.name]: event.target.value,
      alt_description: event.target.value
    });
    setName(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e", e.target.value);
  };

  const handleUpdateandClose = () => {
    setOpen(false);

    console.log(mediaContent);
    props.handleUpdate(mediaContent);
  };

  const handleDeleteMedia = () => {
    props.handleDelete(mediaContent);
  };
  return (
    <>
      <img className={classes.img} key={props.name} src={props.url} alt="" />
      <div style={{ marginBottom: "2rem" }}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.date}>
          {props.created_at}
          <span>
            {" "}
            <Button color="primary" onClick={handleClickOpen}>
              Update
            </Button>
            <Button color="secondary" onClick={handleDeleteMedia}>
              {" "}
              Delete
            </Button>
          </span>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Add Media</DialogTitle>
        <DialogContent>
          {props.mediaType === "image" && (
            <>
              <InputField
                text={url}
                handleChange={handleOnChangeURL}
                name="url"
                label="url"
              />
              <InputField
                text={name}
                handleChange={handleOnChangeName}
                name="name"
                label="Name"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdateandClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

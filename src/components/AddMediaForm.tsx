import React, { useState } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles(theme => ({
  margin: {
    display: "flex",
    justifyContent: "center"
  },
  select: {
    width: "100%"
  }
}));
interface mediaProps {
  mediaType: string;
  url: string;
  name: string;
  alt_description: string;
  id: string;
}
interface urlsObj {
  thumb: string;
}
export const AddMediaForm = (props: any) => {
  //styles
  const classes = useStyles();

  //states
  const [open, setOpen] = React.useState(false);
  const [media, setMedia] = React.useState("");
  const [mediaContent, setMediaContent] = useState<mediaProps>({
    url: "",
    mediaType: "",
    name: "",
    alt_description: "",
    id: ""
  });

  //event handlers
  const handleMediaChange = (event: any) => {
    setMediaContent({
      url: "",
      mediaType: "",
      name: "",
      alt_description: "",
      id: ""
    });
    setMedia(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e", e);
    setMediaContent({
      ...mediaContent,
      [e.target.name]: e.target.value
    });
  };
  const handleCloseandAdd = () => {
    setOpen(false);

    props.onAdd({
      mediaType: media,
      alt_description: mediaContent.name,
      name: mediaContent.name,
      urls: {
        thumb: mediaContent.url
      },
      id: Math.random()
    });
  };

  return (
    <div>
      <div className={classes.margin}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          startIcon={<AddIcon />}
          className={classes.margin}
        >
          Add Media
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Add Media</DialogTitle>
        <DialogContent>
          <InputLabel id="demo-simple-select-label">
            Select Media type:
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={media}
            onChange={handleMediaChange}
            className={classes.select}
          >
            <MenuItem value="product">Product</MenuItem>
            <MenuItem value="image">Image</MenuItem>
            <MenuItem value="video">Video</MenuItem>
          </Select>
          {media === "product" && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                onChange={handleChange}
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="description"
                label="description"
                onChange={handleChange}
                type="text"
                fullWidth
              />
            </>
          )}
          {media === "image" && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                onChange={handleChange}
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="url"
                label="url"
                onChange={handleChange}
                type="text"
                fullWidth
              />
            </>
          )}
          {media === "video" && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                onChange={handleChange}
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="url"
                label="url"
                onChange={handleChange}
                type="text"
                fullWidth
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseandAdd} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

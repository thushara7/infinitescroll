import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  margin: {
    display: "flex",
    justifyContent: "center"
  },
  select: {
    width: "100%"
  }
}));
export const AddMediaForm = () => {
  const [open, setOpen] = React.useState(false);
  const [media, setMedia] = React.useState("");
  const [mediaContent, setMediaContent] = React.useState({});
  const classes = useStyles();

  const handleMediaChange = (event: any) => {
    setMediaContent({});
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
      [e.target.name]: e.target.value,
      type: media
    });
  };

  console.log(">>>", mediaContent);

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
          <Button onClick={handleClose} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

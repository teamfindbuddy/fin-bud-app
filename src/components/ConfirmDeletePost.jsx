import React from "react";

// frontend imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContentText } from "@mui/material";

function ConfirmDeletePost({
  showDelete,
  handleClickOpen,
  handleClose,
  handleDeletePost,
  open
}) {
  return (
    <>
      {showDelete ? (
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Delete Post
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Delete this post"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure want to delete?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleDeletePost} autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : null}
    </>
  );
}
export default ConfirmDeletePost;

import React, { useContext, useState } from "react";

// frontend imports
import { Button, Container, Fab, Modal, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";

// Database imports
import AddPost from "./DAO/AddPost";
import ToastContext from "../contexts/ToastContext";

const fab = {
  position: "fixed",
  bottom: 20,
  right: 20
};

const container = {
  width: "80%",
  height: "80%",
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

function CreateBuddyRequest() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState({});

  const snackBar = useContext(ToastContext);

  function handleChange(event) {
    const value = event.target.value;
    const type = event.target.id;

    setPost((prevPost) => ({
      ...prevPost,
      [type]: value
    }));
  }

  function handleSubmit() {
    setOpen(false);

    // add it into the db
    AddPost(post);

    // reset post
    setPost((prevPost) => ({}));
    snackBar("CBR submitted successfully", "success");
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <>
      <>
        <Tooltip
          title="Create Buddy Request"
          aria-label="add"
          onClick={() => setOpen(true)}
        >
          <Fab color="primary" style={fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Modal open={open}>
          <Container style={container}>
            <DialogTitle>{"Create Buddy Request"}</DialogTitle>
            <form autoComplete="off">
              <TextField
                onChange={handleChange}
                value={post?.project}
                autoFocus
                margin="dense"
                id="project"
                label="Project Name"
                multiline
                fullWidth
                variant="standard"
              />
              <br />
              <TextField
                onChange={handleChange}
                value={post?.work}
                autoFocus
                margin="dense"
                id="work"
                label="I'm working on"
                multiline
                fullWidth
                variant="standard"
              />
              <br />
              <TextField
                onChange={handleChange}
                value={post?.req}
                autoFocus
                margin="dense"
                id="req"
                label="Requirements"
                multiline
                fullWidth
                variant="standard"
              />
              <br />
              <TextField
                onChange={handleChange}
                value={post?.exp}
                autoFocus
                margin="dense"
                id="exp"
                label="My expertise"
                multiline
                fullWidth
                variant="standard"
              />
              <br />
              <TextField
                onChange={handleChange}
                value={post?.benefits}
                autoFocus
                margin="dense"
                id="benefits"
                label="Benefits"
                multiline
                fullWidth
                variant="standard"
              />
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleCancel}
                  style={{ marginRight: 20 }}
                >
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleSubmit}
                >
                  submit
                </Button>
              </div>
            </form>
          </Container>
        </Modal>
      </>
    </>
  );
}
export default CreateBuddyRequest;

// React imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// frontend imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

// Database imports
import GetUserDetails from "../components/DAO/GetUserDetails";
import UpdateDisplayName from "../components/DAO/UpdateDisplayName";
import UpdateUserData from "../components/DAO/UpdateUserData";
import GetUserId from "../components/DAO/GetUserId";

function EditProfile() {
  const [open, setOpen] = useState(false);
  const [mainUser, setMainUser] = useState([]);
  const navigate = useNavigate();
  const userId = GetUserId();

  async function getData() {
    GetUserDetails({ setMainUser: setMainUser, uid: userId });
  }

  async function updateDisplayName() {
    if (mainUser[0] !== undefined) {
      UpdateDisplayName({ displayName: mainUser[0].name });
    }
  }
  function handleToOpen() {
    setOpen(true);
    getData();
  }

  async function updateData() {
    UpdateUserData({ mainUser: mainUser, userId: userId });
    navigate("/main");
  }

  function handleEdit() {
    setOpen(false);
    updateDisplayName();
    updateData();
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <div style={{ paddingTop: "10px" }}>
      <Button color="primary" onClick={handleToOpen} startIcon={<EditIcon />}>
        Edit Profile
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>{"Edit Profile"}</DialogTitle>
        <img src={mainUser[0]?.img} height="50px" width="50px" alt="img" />
        <DialogContent>
          Email: {mainUser[0]?.email}
          {/* name */}
          <TextField
            onChange={(e) => {
              mainUser[0].name = e.target.value;
              setMainUser([...mainUser]);
            }}
            value={mainUser[0] === undefined ? "" : mainUser[0].name}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            multiline
            fullWidth
            variant="standard"
          />
          <br />
          {/* linkedin */}
          <TextField
            onChange={(e) => {
              mainUser[0].linkedin = e.target.value;
              setMainUser([...mainUser]);
            }}
            value={mainUser[0] === undefined ? "" : mainUser[0].linkedin}
            autoFocus
            margin="dense"
            id="linkedin"
            label="LinkedIn"
            multiline
            fullWidth
            variant="standard"
          />
          <br />
          {/* about */}
          <TextField
            value={mainUser[0] === undefined ? "" : mainUser[0].about}
            onChange={(e) => {
              console.log(mainUser[0]);
              mainUser[0].about = e.target.value;
              setMainUser([...mainUser]);
            }}
            autoFocus
            margin="dense"
            id="about"
            label="About"
            multiline
            fullWidth
            variant="standard"
          />
          <br />
          {/* college */}
          <TextField
            onChange={(e) => {
              mainUser[0].college = e.target.value;
              setMainUser([...mainUser]);
            }}
            value={mainUser[0] === undefined ? "" : mainUser[0].college}
            autoFocus
            margin="dense"
            id="college"
            label="College"
            multiline
            fullWidth
            variant="standard"
          />
          <br />
          {/* website */}
          <TextField
            onChange={(e) => {
              mainUser[0].website = e.target.value;
              setMainUser([...mainUser]);
            }}
            value={mainUser[0] === undefined ? "" : mainUser[0].website}
            autoFocus
            margin="dense"
            id="website"
            label="Website"
            multiline
            fullWidth
            variant="standard"
          />
          <br />
          {/* github */}
          <TextField
            onChange={(e) => {
              mainUser[0].github = e.target.value;
              setMainUser([...mainUser]);
            }}
            value={mainUser[0] === undefined ? "" : mainUser[0].github}
            autoFocus
            margin="dense"
            id="github"
            label="Github"
            multiline
            fullWidth
            variant="standard"
          />
          <br />
          {/* Twitter */}
          <TextField
            onChange={(e) => {
              mainUser[0].twitter = e.target.value;
              setMainUser([...mainUser]);
            }}
            value={mainUser[0] === undefined ? "" : mainUser[0].twitter}
            autoFocus
            margin="dense"
            id="twitter"
            label="Twitter"
            multiline
            fullWidth
            variant="standard"
          />
          <br />
          {/* Technical Skills */}
          <TextField
            onChange={(e) => {
              mainUser[0].skills = e.target.value;
              setMainUser([...mainUser]);
            }}
            value={mainUser[0] === undefined ? "" : mainUser[0].skills}
            autoFocus
            margin="dense"
            id="skills"
            label="Skills"
            multiline
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit} color="primary" autoFocus>
            Edit
          </Button>
          <Button onClick={handleCancel} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditProfile;

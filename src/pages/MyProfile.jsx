// React imports
import React, { useState } from "react";

// frontend imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// DB imports
import GetUserId from "../components/DAO/GetUserId";
import SkillTag from "../components/SkillTag";
import GetUserDetails from "../components/DAO/GetUserDetails";

function MyProfile() {
  const [open, setOpen] = useState(false);
  const [mainUser, setMainUser] = useState([]);
  const userId = GetUserId();

  function getUserData() {
    console.log(userId);
    GetUserDetails({ setMainUser: setMainUser, uid: userId });
  }

  function handleToOpen() {
    setOpen(true);
    getUserData();
  }

  function handleCancel() {
    setOpen(false);
  }
  return (
    <div style={{ paddingTop: "10px" }}>
      <Button color="primary" onClick={() => handleToOpen()}>
        My Profile
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>{"My Profile"}</DialogTitle>

        <DialogContent>
          Img:{" "}
          <img
            src={mainUser[0] === undefined ? "" : mainUser[0].img}
            alt="image"
            height="50px"
            width="50px"
          />
          <br />
          Name: {mainUser[0] === undefined ? "" : mainUser[0].name}
          <br />
          Email: {mainUser[0] === undefined ? "" : mainUser[0].email}
          <br />
          About: {mainUser[0] === undefined ? "" : mainUser[0].about}
          <br />
          Linkedin: {mainUser[0] === undefined ? "" : mainUser[0].linkedin}
          <br />
          College: {mainUser[0] === undefined ? "" : mainUser[0].college}
          <br />
          Website: {mainUser[0] === undefined ? "" : mainUser[0].website}
          <br />
          Github: {mainUser[0] === undefined ? "" : mainUser[0].github}
          <br />
          Twitter: {mainUser[0] === undefined ? "" : mainUser[0].twitter}
          <br />
          Technical Skills:{" "}
          <SkillTag
            skill={mainUser[0] === undefined ? "" : mainUser[0].skills}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MyProfile;

import React from "react";

// frontend imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SkillTag from "./SkillTag";

function ViewProfile({ mainUser, openViewProfile, handleViewProfileCancel }) {
  return (
    <>
      <Dialog open={openViewProfile} onClose={handleViewProfileCancel}>
        <DialogTitle>{"User Profile"}</DialogTitle>
        <image
          src={mainUser[0] === undefined ? "" : mainUser[0].img}
          alt="image"
          height="50px"
          width="50px"
        />
        <DialogContent>
          Name: {mainUser[0] === undefined ? "" : mainUser[0].name}
        </DialogContent>
        <DialogContent>
          Email: {mainUser[0] === undefined ? "" : mainUser[0].email}
        </DialogContent>
        <DialogContent>
          About: {mainUser[0] === undefined ? "" : mainUser[0].about}
        </DialogContent>
        <DialogContent>
          Linkedin: {mainUser[0] === undefined ? "" : mainUser[0].linkedin}
        </DialogContent>
        <DialogContent>
          College: {mainUser[0] === undefined ? "" : mainUser[0].college}
        </DialogContent>
        <DialogContent>
          Website: {mainUser[0] === undefined ? "" : mainUser[0].website}
        </DialogContent>
        <DialogContent>
          Github: {mainUser[0] === undefined ? "" : mainUser[0].github}
        </DialogContent>
        <DialogContent>
          Twitter: {mainUser[0] === undefined ? "" : mainUser[0].twitter}
        </DialogContent>
        <DialogContent>
          Technical Skills:{" "}
          <SkillTag
            skill={mainUser[0] === undefined ? "" : mainUser[0].skills}
          />
        </DialogContent>
        {/* <DialogContent>Github: {currentUser.linkedin}</DialogContent> */}
        <DialogActions>
          <Button onClick={handleViewProfileCancel} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ViewProfile;

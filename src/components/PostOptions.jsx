import React, { useEffect, useState } from "react";

// front end imports
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

// Database imports
import AddPostIdToSaveList, {
  RemovePostIdToSaveList
} from "./DAO/PostIdToSaveList";

import { CheckIfPostIsSaved } from "./DAO/FetchSavedPosts";

function PostOptions(props) {
  const { open } = props;
  const [save, setSave] = useState(true);

  const handleClose = () => {
    props.handleOptionClose();
  };

  useEffect(() => {
    CheckIfPostIsSaved({ postId: props?.postId, setSave: setSave });
  }, []);

  // Save
  async function saveUnsave() {
    if (save) {
      AddPostIdToSaveList({ postId: props?.postId });
      setSave(false);
    } else {
      RemovePostIdToSaveList({ postId: props?.postId });
      setSave(true);
    }
  }

  // share
  function share() {}

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Post Options</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem>
          {save ? (
            <Button onClick={saveUnsave}>
              {" "}
              <BookmarkBorderIcon style={{ marginRight: "20px" }} />
              Save
            </Button>
          ) : (
            <Button onClick={saveUnsave}>
              {" "}
              <BookmarkIcon style={{ marginRight: "20px" }} />
              UnSave
            </Button>
          )}
        </ListItem>
        <ListItem>
          <Button onClick={share}>
            <ShareOutlinedIcon style={{ marginRight: "20px" }} />
            Share
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
}

PostOptions.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

export default PostOptions;

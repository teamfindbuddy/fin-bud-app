import React, { useContext, useEffect, useState } from "react";

// frontend imports
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ViewProfile from "./ViewProfile";
import { Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SchoolIcon from "@mui/icons-material/School";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

// Util Imports
import TimeSince from "./Util/TimeSince";

// Database imports
import GetUserId from "./DAO/GetUserId";
import GetUserDetails from "./DAO/GetUserDetails";
import DeletePost from "./DAO/DeletePost";
import PostMoreOptions from "./PostMoreOptions";
import AddPostIdToSaveList, {
  RemovePostIdToSaveList
} from "./DAO/PostIdToSaveList";

import { CheckIfPostIsSaved } from "./DAO/FetchSavedPosts";
import ToastContext from "../contexts/ToastContext";

// design the post box here
function PostBlock(props) {
  const [openViewProfile, setOpenViewProfile] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [showMoreReq, setShowMoreReq] = useState(false);
  const [showMoreExp, setShowMoreExp] = useState(false);
  const [showMoreBenifits, setShowMoreBenifits] = useState(false);
  const [mainUser, setMainUser] = useState([]);
  const userId = GetUserId();
  const [save, setSave] = useState(true);
  const postIds = props?.post?.pid;

  const snackBar = useContext(ToastContext);

  useEffect(() => {
    console.log("YES");
    CheckIfPostIsSaved({ postId: postIds, setSave: setSave });
  }, []);

  // Save
  async function saveUnsave() {
    if (save) {
      AddPostIdToSaveList({ postId: postIds });
      setSave(false);
      snackBar("Post saved successfully", "success");
    } else {
      RemovePostIdToSaveList({ postId: postIds });
      setSave(true);
      snackBar("Post unsaved successfully", "success");
    }
  }

  function share() {}

  useEffect(() => {
    const uid = props?.post?.uid;
    GetUserDetails({ setMainUser: setMainUser, uid: uid });
    if (userId === uid) {
      setShowDelete(true);
    }
  }, []);

  function handleViewProfileToOpen() {
    setOpenViewProfile(true);
  }

  function handleViewProfileCancel() {
    setOpenViewProfile(false);
  }

  async function handleDeletePost() {
    const pid = props?.post?.id;
    await DeletePost({ pid: pid });
    setOpen(false);
    snackBar("Post deleted successfully", "error");
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const post = {
    project: props.post.project,
    work: props.post.work,
    req: props.post.req,
    exp: props.post.exp,
    benefits: props.post.benefits
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* Post starts */}
      <Card
        sx={{
          height: "80%",
          width: "60%",
          marginTop: "15px",
          boxShadow: "1px 1px 10px -3px rgba(0,0,0,0.75)"
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              onClick={handleViewProfileToOpen}
              sx={{ bgcolor: "#d9d9d9" }}
              aria-label="recipe"
              src={mainUser[0] === undefined ? "" : mainUser[0].img}
            />
          }
          action={
            <IconButton aria-label="settings">
              <PostMoreOptions
                showDelete={showDelete}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                handleDeletePost={handleDeletePost}
                open={open}
                postIds={postIds}
                saveUnsave={saveUnsave}
                share={share}
                save={save}
              />
            </IconButton>
          }
          title={
            <Link
              size="small"
              style={{ textDecoration: "none", color: "black" }}
              onClick={handleViewProfileToOpen}
            >
              {mainUser[0] === undefined ? "" : mainUser[0].name}
            </Link>
          }
          subheader={TimeSince(props.post?.time?.seconds)}
        />
        <CardContent>
          {/* View Profile Starts */}
          <ViewProfile
            mainUser={mainUser}
            openViewProfile={openViewProfile}
            handleViewProfileCancel={handleViewProfileCancel}
            handleViewProfileToOpen={handleViewProfileToOpen}
          />
          {/* View Profile Ends */}
        </CardContent>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <SchoolIcon fontSize="large" />
            <Stack>
              <Typography style={{ fontWeight: "bold" }}>
                Project Name :-
              </Typography>
              <Typography style={{ marginLeft: "2rem" }}>
                {post.project}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <SchoolIcon fontSize="large" />
            <Stack>
              <Typography style={{ fontWeight: "bold" }}>
                Working on :-
              </Typography>
              <Typography style={{ marginLeft: "2rem" }}>
                {showMoreWork ? post.work : `${post.work.substring(0, 250)}`}
                <button
                  style={{
                    all: "unset",
                    color: "blue",
                    cursor: "pointer",
                    marginLeft: "1rem"
                  }}
                  onClick={() => setShowMoreWork(!showMoreWork)}
                >
                  {showMoreWork ? "Show less" : "Show more"}
                </button>
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <SchoolIcon fontSize="large" />
            <Stack>
              <Typography style={{ fontWeight: "bold" }}>
                Requirements :-
              </Typography>
              <Typography style={{ marginLeft: "2rem" }}>
                {showMoreReq ? post.req : `${post.req.substring(0, 250)}`}
                <button
                  style={{
                    all: "unset",
                    color: "blue",
                    cursor: "pointer",
                    marginLeft: "1rem"
                  }}
                  onClick={() => setShowMoreReq(!showMoreReq)}
                >
                  {showMoreReq ? "Show less" : "Show more"}
                </button>
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <SchoolIcon fontSize="large" />
            <Stack>
              <Typography style={{ fontWeight: "bold" }}>
                Experience :-
              </Typography>
              <Typography style={{ marginLeft: "2rem" }}>
                {showMoreExp ? post.exp : `${post.exp.substring(0, 250)}`}
                <button
                  style={{
                    all: "unset",
                    color: "blue",
                    cursor: "pointer",
                    marginLeft: "1rem"
                  }}
                  onClick={() => setShowMoreExp(!showMoreExp)}
                >
                  {showMoreExp ? "Show less" : "Show more"}
                </button>
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <SchoolIcon fontSize="large" />
            <Stack>
              <Typography style={{ fontWeight: "bold" }}>
                Benefits :-
              </Typography>
              <Typography style={{ marginLeft: "2rem" }}>
                {showMoreBenifits
                  ? post.benefits
                  : `${post.benefits.substring(0, 250)}`}
                <button
                  style={{
                    all: "unset",
                    color: "blue",
                    cursor: "pointer",
                    marginLeft: "1rem"
                  }}
                  onClick={() => setShowMoreBenifits(!showMoreBenifits)}
                >
                  {showMoreBenifits ? "Show less" : "Show more"}
                </button>
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <Grid container>
          <Grid lg={6} style={{ textAlign: "center" }}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
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
              </List>
            </Box>
          </Grid>
          <Grid lg={6}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <List sx={{ pt: 0 }}>
                <ListItem>
                  <Button onClick={share}>
                    <ShareOutlinedIcon style={{ marginRight: "20px" }} />
                    Share
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default PostBlock;

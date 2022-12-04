import React, { useState, useEffect, lazy } from "react";
import { Tabs, Tab, Box } from "@mui/material";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// frontend imports
// import NoSaved from "./NoSaved";
import Progress from "./Progress";

// Database imports
import FetchAllPosts from "./DAO/FetchAllPosts";
import FetchUserPosts from "./DAO/FetchUserPosts";
import FetchSavedPosts from "./DAO/FetchSavedPosts";

//lazy imports
const PostBlock = lazy(() => import("./PostBlock"));

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = React.useState("one");
  // const [pageValue, setPageValue] = React.useState("one");

  // const handlePageChange = (event, newValue) => {
  //   setPageValue(newValue);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // fetching "posts" collection data from database
  useEffect(() => {
    handleAllFeeds();
  }, []);

  // current user's posts
  function handleMyPost() {
    FetchUserPosts({ setPosts: setPosts });
  }

  // all posts
  function handleAllFeeds() {
    FetchAllPosts({ setPosts: setPosts });
  }

  // saved posts
  async function handleMySaved() {
    FetchSavedPosts({ setPosts: setPosts });
  }

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            // style={{ display: 'flex', justifyContent: 'space-between'}}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Feeds" onClick={handleAllFeeds} />
            <Tab value="two" label="My Posts" onClick={handleMyPost} />
            <Tab value="three" label="Saved" onClick={handleMySaved} />
          </Tabs>
        </Box>
        {posts.length === 0 ? (
          <Progress />
        ) : (
          // <NoSaved />
          posts?.map((post) => {
            return <PostBlock key={post?.id} post={post} />;
          })
        )}
        {/* </Suspense> */}
      </div>
    </>
  );
}

export default AllPosts;

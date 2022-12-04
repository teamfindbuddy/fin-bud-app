import React from "react";
import CreateBuddyRequest from "./CreateBuddyRequest";
import Navbar from "./Navbar";
import AllPosts from "./AllPosts";

function MainPageComponents() {
  return (
    <>
      <Navbar />
      <CreateBuddyRequest />
      <br />
      <br />
      <br />
      <AllPosts />
    </>
  );
}

export default MainPageComponents;

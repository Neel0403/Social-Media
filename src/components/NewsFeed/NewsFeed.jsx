import React from "react";
import UploadPost from "../UploadPost/UploadPost";
import Post from "../Post/Post";

const NewsFeed = () => {
  return (
    <div style={{ flex: 5.5 }} className="">
      <UploadPost />
      <Post />
    </div>
  );
};

export default NewsFeed;

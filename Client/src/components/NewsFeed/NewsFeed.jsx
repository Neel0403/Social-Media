import React, { useEffect, useState } from "react";
import UploadPost from "../UploadPost/UploadPost";
import Post from "../Post/Post";
import { Posts } from "../../data/dummyData";
import axios from "axios";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const timelinePosts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/posts/get-timeline-posts/"
        );
        setPosts(res.data.timelinePosts);
      } catch (error) {
        console.log(error);
      }
    };

    timelinePosts();
  }, []);
  return (
    <div style={{ flex: 5.5 }} className="p-[10px]">
      <UploadPost />
      {Posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default NewsFeed;

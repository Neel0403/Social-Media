import React, { useContext, useEffect, useState } from "react";
import UploadPost from "../UploadPost/UploadPost";
import Post from "../Post/Post";
import { getAllPosts, getTimelinePost } from "../../utils/api/api";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NewsFeed = ({ userPosts }) => {
  const [posts, setPosts] = useState([]);
  const { username } = useParams()
  const { user } = useContext(AuthContext)
  // console.log(username);

  useEffect(() => {
    const timelinePosts = async () => {
      try {
        const res = userPosts ? await getTimelinePost(username) : await getAllPosts();
        // console.log(res.data.posts)
        setPosts(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    timelinePosts();
  }, [username]);

  return (
    <div style={{ flex: 5.5 }} className="p-[10px]">
      {(!username || username === user?.username) && <UploadPost />}
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post._id} post={post} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default NewsFeed;

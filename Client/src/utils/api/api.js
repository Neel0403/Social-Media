import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:5000/api/v1"
});

// For arguments, check from the services in backend  

export const getTimelinePost = (username) => API.get(`/posts/get-timeline-posts/${username}`);

export const getAllPosts = () => API.get("/posts");

export const getUserData = (userId) => API.get(`/users/${userId}`);

export const getUserProfileData = (username) => API.get(`/users?username=${username}`);


export const likeAndDislikePost = (postId, userId) => API.put(`/posts/like-post/${postId}`, { userId: userId })

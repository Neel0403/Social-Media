import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:5000/api/v1"
});

export const getTimelinePost = (userId) => {
    API.get(`/posts/get-timeline-posts/${userId}`);
}
export const getAllPosts = () => {
    API.get("/posts");
}
export const getUserData = (userId) => {
    API.get(`/users/${userId}`);
}
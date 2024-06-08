import { API } from "./api";

export const loginAuth = async (userInfo, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await API.post("/auth/login", userInfo);
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.userData   // userData is defined in auth controller file in login method   
        });
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error
        })
    }
}
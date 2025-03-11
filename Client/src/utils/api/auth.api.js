import { API } from "./api";

export const loginAuth = async (userInfo, dispatch) => {
    dispatch({ type: "LOGIN START" });
    try {
        const res = await API.post("/auth/login", userInfo);
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.userData   // userData is defined in auth controller file in login method   
        });
        return res;
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error
        })
    }
}

export const registerUser = (data) => API.post("/auth/register", data)


// import axios from "axios";
// import { LoginStart, LoginSuccess, LoginFailure } from "../../context/AuthActions";

// export const loginAuth = async (userCredentials, dispatch) => {
//     dispatch(LoginStart());
//     try {
//         const res = await axios.post("http://localhost:5000/api/v1/auth/login", userCredentials);
//         dispatch(LoginSuccess(res.data));
//         return res.data;
//     } catch (err) {
//         dispatch(LoginFailure(err));
//         throw err;
//     }
// };

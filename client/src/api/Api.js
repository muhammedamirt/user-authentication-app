// import axios here
import axios from "axios";
// setting base url for axios
const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_BACKEND,
});

// function for pass login data to back end from frontend
export const loginAPI = async (loginData) => {
  const { data } = await API.post("/user-login", loginData);
  console.log(data);
  return data;
};

// function for pass register data to  back end from frontend
export const registerAPI = async (registerData) => {
  const { data } = await API.post("/user-register", registerData);
  return data;
};

// function for pass logout data to  back end from frontend
export const logoutAPI = async () => {
  // Send a request to the server to invalidate the token
  const { data } = await API.get("/user-logout");
  return data;
};

// function for enter home page and check token expires or not
export const checkTokenExpires = async (token) => {
  try {
    // Set the token in the headers of the Axios request
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Make the request to your backend API
    const { data } = await API.get("/check-token-expiration");

    // Handle the response data
    return data;
  } catch (error) {
    console.error(error);
  }
};

// api for google authentication
export const googleLoginAPI = async (userData) => {
  let { data } = await API.post('/google-Login', userData)
  return data;
}

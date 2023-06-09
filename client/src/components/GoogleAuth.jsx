import React from "react";
import jwtDecode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleLoginAPI } from "../api/Api";
import { userAddDetails } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // function for handle google login
  const handelGoogleSignIn = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const { email } = decoded;
    const response = await googleLoginAPI({ email });
    if (response?.authStatus) {
      localStorage.setItem("token", response?.token);
      dispatch(userAddDetails(response?.token));
      navigate("/");
    } else {
      alert("login failed");
    }
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          size="large"
          onSuccess={(response) => {
            handelGoogleSignIn(response);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleAuth;

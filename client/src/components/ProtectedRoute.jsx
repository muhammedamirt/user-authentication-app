import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userAddDetails } from "../redux/authSlice";
import { checkTokenExpires } from "../api/Api";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tokenExpiresCheck = async () => {
    const userToken = localStorage.getItem("token");
    if (!userToken) {
      navigate("/login");
    } else {
      const response = await checkTokenExpires(userToken);
      if (response.userAuthorized === true) {
        dispatch(userAddDetails(userToken));
        return props.children; // Return props.children when user is authorized
      } else {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    tokenExpiresCheck();
  }, []);

  // Render null if props.children is not present
  if (!props.children) {
    return null;
  }

  return <>{props.children}</>; // Render props.children when user is authorized
};

export default ProtectedRoute;

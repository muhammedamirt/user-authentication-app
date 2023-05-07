import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../api/Api";
import { userAddDetails } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const SignUpComponent = () => {
  // setting states for user details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [blankCheck, setBlankCheck] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  // useNavigate hook for navigate other page
  const navigate = useNavigate();
  // useDispatch hook for dispatch redux functionality
  const dispatch = useDispatch();

  // function for handle user registration
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setBlankCheck(true);
    } else {
      setBlankCheck(false);
      //calling the api function for send user data to backend server
      const response = await registerAPI({ name, email, password });
      console.log(response);
      if (response.userRegistered === true) {
        // setting data in redux
        dispatch(userAddDetails({ token: response?.token }));
        //storing token to local storage
        localStorage.setItem("token", response.token);
        navigate("/");
      } else {
        setEmailExists(true);
      }
    }
  };
  return (
    <div>
      <div className="h-[100vh] w-full bg-gradient">
        <div className="h-full flex justify-center items-center">
          <div className="bg-white p-5 w-[400px] rounded-sm shadow-lg shadow-gray-400">
            <div className="flex justify-center text-gray-600">
              <h2 className="font-bold text-2xl">Sign Up</h2>
            </div>
            <div className="w-full">
              {blankCheck && (
                <div>
                  <p className="text-center text-red-600 text-sm">
                    Fill all the field
                  </p>
                </div>
              )}
              {emailExists && (
                <div>
                  <p className="text-center text-red-600 text-sm">
                    Email already exists
                  </p>
                </div>
              )}
              <p className="my-2 text-gray-600 font-semibold text-sm">Name</p>
              <div className="flex gap-2 border-2 p-2 border-gray-600 ">
                <div>
                  <span className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="w-11/12">
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="Your Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="my-2 text-gray-600 font-semibold text-sm">Email</p>
              <div className="flex gap-2 border-2 p-2 border-gray-600 ">
                <div>
                  <span className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </span>
                </div>
                <div className="w-11/12">
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="Your Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="my-2 text-gray-600 font-semibold text-sm">
                Password
              </p>
              <div className="flex gap-2 border-2 p-2 border-gray-600">
                <div>
                  <span className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="w-11/12">
                  <input
                    type="password"
                    className="w-full outline-none"
                    placeholder="Your Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <button
                onClick={handleSignUp}
                className="w-9/12 bg-green-500 hover:bg-green-600 rounded-3xl p-2 transition"
              >
                <p className="font-bold text-white">Sign Up</p>
              </button>
            </div>
            <div className="flex justify-between">
              <p className="text-blue-700 text-sm hover:underline cursor-pointer transition">
                <Link to={"/login"}>Login?</Link>
              </p>
              <p className="text-blue-700 text-sm hover:underline cursor-pointer transition">
                Forgot password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;

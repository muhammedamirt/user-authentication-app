import React from "react";
import { logoutAPI } from "../api/Api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const response = await logoutAPI();
    if (response.userLogout === true) {
      // Clear the token from local storage
      localStorage.removeItem("token");
      // redirect to login page
      navigate("/login");
    } else {
      alert("Logout Failed");
    }
  };
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="bg-gray-100 py-5 px-10">
        <div>
          <h1 className="text-[50px] font-bold opacity-20 m-5">Home Page</h1>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="text-bold w-10/12 bg-orange-500 hover:bg-orange-600 p-2 rounded-2xl"
          >
            <p className="text-white font-bold">Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

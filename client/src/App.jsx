import { Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignupComponent";
import Home from "./components/Home";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
  
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route exact path="/login" element={<LoginComponent />} />
        <Route exact path="/Signup" element={<SignUpComponent />} />
      </Routes>
  );
}

export default App;

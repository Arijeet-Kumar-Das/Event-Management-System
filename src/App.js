import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Vendors from "./pages/Vendors";
import UserInterest from "./pages/UserInterest";
import Vendordashboard from "./pages/Vendordashboard";

function App() {
  return (
    <div>
      <Navbar />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/userinterest" element={<UserInterest />} />
        <Route path="/vendordashboard" element={<Vendordashboard />} />
      </Routes>
    </div>
  );
}

export default App;

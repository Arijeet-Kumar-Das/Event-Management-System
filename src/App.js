import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Vendors from "./pages/Vendors";
import UserInterest from "./pages/UserInterest";

import Ticket from "./pages/Ticket";
import Pass from "./components/Pass";
import Vendordashboard from "./pages/Vendordashboard";
import UserDashboard from "./pages/UserDashboard";
import Venues from "./pages/Venues";
import Venue from "./pages/Venue";
import VendorsPage from "./pages/VendorsPage";
import Vendor from "./pages/Vendor";

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
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/categorised-vendors" element={<VendorsPage />} />
        <Route path="/vendor" element={<Vendor />} />
      </Routes>
    </div>
  );
}

export default App;

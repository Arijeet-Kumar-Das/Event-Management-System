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

        <Route path="/ticket" element={<Ticket />} />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </div>
  );
}

export default App;

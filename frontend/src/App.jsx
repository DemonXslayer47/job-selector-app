import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";


import Skills from "./pages/Skills";
import Jobs from "./pages/Jobs";
import LearnSkills from "./pages/LearnSkills";


import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard/>}/>

        <Route path="/skills" element={<Skills />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/learn-skills" element={<LearnSkills />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </Router>
  );
};

export default App;

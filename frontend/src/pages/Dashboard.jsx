
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/dashboard.css";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   const userName = localStorage.getItem("userName") || "User";

//   return (
//     <div className="dash-container">

//       {/* HEADER SECTION */}
//       <div className="dash-header">
//         <h1 className="dash-title">Welcome, {userName} 👋</h1>
//         <p className="dash-subtitle">Your AI-powered Job & Skill Recommendation Center</p>
//       </div>

//       {/* QUICK ACTIONS */}
//       <div className="dash-actions">
//         <button className="dash-btn" onClick={() => navigate("/skills")}>
//           🎯 Select Your Skills
//         </button>
//         {/* <button className="dash-btn" onClick={() => navigate("/jobs")}>
//           💼 View Job Recommendations
//         </button> */}
//         {/* <button className="dash-btn" onClick={() => navigate("/learn-skills")}>
//           📘 Learn Missing Skills
//         </button> */}
//       </div>

//       {/* OVERVIEW CARDS */}
//       <div className="overview-section">
//         <div className="overview-card">
//           <h3>⭐ Profile Strength</h3>
//           <p>Complete your skill profile to increase accuracy.</p>
//         </div>

//         <div className="overview-card">
//           <h3>🧠 Skills Selected</h3>
//           <p>Your chosen skills help AI match the right jobs.</p>
//         </div>

//         <div className="overview-card">
//           <h3>💼 Recommended Jobs</h3>
//           <p>Find the best opportunities tailored for you.</p>
//         </div>

//         <div className="overview-card">
//           <h3>📚 Suggested Courses</h3>
//           <p>Improve your skills with curated course paths.</p>
//         </div>
//       </div>

//       {/* FEATURE CARDS */}
//       <h2 className="section-title">Features at a Glance</h2>
//       <div className="feature-grid">

//         <div className="feature-card">
//           <h3>AI Job Matching</h3>
//           <p>Smart ranking based on your selected skills.</p>
//         </div>

//         <div className="feature-card">
//           <h3>Instant Course Suggestions</h3>
//           <p>Learn missing skills with curated resources.</p>
//         </div>

//         <div className="feature-card">
//           <h3>Career Path Guidance</h3>
//           <p>Identify roles that align with your strengths.</p>
//         </div>

//       </div>

//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("User");
  const email = localStorage.getItem("email");

  // Fetch name from backend
  useEffect(() => {
    if (!email) return;

    api.get(`/auth/me/${email}`)
      .then((res) => {
        if (res.data?.fullName) {
          setUserName(res.data.fullName);
          localStorage.setItem("userName", res.data.fullName); // update local storage
        }
      })
      .catch((err) => console.log("Error loading user:", err));
  }, [email]);

  return (
    <div className="dash-container">

      {/* HEADER SECTION */}
      <div className="dash-header">
        <h1 className="dash-title">Welcome, {userName} 👋</h1>
        <p className="dash-subtitle">Your AI-powered Job & Skill Recommendation Center</p>
      </div>

      {/* QUICK ACTIONS */}
      <div className="dash-actions">
        <button className="dash-btn" onClick={() => navigate("/skills")}>
          🎯 Select Your Skills
        </button>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="overview-section">
        <div className="overview-card">
          <h3>⭐ Profile Strength</h3>
          <p>Complete your skill profile to increase accuracy.</p>
        </div>

        <div className="overview-card">
          <h3>🧠 Skills Selected</h3>
          <p>Your chosen skills help AI match the right jobs.</p>
        </div>

        <div className="overview-card">
          <h3>💼 Recommended Jobs</h3>
          <p>Find the best opportunities tailored for you.</p>
        </div>

        <div className="overview-card">
          <h3>📚 Suggested Courses</h3>
          <p>Improve your skills with curated course paths.</p>
        </div>
      </div>

      {/* FEATURES */}
      <h2 className="section-title">Features at a Glance</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <h3>AI Job Matching</h3>
          <p>Smart ranking based on your selected skills.</p>
        </div>

        <div className="feature-card">
          <h3>Instant Course Suggestions</h3>
          <p>Learn missing skills with curated resources.</p>
        </div>

        <div className="feature-card">
          <h3>Career Path Guidance</h3>
          <p>Identify roles that align with your strengths.</p>
        </div>
      </div>

    </div>
  );
}

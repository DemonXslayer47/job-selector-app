
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = !!localStorage.getItem("token");

  // Pages where navbar must NOT show login/register:
  const hideAuthPages = ["/skills", "/jobs", "/dashboard", "/learn-skills", "/profile"];


  const hideAuthButtons = isLoggedIn && hideAuthPages.includes(location.pathname);

  const hideProfileIcon = location.pathname === "/profile";

  return (
    <nav className="nav-container">
      
      <div className="nav-left" onClick={() => navigate("/")}>
  <h1 className="nav-logo">
    🤖 Job Selector – Intelligent Job & Course Recommendation System
  </h1>
</div>


      {/* RIGHT SIDE BUTTONS */}
      <div className="nav-right">
        {isLoggedIn && !["/login", "/register", "/forgot-password","/"].includes(location.pathname) && (
  <button className="nav-btn-filled" onClick={() => navigate("/dashboard")}>
    Home
  </button>
)}





        {/* If user logged out → show Home / Login / Register */}
        {!hideAuthButtons && !isLoggedIn && (
          <>
            <button className="nav-btn-filled" onClick={() => navigate("/")}>
              Home
            </button>

            <button className="nav-btn-filled" onClick={() => navigate("/login")}>
              Login
            </button>

            <button className="nav-btn-filled" onClick={() => navigate("/register")}>
              Register
            </button>
          </>
        )}

          {/* Show ONLY ONE profile icon and hide it on profile page */}
{isLoggedIn &&
 !["/login", "/register", "/forgot-password", "/"].includes(location.pathname) &&
 location.pathname !== "/profile" && (
  <div
    className="profile-icon"
    onClick={() => navigate("/profile")}
    title="My Profile"
  >
    👤
  </div>
)}


      </div>
    </nav>
  );
}
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../styles/navbar.css";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isLoggedIn = !!localStorage.getItem("token");

//   return (
//     <nav className="nav-container">

//       <div className="nav-left" onClick={() => navigate("/")}>
//         <h1 className="nav-logo">
//           🤖 Job Selector – Intelligent Job & Course Recommendation System
//         </h1>
//       </div>

//       <div className="nav-right">

//         {/* ============================================
//             SHOW PUBLIC BUTTONS (Home / Login / Register)
//             WHEN USER IS NOT LOGGED IN
//         ============================================ */}
//         {!isLoggedIn && (
//           <>
//             <button className="nav-btn-filled" onClick={() => navigate("/")}>
//               Home
//             </button>

//             <button className="nav-btn-filled" onClick={() => navigate("/login")}>
//               Login
//             </button>

//             <button className="nav-btn-filled" onClick={() => navigate("/register")}>
//               Register
//             </button>
//           </>
//         )}

//         {/* ============================================
//             SHOW DASHBOARD HOME BUTTON (ONLY AFTER LOGIN)
//             HIDE ON LOGIN/REGISTER/PUBLIC PAGES
//         ============================================ */}
//         {isLoggedIn &&
//           !["/login", "/register", "/forgot-password", "/"].includes(location.pathname) && (
//             <button className="nav-btn-filled" onClick={() => navigate("/dashboard")}>
//               Home
//             </button>
//           )}

//         {/* ============================================
//             SHOW PROFILE ICON (ONLY AFTER LOGIN)
//             HIDE ON PROFILE PAGE AND LOGIN/REGISTER
//         ============================================ */}
//         {isLoggedIn &&
//           !["/login", "/register", "/forgot-password", "/", "/profile"].includes(
//             location.pathname
//           ) && (
//             <div
//               className="profile-icon"
//               onClick={() => navigate("/profile")}
//               title="My Profile"
//             >
//               👤
//             </div>
//           )}
//       </div>
//     </nav>
//   );
// }

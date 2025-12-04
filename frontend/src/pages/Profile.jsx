// import React, { useState } from "react";
// import api from "../api/axios";
// import "../styles/profile.css";

// export default function Profile() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [name, setName] = useState(user?.name || "");
//   const [email] = useState(user?.email || "");
//   const [editingName, setEditingName] = useState(false);
//   const [tempName, setTempName] = useState(name);

//   const [gender, setGender] = useState(localStorage.getItem("gender") || "");
//   const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
//   const [address, setAddress] = useState(localStorage.getItem("address") || "");

//   const [skills, setSkills] = useState(
//     JSON.parse(localStorage.getItem("skills")) || []
//   );
//   const [newSkill, setNewSkill] = useState("");

//   const saveName = async () => {
//     await api.put("/auth/update-name", { email, fullName: tempName });

//     const updated = { ...user, name: tempName };
//     localStorage.setItem("user", JSON.stringify(updated));

//     setName(tempName);
//     setEditingName(false);
//     alert("Name updated!");
//   };

//   const savePersonal = () => {
//     localStorage.setItem("gender", gender);
//     localStorage.setItem("phone", phone);
//     localStorage.setItem("address", address);
//     alert("Details saved.");
//   };

//   const addSkill = () => {
//     if (!newSkill.trim()) return;

//     const updated = [...skills, newSkill.trim()];
//     localStorage.setItem("skills", JSON.stringify(updated));
//     setSkills(updated);
//     setNewSkill("");
//   };

//   const removeSkill = (i) => {
//     const updated = skills.filter((_, x) => x !== i);
//     localStorage.setItem("skills", JSON.stringify(updated));
//     setSkills(updated);
//   };

//   return (
//     <div className="profile-bg">
//       <div className="profile-wrapper">

//         {/* Top Profile Section */}
//         {/* TOP PROFILE SECTION */}
// <div className="profile-top">
//   <div className="avatar">👤</div>

//   {!editingName ? (
//     <>
//       <h1 className="top-name">{name}</h1>
//       <p className="top-email">{email}</p>

//       <button className="edit-name-btn" onClick={() => setEditingName(true)}>
//         ✏️ Edit Name
//       </button>
//     </>
//   ) : (
//     <div className="edit-name-row">
//       <input
//         value={tempName}
//         onChange={(e) => setTempName(e.target.value)}
//       />
//       <button className="save-btn" onClick={saveName}>Save</button>
//     </div>
//   )}
// </div>


//         {/* GRID */}
//         <div className="profile-grid">

//           {/* PERSONAL DETAILS */}
//           <div className="profile-card">
//             <h3>Personal Details</h3>

//             <label>Gender</label>
//             <input value={gender} onChange={(e) => setGender(e.target.value)} />

//             <label>Phone</label>
//             <input value={phone} onChange={(e) => setPhone(e.target.value)} />

//             <label>Address</label>
//             <input value={address} onChange={(e) => setAddress(e.target.value)} />

//             <button className="green-btn" onClick={savePersonal}>Save Details</button>
//           </div>

//           {/* SKILLS */}
//           <div className="profile-card">
//   <h3>Skills Overview</h3>

//   <div className="skill-list">
//     {skills.map((skill, i) => (
//       <div className="skill-chip" key={i}>
//         {skill}
//         <span onClick={() => removeSkill(i)}>✖</span>
//       </div>
//     ))}
//   </div>

//   <div className="add-skill-row">
//     <input
//       placeholder="Add skill..."
//       value={newSkill}
//       onChange={(e) => setNewSkill(e.target.value)}
//     />
//     <button className="green-btn small-btn" onClick={addSkill}>Add</button>
//   </div>
// </div>


//           {/* ACTIONS */}
//           <div className="profile-card action-card">
//             <h3>Account Actions</h3>

//             <button className="logout-btn" onClick={() => window.location.href="/login"}>
//               Logout
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const email = localStorage.getItem("email");

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const [gender, setGender] = useState(localStorage.getItem("gender") || "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
  const [address, setAddress] = useState(localStorage.getItem("address") || "");

  useEffect(() => {
    if (email) {
      api.get(`/auth/me/${email}`)
        .then((res) => {
          setUser(res.data);
          setUpdatedName(res.data.fullName);
        })
        .catch((err) => console.log("Profile load error:", err));
    }

    const savedSkills = JSON.parse(localStorage.getItem("profileSkills")) || [];
    setSkills(savedSkills);
  }, [email]);

  const updateName = async () => {
    try {
      await api.put("/auth/update-name", { email, fullName: updatedName });
      setUser(prev => ({ ...prev, fullName: updatedName }));
      setEditing(false);
    } catch (err) {
      alert("Failed to update name");
    }
  };

  const savePersonal = () => {
    localStorage.setItem("gender", gender);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    alert("Details saved.");
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;
    const updated = [...skills, newSkill.trim()];
    setSkills(updated);
    localStorage.setItem("profileSkills", JSON.stringify(updated));
    setNewSkill("");
  };

  const deleteSkill = (skill) => {
    const updated = skills.filter(s => s !== skill);
    setSkills(updated);
    localStorage.setItem("profileSkills", JSON.stringify(updated));
  };

  if (!user) return <div className="profile-loading">Loading...</div>;

  return (
    <div className="profile-bg">
      <div className="profile-wrapper">

        {/* TOP PROFILE HEADER */}
        <div className="profile-header-card">
          <div className="profile-avatar">👤</div>

          {editing ? (
            <input
              className="edit-name-input"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          ) : (
            <h2 className="profile-name">{user.fullName}</h2>
          )}

          <p className="profile-email">{user.email}</p>

          {editing ? (
            <button className="save-btn" onClick={updateName}>Save Name</button>
          ) : (
            <button className="edit-btn" onClick={() => setEditing(true)}>✏️ Edit Name</button>
          )}
        </div>

        {/* PROFILE GRID */}
        <div className="profile-grid">

          {/* PERSONAL DETAILS */}
          <div className="profile-card">
            <h3>Personal Details</h3>

            <label>Gender</label>
            <input value={gender} onChange={(e) => setGender(e.target.value)} />

            <label>Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label>Address</label>
            <input value={address} onChange={(e) => setAddress(e.target.value)} />

            <button className="green-btn" onClick={savePersonal}>Save Details</button>
          </div>

          {/* SKILLS */}
          <div className="profile-card">
            <h3>Skills Overview</h3>

            {skills.length === 0 ? (
              <p>No skills added yet.</p>
            ) : (
              <ul>
                {skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    {skill}
                    <button className="delete-skill" onClick={() => deleteSkill(skill)}>✕</button>
                  </li>
                ))}
              </ul>
            )}

            <div className="add-skill-row">
              <input
                type="text"
                placeholder="Add new skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button className="add-btn" onClick={addSkill}>Add</button>
            </div>
          </div>

          {/* ACCOUNT ACTIONS */}
          <div className="profile-card action-card">
            <h3>Account Actions</h3>

            <button
              className="logout-btn"
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
            >
              🚪 Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

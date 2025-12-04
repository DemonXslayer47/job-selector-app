// import React, { useState,useEffect} from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import "../styles/skills.css";

// // const ALL_SKILLS = [
// //   "Java", "Python", "JavaScript", "React", "Node.js", "HTML", "CSS",
// //   "Spring Boot", "AWS", "SQL", "DevOps", "Docker", "Kubernetes",
// //   "Angular", "Vue", "TypeScript", "Git", "REST APIs"
// // ];


// export default function Skills() {

//   const [input, setInput] = useState("");
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const navigate = useNavigate();

//   const suggestions = ALL_SKILLS.filter(
//     (s) =>
//       input &&
//       s.toLowerCase().startsWith(input.toLowerCase()) &&
//       !selectedSkills.includes(s)
//   );
// useEffect(() => {
//   api.get("/skills")
//      .then(res => setAllSkills(res.data))
// }, []);
//   const addSkill = (skill) => {
//     if (selectedSkills.length >= 10) return;
//     setSelectedSkills([...selectedSkills, skill]);
//     setInput("");
//   };

//   const removeSkill = (skill) => {
//     setSelectedSkills(selectedSkills.filter((s) => s !== skill));
//   };

//   const findJobs = async () => {
//     try {
//       const response = await api.get("/jobs/external", {
//         params: { skills: selectedSkills.join(",") },
//       });

//       console.log("Job API Response:", response.data);

//       navigate("/jobs", { 
//   state: { 
//     jobs: response.data,
//     selectedSkills: selectedSkills 
//   } 
// });

//     } catch (err) {
//       console.error("Error fetching jobs:", err);
//     }
//   };

//   return (
//     <div className="skills-page">
//       <h2>Select Your Skills</h2>
//       <p>Type to search and add up to 10 skills.</p>

//       <div className="skill-input-box">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter a skill..."
//         />

//         {suggestions.length > 0 && (
//           <ul className="suggestion-list">
//             {suggestions.map((skill, idx) => (
//               <li key={idx} onClick={() => addSkill(skill)}>
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="selected-skills">
//         {selectedSkills.map((skill, idx) => (
//           <div className="skill-tag" key={idx}>
//             {skill}
//             <span onClick={() => removeSkill(skill)}>✕</span>
//           </div>
//         ))}
//       </div>

//       <button
//         className="find-jobs-btn"
//         disabled={selectedSkills.length < 5}
//         onClick={findJobs}
//       >
//         Find Matching Jobs
//       </button>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/skills.css";

export default function Skills() {

  const [input, setInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [allSkills, setAllSkills] = useState([]); 
  const navigate = useNavigate();

  // LOAD SKILLS FROM BACKEND
  useEffect(() => {
    api.get("/api/skills")
      .then(res => {
        // 🔥 convert objects → string names
        const skillNames = res.data.map((skill) => skill.name);
        setAllSkills(skillNames);
      })
      .catch(err => console.error("Error loading skills:", err));
  }, []);

  // SUGGESTIONS
  const suggestions = allSkills.filter(
    (s) =>
      input &&
      s.toLowerCase().startsWith(input.toLowerCase()) &&
      !selectedSkills.includes(s)
  );

  const addSkill = (skill) => {
    if (selectedSkills.length >= 10) return;
    setSelectedSkills([...selectedSkills, skill]);
    setInput("");
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const findJobs = async () => {
    try {
      const response = await api.get("/jobs/external", {
        params: { skills: selectedSkills.join(",") },
      });

      navigate("/jobs", { 
        state: { 
          jobs: response.data,
          selectedSkills: selectedSkills 
        } 
      });

    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  return (
    <div className="skills-page">

      {/* TOP BAR WITH PROFILE ICON */}
      <div className="skills-topbar">
        <h2 className="skills-title">Select Your Skills</h2>
        {/* <div className="profile-icon">👤</div> */}
      </div>

      <p className="skills-subtext">
        Type to search and add up to 10 skills.
      </p>

      <div className="skill-input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search skill…"
          className="skill-input"
        />

        {suggestions.length > 0 && (
          <ul className="suggestion-list">
            {suggestions.map((skill, idx) => (
              <li key={idx} onClick={() => addSkill(skill)}>
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="selected-skills">
        {selectedSkills.map((skill, idx) => (
          <div className="skill-tag" key={idx}>
            {skill}
            <span onClick={() => removeSkill(skill)}>✕</span>
          </div>
        ))}
      </div>

      <button
        className="find-jobs-btn"
        disabled={selectedSkills.length < 1}
        onClick={findJobs}
      >
        Find Matching Jobs
      </button>
    </div>
  );
}

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../styles/jobs.css";

// const KNOWN_SKILLS = [
//   "Java","Python","JavaScript","React","Node.js","HTML","CSS",
//   "Spring Boot","AWS","Azure","Docker","Kubernetes","REST API",
//   "RESTful APIs","SQL","Git","CI/CD","Django","Flask","Machine Learning"
// ];

// const extractSkills = (job) => {
//   let text = job.job_description || "";

//   if (job.job_highlights?.Qualifications)
//     text += job.job_highlights.Qualifications.join(" ");
//   if (job.job_highlights?.Responsibilities)
//     text += job.job_highlights.Responsibilities.join(" ");

//   const found = KNOWN_SKILLS.filter((skill) =>
//     text.toLowerCase().includes(skill.toLowerCase())
//   );

//   return [...new Set(found)];
// };

// export default function Jobs() {
//   const { state } = useLocation();
// const navigate = useNavigate();

// // If user reached this page without selecting skills → redirect safely
// if (!state || !state.jobs) {
//   return (
//     <div style={{ padding: "50px", textAlign: "center" }}>
//       <h2>No job data available</h2>
//       <p>Please select your skills again.</p>
//       <button 
//         style={{ padding: "10px 20px", marginTop: "20px" }} 
//         onClick={() => navigate("/skills")}
//       >
//         Go to Skills
//       </button>
//     </div>
//   );
// }

// // ⭐ DEFINE JOBS CORRECTLY ⭐
// const jobs = state.jobs.data || [];
// const selectedSkills = state.selectedSkills || [];

//   return (
//     <div className="jobs-page">
//       <h2 className="header-title">Matching Jobs</h2>

//       <div className="jobs-grid">
//         {jobs.map((job) => {

//           // ⭐ MATCH LOGIC (re-added correctly)
//           const jobSkills = extractSkills(job);
//           const matched = jobSkills.filter(s => selectedSkills.includes(s));
//           const missingSkills = jobSkills.filter(s => !selectedSkills.includes(s));

//           const matchPercent =
//             jobSkills.length === 0
//               ? 0
//               : Math.round((matched.length / jobSkills.length) * 100);

//           return (
//             <div className="job-card-pro" key={job.job_id}>

//               <div className="job-header">
//                 <h3 className="job-title">{job.job_title}</h3>
//                 <p className="job-company">{job.employer_name}</p>
//                 <p className="job-location">{job.job_city}</p>
//               </div>

//               {/* MATCH PERCENT */}
//               <div className="match-box">
//                 <span className="match-label">Match</span>
//                 <span className="match-value">{matchPercent}%</span>
//               </div>

//               {/* APPLY BUTTON */}
//               <button 
//                 className="apply-btn-primary"
//                 onClick={() => window.open(job.job_apply_link, "_blank")}
//               >
//                 Apply
//               </button>

//               {/* LEARN MISSING SKILLS BUTTON */}
//               {missingSkills.length > 0 && (
//                 <button
//                   className="learn-btn-primary"
//                   onClick={() =>
//                     navigate("/learn-skills", { 
//                       state: { 
//                         missingSkills,
//                         jobTitle: job.job_title 
//                       } 
//                     })
//                   }
//                 >
//                   Learn Missing Skills
//                 </button>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

//upone is working

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../styles/jobs.css";

// const KNOWN_SKILLS = [
//   "Java","Python","JavaScript","React","Node.js","HTML","CSS",
//   "Spring Boot","AWS","Azure","Docker","Kubernetes","REST API",
//   "RESTful APIs","SQL","Git","CI/CD","Django","Flask","Machine Learning"
// ];

// const extractSkills = (job) => {
//   let text = job.job_description || "";

//   if (job.job_highlights?.Qualifications)
//     text += job.job_highlights.Qualifications.join(" ");
//   if (job.job_highlights?.Responsibilities)
//     text += job.job_highlights.Responsibilities.join(" ");

//   const found = KNOWN_SKILLS.filter((skill) =>
//     text.toLowerCase().includes(skill.toLowerCase())
//   );

//   return [...new Set(found)];
// };

// export default function Jobs() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   if (!state || !state.jobs) {
//     return (
//       <div className="no-data">
//         <h2>No job data found</h2>
//         <button onClick={() => navigate("/skills")}>← Back to Skills</button>
//       </div>
//     );
//   }

//   const jobs = state.jobs.data || [];
//   const selectedSkills = state.selectedSkills || [];

//   return (
//     <div className="jobs-wrapper">
//       <h1 className="jobs-title">Matching Jobs</h1>

//       <div className="jobs-container">
//         {jobs.map((job) => {
//           const jobSkills = extractSkills(job);
//           const matched = jobSkills.filter(s => selectedSkills.includes(s));
//           const missingSkills = jobSkills.filter(s => !selectedSkills.includes(s));

//           const matchPercent =
//    jobSkills.length === 0
//    ? 0
//      : Math.round((matched.length / jobSkills.length) * 100);


//           return (
//             <div className="job-card" key={job.job_id}>

//               {/* Job Header */}
//               <div className="job-top">
//                 <h3 className="job-title">{job.job_title}</h3>
//                 <p className="job-company">{job.employer_name}</p>
//                 <p className="job-location">{job.job_city || job.job_country}</p>
//               </div>

//               {/* Match Badge */}
//               <div className="match-badge">
//                 {matchPercent}% Match
//               </div>

//               {/* Action Buttons */}
//               <div className="job-actions">
//                 <button
//                   className="apply-btn"
//                   onClick={() => window.open(job.job_apply_link, "_blank")}
//                 >
//                   Apply
//                 </button>

//                 {missingSkills.length > 0 && (
//                   <button
//                     className="learn-btn"
//                     onClick={() =>
//                       navigate("/learn-skills", {
//                         state: { missingSkills, jobTitle: job.job_title }
//                       })
//                     }
//                   >
//                     Learn Missing Skills
//                   </button>
//                 )}
//               </div>

//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/jobs.css";

const KNOWN_SKILLS = [
  "Java","Python","JavaScript","React","Node.js","HTML","CSS",
  "Spring Boot","AWS","Azure","Docker","Kubernetes","REST API",
  "RESTful APIs","SQL","Git","CI/CD","Django","Flask","Machine Learning"
];

const extractSkills = (job) => {
  let text = job.job_description || "";

  if (job.job_highlights?.Qualifications)
    text += job.job_highlights.Qualifications.join(" ");
  if (job.job_highlights?.Responsibilities)
    text += job.job_highlights.Responsibilities.join(" ");

  const found = KNOWN_SKILLS.filter((skill) =>
    text.toLowerCase().includes(skill.toLowerCase())
  );

  return [...new Set(found)];
};

export default function Jobs() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.jobs) {
    return (
      <div className="no-data">
        <h2>No job data found</h2>
        <button onClick={() => navigate("/skills")}>← Back to Skills</button>
      </div>
    );
  }

  const jobs = state.jobs.data || [];
  const selectedSkills = state.selectedSkills || [];

  // ⭐ PROCESS & SORT JOBS BY MATCH
  const processedJobs = jobs
    .map((job) => {
      const jobSkills = extractSkills(job);
      const matched = jobSkills.filter((s) => selectedSkills.includes(s));

      const missing = jobSkills.filter((s) => !selectedSkills.includes(s));

      // ⭐ Balanced match scoring
      const totalPossible = selectedSkills.length + jobSkills.length - matched.length;

      let score =
        totalPossible === 0
          ? 0
          : Math.round((matched.length / totalPossible) * 100);

      // ⭐ YOU REQUESTED: “More percentage”
      // So bump score slightly to avoid too low percentages
      if (score > 0 && score < 50) score += 40; // pushes 10 → 50, 30 → 70 etc.
      if (score > 100) score = 100;

      return {
        job,
        jobSkills,
        matched,
        missing,
        matchPercent: score
      };
    })
    .filter((item) => item.matchPercent >= 50) // ⭐ Show only >50%
    .sort((a, b) => b.matchPercent - a.matchPercent); // ⭐ highest → lowest

  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-title">Matching Jobs</h1>

      <div className="jobs-container">
        {processedJobs.map(({ job, jobSkills, missing, matchPercent }) => (
          <div className="job-card" key={job.job_id}>
            
            <div className="job-top">
              <h3 className="job-title">{job.job_title}</h3>
              <p className="job-company">{job.employer_name}</p>
              <p className="job-location">{job.job_city || job.job_country}</p>
            </div>

            <div className="match-badge">{matchPercent}% Match</div>

            <div className="job-actions">
              <button
                className="apply-btn"
                onClick={() => window.open(job.job_apply_link, "_blank")}
              >
                Apply
              </button>

              {missing.length > 0 && (
                <button
                  className="learn-btn"
                  onClick={() =>
                    navigate("/learn-skills", {
                      state: { missingSkills: missing, jobTitle: job.job_title }
                    })
                  }
                >
                  Learn Missing Skills
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}


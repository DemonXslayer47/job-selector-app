// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../styles/learnskills.css";

// const COURSE_DATA = {
//     Java: { duration: "6 Weeks", level: "Intermediate", rating: "⭐⭐⭐⭐", provider: "Coursera", link: "https://www.coursera.org/specializations/java-programming" },
//     AWS: { duration: "4 Weeks", level: "Beginner", rating: "⭐⭐⭐", provider: "Udemy", link: "https://www.udemy.com/topic/aws/" },
//     Azure: { duration: "5 Weeks", level: "Beginner", rating: "⭐⭐⭐", provider: "Coursera", link: "https://www.coursera.org/learn/microsoft-azure" },
//     React: { duration: "8 Weeks", level: "Advanced", rating: "⭐⭐⭐⭐", provider: "EDX", link: "https://www.edx.org/learn/react" },
//     SQL: { duration: "3 Weeks", level: "Beginner", rating: "⭐⭐⭐⭐", provider: "Coursera", link: "https://www.coursera.org/learn/sql-for-data-science" }
// };

// export default function LearnSkills() {
//     const navigate = useNavigate();
//     const { state } = useLocation();
//     const missingSkills = state?.missingSkills || [];
//     const jobTitle = state?.jobTitle || "Selected Job";
//     useEffect(() => {
//   if (missingSkills.length > 0) {
//      missingSkills.forEach(skill => {
//         api.get(`/courses/${skill}`).then(res => {
//            setCourses(prev => ({ ...prev, [skill]: res.data }));
//         });
//      });
//   }
// }, [missingSkills]);

//     return (
//         <div className="learn-page">
//             <h2>Learn Missing Skills for {jobTitle}</h2>

//             <table className="skill-table">
//                 <thead>
//                     <tr>
//                         <th>Course</th>
//                         <th>Duration</th>
//                         <th>Difficulty</th>
//                         <th>Rating</th>
//                         <th>Provider</th>
//                         <th>Link</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {missingSkills.map(skill => {
//                         const course = COURSE_DATA[skill] || {
//                             duration: "-",
//                             level: "-",
//                             rating: "-",
//                             provider: "Google",
//                             link: `https://www.google.com/search?q=Learn+${skill}`
//                         };

//                         return (
//                             <tr key={skill}>
//                                 <td>{skill}</td>
//                                 <td>{course.duration}</td>
//                                 <td>{course.level}</td>
//                                 <td>{course.rating}</td>
//                                 <td>{course.provider}</td>
//                                 <td>
//                                     <a href={course.link} target="_blank" rel="noreferrer">
//                                         Link
//                                     </a>
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>

//             <button className="back-btn" onClick={() => navigate("/jobs")}>
//                 Back to Jobs
//             </button>
//         </div>
//     );
// }
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import api from "../api/axios"; // <-- Your Axios instance
// import "../styles/learnskills.css";

// export default function LearnSkills() {
//     const navigate = useNavigate();
//     const { state } = useLocation();

//     const missingSkills = state?.missingSkills || [];
//     const jobTitle = state?.jobTitle || "Selected Job";

//     const [courses, setCourses] = useState({}); 
//     const [loading, setLoading] = useState(true);

//     // 🔥 FETCH courses from BACKEND database
//     useEffect(() => {
//         async function loadCourses() {
//             let temp = {};

//             for (const skill of missingSkills) {
//                 try {
//                     const res = await api.get(`/api/courses/${skill}`);
//                     temp[skill] = res.data;
//                 } catch (err) {
//                     temp[skill] = [];
//                 }
//             }

//             setCourses(temp);
//             setLoading(false);
//         }

//         if (missingSkills.length > 0) loadCourses();
//     }, [missingSkills]);

//     if (loading)
//         return <h2 className="loading-text">⏳ Loading learning resources...</h2>;

//     return (
//         <div className="learn-page">
//             <h2 className="learn-title">
//                 Learn Missing Skills for <span>{jobTitle}</span>
//             </h2>

//             <div className="skills-container">
//                 {missingSkills.map((skill) => (
//                     <div className="skill-card" key={skill}>
//                         <h3 className="skill-name">{skill}</h3>

//                         {courses[skill]?.length > 0 ? (
//                             <table className="course-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Course</th>
//                                         <th>Provider</th>
//                                         <th>Difficulty</th>
//                                         <th>Duration</th>
//                                         <th>Rating</th>
//                                         <th>Link</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {courses[skill].map((c, idx) => (
//                                         <tr key={idx}>
//                                             <td>{c.courseName}</td>
//                                             <td>{c.provider}</td>
//                                             <td>{c.difficulty}</td>
//                                             <td>{c.duration}</td>
//                                             <td>{c.rating}</td>
//                                             <td>
//                                                 <a
//                                                     href={c.link}
//                                                     target="_blank"
//                                                     rel="noreferrer"
//                                                 >
//                                                     View
//                                                 </a>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         ) : (
//                             <p className="no-data">
//                                 No courses found in DB.  
//                                 <a 
//                                     href={`https://www.google.com/search?q=Learn+${skill}`} 
//                                     target="_blank"
//                                     rel="noreferrer"
//                                 >
//                                     Search on Google
//                                 </a>
//                             </p>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             <button className="back-btn" onClick={() => navigate("/jobs")}>
//                 ⬅ Back to Jobs
//             </button>
//         </div>
//     );
// }
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import "../styles/learnskills.css";

// export default function LearnSkills() {
//     const navigate = useNavigate();
//     const { state } = useLocation();

//     const missingSkills = state?.missingSkills || [];
//     const jobTitle = state?.jobTitle || "Selected Job";

//     const [courseData, setCourseData] = useState({});

//     useEffect(() => {
//         missingSkills.forEach(skill => {
//             api.get(`/api/courses/${skill}`)
//                 .then(res => {
//                     setCourseData(prev => ({ ...prev, [skill]: res.data }));
//                 })
//                 .catch(err => console.error("Error fetching:", err));
//         });
//     }, [missingSkills]);

//     return (
//         <div className="learn-container">
            
//             <h1 className="learn-title">
//                 Learn Missing Skills for <span>{jobTitle}</span>
//             </h1>

//             <div className="skills-grid">
//                 {missingSkills.map(skill => (
//                     <div key={skill} className="skill-box">
//                         <h2>{skill}</h2>

//                         {courseData[skill]?.length > 0 ? (
//                             courseData[skill].map((course, i) => (
//                                 <div key={i} className="course-card">
//                                     <h3>{course.title}</h3>
//                                     <p><b>Provider:</b> {course.provider}</p>
//                                     <p><b>Difficulty:</b> {course.difficulty}</p>
//                                     <p><b>Duration:</b> {course.duration}</p>
//                                     <p><b>Rating:</b> ⭐ {course.rating}</p>

//                                     <a href={course.link} 
//                                        target="_blank" 
//                                        rel="noreferrer"
//                                        className="course-link">
//                                        Open Course →
//                                     </a>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="no-course">No courses found for this skill.</p>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             <button className="back-btn" onClick={() => navigate("/jobs")}>
//                 ⟵ Back to Jobs
//             </button>
//         </div>
//     );
// }
//previous one working from DBV
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/learnskills.css";

export default function LearnSkills() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const missingSkills = state?.missingSkills || [];
    const jobTitle = state?.jobTitle || "Selected Job";

    const [courseData, setCourseData] = useState({});

    useEffect(() => {
        missingSkills.forEach(skill => {
            api.get(`/api/courses/${skill}`)
                .then(res => {
                    setCourseData(prev => ({ ...prev, [skill]: res.data }));
                })
                .catch(err => console.error("Error fetching:", err));
        });
    }, [missingSkills]);

    return (
        <div className="learn-page">

            {/* MAIN HEADER */}
            <h4 className="job-title">
                Learn Missing Skills for <span className="job-title">{jobTitle}</span>
            </h4>

            {/* GRID OF SKILL CARDS */}
            <div className="skills-grid">
                {missingSkills.map(skill => (
                    <div key={skill} className="skill-card">
                        <h2 className="skill-name">{skill}</h2>

                        {courseData[skill]?.length > 0 ? (
                            courseData[skill].map((course, i) => (
                                <div key={i} className="course-card">
                                    <p><b>Provider:</b> {course.provider}</p>
                                    <p><b>Difficulty:</b> {course.difficulty}</p>
                                    <p><b>Duration:</b> {course.duration}</p>
                                    <p><b>Rating:</b> ⭐ {course.rating}</p>

                                    <a
                                        href={course.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="course-link"
                                    >
                                        Open Course →
                                    </a>
                                </div>
                            ))
                        ) : (
                            <div className="no-course">
                                <p>No courses found in DB.</p>
                                <a
                                    href={`https://www.google.com/search?q=Learn+${skill}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="google-link"
                                >
                                    Search on Google →
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back to Jobs
            </button>
        </div>
    );
}

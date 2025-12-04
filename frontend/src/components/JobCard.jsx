import React from "react";
import CourseCard from "./CourseCard";
import "../styles/jobs.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <h4>{job.company}</h4>
      <p className="location">{job.location}</p>

      <div className="match-box">
        <strong>Match: {job.matchPercentage.toFixed(1)}%</strong>
      </div>

      <p className="desc">{job.description.substring(0, 180)}...</p>

      <div className="skills-section">
        <p><strong>Missing Skills:</strong></p>
        {job.missingSkills.length > 0 ? (
          <ul>
            {job.missingSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        ) : (
          <p>Great! You meet all required skills.</p>
        )}
      </div>

      {job.missingSkills.length > 0 && (
        <div className="course-section">
          <p><strong>Recommended Courses:</strong></p>

          {Object.entries(job.courseRecommendations).map(([skill, courses]) => (
            <div key={skill} className="course-skill-group">
              <h4>{skill}</h4>
              {courses.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobCard;

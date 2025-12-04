import React from "react";
import "../styles/jobs.css";

const CourseCard = ({ course }) => {
  return (
    <a href={course.link} target="_blank" rel="noopener noreferrer" className="course-card">
      <div>
        <h5>{course.title}</h5>
        <p>{course.provider}</p>
        {course.rating && <span>⭐ {course.rating}</span>}
      </div>
    </a>
  );
};

export default CourseCard;

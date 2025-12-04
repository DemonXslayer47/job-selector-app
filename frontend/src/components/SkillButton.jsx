import React from "react";
import "../styles/skills.css";

const SkillButton = ({ name, selected, onClick }) => {
  return (
    <button className={`skill-btn ${selected ? "selected" : ""}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default SkillButton;

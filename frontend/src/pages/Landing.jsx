import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="landing-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            Find Your Perfect Job Match with <span>AI-Powered Skill Insights</span>
          </h1>

          <p className="hero-subtitle">
            Discover jobs tailored to your skills, identify missing abilities, and learn
            exactly what you need to grow your career — instantly.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/register")}
          >
            Get Started →
          </button>
        </div>

        <div className="hero-image" data-aos="zoom-in">
          <img
  src="https://cdn3d.iconscout.com/3d/premium/thumb/job-interview-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--recruitment-career-human-resource-pack-professions-illustrations-6571529.png"
  alt="Job illustration"
  className="hero-illustration"
/>

        </div>

        {/* Floating Icons */}
        <div className="float-icon float1">💼</div>
        <div className="float-icon float2">✨</div>
        <div className="float-icon float3">📊</div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2 className="section-title" data-aos="fade-up">
          Explore Your Career Path
        </h2>

        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card" data-aos="fade-right">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="skills"
            />
            <h3>Skills</h3>
            <p>Choose the technologies you know & get instant job matches.</p>
            <button onClick={() => navigate("/skills")}>Start</button>
          </div>

          {/* Card 2 */}
          <div className="feature-card" data-aos="fade-up">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="job insights"
            />
            <h3>Job Insights</h3>
            <p>Understand industry demand and explore real job requirements.</p>
            <button onClick={() => navigate("/jobs")}>Explore</button>
          </div>

          {/* Card 3 */}
          <div className="feature-card" data-aos="fade-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="courses"
            />
            <h3>Courses</h3>
            <p>Learn missing skills with curated courses from trusted sources.</p>
            <button onClick={() => navigate("/courses")}>Learn</button>
          </div>
        </div>
      </section>
    </div>
  );
}
